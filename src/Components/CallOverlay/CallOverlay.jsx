import React, { useEffect, useState } from 'react'
import './CallOverlay.css'

export default function CallOverlay({ contact, isActive, onEndCall }) {
    // ... (resto del código igual)
    const [duration, setDuration] = useState(0)

    useEffect(() => {
        let interval
        if (isActive) {
            setDuration(0)
            interval = setInterval(() => {
                setDuration(prev => prev + 1)
            }, 1000)
        }
        return () => clearInterval(interval)
    }, [isActive])

    const formatDuration = (seconds) => {
        const mins = Math.floor(seconds / 60)
        const secs = seconds % 60
        return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`
    }

    if (!contact) return null

    return (
        <div className={`call-overlay ${isActive ? 'active' : ''}`}>
            <div className='call-content'>
                {contact.profile_picture ? (
                    <img src={contact.profile_picture} alt={contact.name} className='call-avatar' />
                ) : (
                    <div className='call-avatar call-avatar-initial'>
                        {contact.name.charAt(0).toUpperCase()}
                    </div>
                )}
                <h2>{contact.name}</h2>
                <p className='call-job-title'>{contact.job_title || 'Chat Grupal'}</p>

                <div className='call-status'>
                    <p>{isActive ? 'Llamando...' : 'Conectando...'}</p>
                    <span className='call-duration'>
                        {formatDuration(duration)}
                    </span>
                </div>

                <button className='end-call-button' onClick={onEndCall} title="Finalizar llamada">
                    <i className="bi bi-telephone-x-fill"></i>
                </button>
            </div>
        </div>
    )
}
