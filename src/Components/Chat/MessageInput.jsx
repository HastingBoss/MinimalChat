import React from 'react'

export default function MessageInput({ messageText, onChange, onSubmit }) {
    return (
        <form className='chat-input-container' onSubmit={onSubmit}>
            <input
                type='text'
                className='chat-input'
                placeholder='Escribe un mensaje...'
                value={messageText}
                onChange={onChange}
            />
            <button type='submit' className='send-button'>
                <i className="bi bi-send-fill"></i>
            </button>
        </form>
    )
}
