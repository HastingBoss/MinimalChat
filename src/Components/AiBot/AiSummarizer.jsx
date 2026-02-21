import React, { useState, useEffect } from 'react'
import { GoogleGenerativeAI } from "@google/generative-ai"
import './AiSummarizer.css'

export default function AiSummarizer({ messages, contactName, onClose }) {
    const [summary, setSummary] = useState("")
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [hasAttempted, setHasAttempted] = useState(false)

    // Solo resumimos una vez al montar el componente
    useEffect(() => {
        if (!hasAttempted && messages && messages.length > 0) {
            handleSummarize()
        } else if (!messages || messages.length === 0) {
            setSummary("No hay suficientes mensajes en este chat para generar un resumen.")
        }
    }, [messages, hasAttempted])

    const handleSummarize = async () => {
        const apiKey = import.meta.env.VITE_GEMINI_API_KEY;

        if (!apiKey) {
            setError("Error: No se encontró la API Key de Gemini. Verifica tu archivo .env");
            return
        }

        setIsLoading(true)
        setError(null)
        setHasAttempted(true)

        try {
            const genAI = new GoogleGenerativeAI(apiKey.trim());
            // En 2026, el modelo estándar para el tier gratuito es 2.5-flash
            const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" })

            const chatHistory = messages
                .slice(-30)
                .map(m => {
                    const sender = m.send_by_me ? "Yo" : (m.sender?.name || contactName)
                    return `${sender}: ${m.message}`
                })
                .join("\n")

            const prompt = `Actúa como un asistente administrativo profesional. Resume esta conversación de chat en 3 puntos clave destacando acuerdos o tareas: \n\n${chatHistory}`

            const result = await model.generateContent(prompt)
            const response = await result.response
            setSummary(response.text())
        } catch (error) {
            console.error("Error Gemini:", error)
            let errorMsg = "No se pudo generar el resumen. Revisa tu conexión o API Key.";

            if (error.message?.includes("429")) {
                errorMsg = "Límite de cuota excedido para el plan gratuito. Por favor, intenta de nuevo en 30 segundos.";
            } else if (error.message?.includes("404")) {
                errorMsg = "El modelo de IA solicitado no está disponible. Intentando reconectar...";
            }

            setError(errorMsg)
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
