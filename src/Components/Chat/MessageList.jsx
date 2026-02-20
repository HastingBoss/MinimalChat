import React from 'react'

export default function MessageList({ messages }) {
    if (!messages) return null

    return (
        <div className='messages-list'>
            {messages.map(message => (
                <div
                    key={message.id}
                    className={`message ${message.send_by_me ? 'sent' : 'received'}`}
                    onClick={() => {
                        navigator.clipboard.writeText(message.message)
                    }}
                    title="Click para copiar"
                >
                    <p>{message.message}</p>
                    <div className='message-meta'>
                        <span>{message.created_at}</span>
                        <span>{message.is_read ? '✓✓' : '✓'}</span>
                    </div>
                </div>
            ))}
        </div>
    )
}
