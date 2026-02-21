import React, { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import './AiSummarizer.css'

export default function AiSummarizer({ messages, contactName, onClose }) {
    const [summary, setSummary] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)

    // Configuración de Gemini
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY
    const genAI = apiKey ? new GoogleGenerativeAI(apiKey) : null

    useEffect(() => {
        if (messages && messages.length > 0) {
            handleSummarize()
        } else {
            setSummary("No hay suficientes mensajes en este chat para generar un resumen.")
        }
    }, [messages])

    const handleSummarize = async () => {
        if (!genAI) {
            setError("Error: No se encontró la API Key de Gemini. Asegúrate de configurar VITE_GEMINI_API_KEY en tu archivo .env")
            return
        }

        setIsLoading(true)
        setError(null)

        try {
            const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" })

            // Formatear mensajes para el prompt
            const chatHistory = messages
                .slice(-20) // Tomamos los últimos 20 mensajes para el resumen
                .map(m => {
                    const sender = m.send_by_me ? "Yo" : (m.sender?.name || contactName)
                    return `[${m.created_at}] ${sender}: ${m.message}`
                })
                .join("\n")

            const prompt = `Actúa como un asistente administrativo formal y experto en comunicación corporativa. 
            Tu tarea es resumir los puntos más importantes de la siguiente conversación en Slack de forma concisa.
            
            Reglas:
            1. Usa un tono profesional y directo.
            2. Presenta el resumen en 3 o 4 puntos clave (bullet points).
            3. Si se mencionaron tareas, fechas o acuerdos, asegúrate de incluirlos.
            4. Responde en español.

            Conversación:
            ${chatHistory}`

            const result = await model.generateContent(prompt)
            const response = await result.response
            setSummary(response.text())
        } catch (error) {
            console.error("Error al resumir:", error)
            setError("No se pudo generar el resumen. Verifica tu conexión o la validez de tu API Key.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="ai-modal-overlay" onClick={onClose}>
            <div className="ai-modal" onClick={e => e.stopPropagation()}>
                <div className="ai-modal-header">
                    <i className="bi bi-robot"></i>
                    <h3>Resumen Inteligente - {contactName}</h3>
                </div>

                <div className="ai-modal-body">
                    {isLoading ? (
                        <div className="ai-loading-container">
                            <div className="ai-spinner"></div>
                            <p>Analizando la conversación con Gemini 2.0...</p>
                        </div>
                    ) : error ? (
                        <div className="ai-error-container" style={{ color: '#ef4444', textAlign: 'center' }}>
                            <i className="bi bi-exclamation-triangle" style={{ fontSize: '2rem' }}></i>
                            <p>{error}</p>
                        </div>
                    ) : (
                        <div className="ai-summary-text">
                            {summary}
                        </div>
                    )}
                </div>

                <div className="ai-modal-footer">
                    <button className="ai-close-btn" onClick={onClose}>Cerrar</button>
                </div>
            </div>
        </div>
    )
}
