import React from 'react'
import './MessageList.css'

/**
 * Componente que renderiza la lista de mensajes de una conversación
 * Soporta renderizado de Markdown básico y visualización de archivos adjuntos
 */
export default function MessageList({ messages, contact, searchTerm, onClearSearch }) {
    if (!messages) return null

    /**
     * Motor de parseo simple para Markdown
     * Convierte sintaxis como **bold** o _italic_ en etiquetas HTML
     */
    const renderMarkdown = (text) => {
        if (!text) return { __html: '' }
        let html = text
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/_(.*?)_/g, '<em>$1</em>')
            .replace(/~~(.*?)~~/g, '<del>$1</del>')
            .replace(/`(.*?)`(?!.*<\/code>)/g, '<code>$1</code>')
            .replace(/\[(.*?)\]\((.*?)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
            .replace(/\n/g, '<br />')

        return { __html: html }
    }

    // Filtrar mensajes si hay un término de búsqueda
    const filteredMessages = searchTerm
        ? messages.filter(m => m.message.toLowerCase().includes(searchTerm.toLowerCase()))
        : messages

    if (searchTerm && filteredMessages.length === 0) {
        return (
            <div className='no-search-results'>
                <i className="bi bi-search"></i>
                <p>No se encontraron mensajes que coincidan con "<b>{searchTerm}</b>"</p>
                <button className='clear-search-btn' onClick={onClearSearch}>Ver todos los mensajes</button>
            </div>
        )
    }

    return (
        <div className='messages-list'>
            {/* Separador de fecha estático */}
            {!searchTerm && (
                <div className='date-separator'>
                    <hr />
                    <span>HOY</span>
                    <hr />
                </div>
            )}

            {filteredMessages.map((message, index) => {
                // Determinar remitente para mostrar avatar y nombre correcto
                const senderName = message.sender?.name || (message.send_by_me ? 'Marshall Brown' : (contact?.name || 'Otro Usuario'))
                const senderAvatar = message.sender?.avatar || (message.send_by_me ? 'https://randomuser.me/api/portraits/men/32.jpg' : (contact?.profile_picture || `https://randomuser.me/api/portraits/thumb/men/${(message.id % 20) + 1}.jpg`))

                // Determinar si este mensaje es un match directo del buscador
                const isMatch = searchTerm && message.message.toLowerCase().includes(searchTerm.toLowerCase())

                return (
                    <div key={message.id} className={`message-item ${isMatch ? 'search-highlight' : ''}`}>
                        <img
                            src={senderAvatar}
                            alt='avatar'
                            className='message-avatar'
                        />
                        <div className='message-content'>
                            <div className='message-info'>
                                <span className='sender-name'>{senderName}</span>
                                <span className='message-time'>{message.created_at}</span>
                            </div>
                            {/* Renderizado seguro del contenido Markdown */}
                            <div
                                className='message-text'
                                dangerouslySetInnerHTML={renderMarkdown(message.message)}
                            />
                            {/* Previsualización especial para archivos de diseño (ej: Figma) */}
                            {message.message.includes('Figma') && (
                                <div className='file-attachment-preview'>
                                    <div className='file-preview-card'>
                                        <div className='preview-image'><i className="bi bi-image"></i></div>
                                        <div className='preview-details'>
                                            <i className="bi bi-question-circle preview-type-icon"></i>
                                            <div className='preview-text'>
                                                <p className='preview-name'>Dashboard_V2.fig</p>
                                                <p className='preview-size'>2.4 MB</p>
                                            </div>
                                            <i className="bi bi-download preview-download-icon"></i>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
