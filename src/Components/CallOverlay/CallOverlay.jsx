import React, { useEffect, useState } from 'react'
// Este componente muestra la interfaz de llamada superpuesta
// Recibe la información del contacto, el estado activo y la función para finalizar

export default function CallOverlay({ contact, isActive, onEndCall }) {
    // Estado para contar la duración de la llamada
    const [duration, setDuration] = useState(0)

    // Efecto para el cronómetro de la llamada
    useEffect(() => {
        let interval
        if (isActive) {
            setDuration(0) // Reiniciar contador
            interval = setInterval(() => {
                setDuration(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isActive])

    // Formatear segundos a MM:SS
    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    if (!contact) return null

    return (
        // La clase 'active' controla la visibilidad (transform) via CSS
        <div className={`call-overlay ${isActive ? 'active' : ''}`}>
            <div className='call-content'>
                <img src={contact.profile_picture} alt={contact.name} className='call-avatar' />
                <h2>{contact.name}</h2>
                <p style={{ color: '#aaa', margin: '0' }}>{contact.job_title}</p>

                <div className='call-status'>
                    <p>{isActive ? 'Llamando...' : 'Conectando...'}</p>
                    <span style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>
                        {formatDuration(duration)}
                    </span>
                </div>

                {/* Botón para colgar */}
                <button className='end-call-button' onClick={onEndCall} title="Finalizar llamada">
                    <i className="bi bi-telephone-x-fill"></i>
                </button>
            </div>
        </div>
    )
}
