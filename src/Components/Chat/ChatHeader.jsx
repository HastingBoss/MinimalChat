import React, { useState } from 'react'
import { useNotification } from '../../Context/NotificationContext'
import './ChatHeader.css'

export default function ChatHeader({ contact, onCall, searchTerm, onSearchChange, onToggleLeft, onToggleRight }) {
    const { showNotification } = useNotification()
    const [isSearching, setIsSearching] = useState(false)

    if (!contact) return null

    const handleInfoClick = () => {
        const msgCount = contact.messages?.length || 0
        const filesCount = contact.messages?.filter(m => m.message.includes('fig') || m.message.includes('pdf')).length || 0
        showNotification(`Info del chat: ${msgCount} mensajes, ${filesCount} archivos compartidos`, 'info')
    }

    return (
        <div className='chat-header'>
            <div className='chat-header-left'>
                <i className="bi bi-list mobile-nav-toggle" onClick={onToggleLeft} title="Menú de contactos"></i>
                <h2>
                    {contact.type === 'channel' ? <i className="bi bi-hash"></i> : <i className="bi bi-person"></i>}
                    {contact.type === 'channel' ? contact.name : contact.name.toLowerCase().replace(' ', '-')}
                    <span className='team-tag'>Team</span>
                </h2>
                <p className='chat-header-description'>
                    {contact.description || contact.job_title || 'Sin descripción disponible para este chat.'}
                </p>
            </div>

            <div className='chat-header-right'>
                <div className={`search-container ${isSearching ? 'active' : ''}`}>
                    <i className="bi bi-search header-icon" onClick={() => setIsSearching(!isSearching)} title="Buscar en la conversación"></i>
                    {isSearching && (
                        <input
                            type="text"
                            placeholder="Buscar mensajes..."
                            value={searchTerm}
                            onChange={(e) => onSearchChange(e.target.value)}
                            autoFocus
                            onBlur={() => !searchTerm && setIsSearching(false)}
                            className="header-search-input"
                        />
                    )}
                </div>

                <i className="bi bi-telephone header-icon" onClick={onCall} title="Iniciar llamada de voz"></i>
                <i className="bi bi-layout-sidebar-reverse mobile-nav-toggle right" onClick={onToggleRight} title="Ver detalles del perfil"></i>
                <i className="bi bi-info-circle header-icon desktop-only" onClick={handleInfoClick} title="Ver estadísticas del chat"></i>
            </div>
        </div>
    )
}
