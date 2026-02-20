import React from 'react'
import { Link } from 'react-router' // not needed here

export default function ChatHeader({ contact, onCall, error }) {
    if (!contact) return null

    return (
        <div className='chat-header'>
            {/* Mensaje de error de horario flotante */}
            {error && (
                <div style={{ position: 'absolute', top: '80px', right: '20px', zIndex: 50 }} className='check-status-message'>
                    {error}
                </div>
            )}

            <img src={contact.profile_picture} alt={contact.name} />
            <div className='chat-header-info'>
                <h2>{contact.name}</h2>
                <p className='job-title'>{contact.job_title}</p>
                <div className='status-info'>
                    <span className='connection'>Últ. con.: {contact.last_time_connection}</span>
                    <span className='work-hours'>• Horario: {contact.work_hours}</span>
                </div>
            </div>
            {/* Botón para iniciar llamada */}
            <button className='call-button' onClick={onCall} title="Llamar">
                <i className="bi bi-telephone-fill"></i>
            </button>
        </div>
    )
}
