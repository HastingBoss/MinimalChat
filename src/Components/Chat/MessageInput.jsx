import React, { useRef } from 'react'
import './MessageInput.css'

export default function MessageInput({ messageText, setMessageText, onChange, onSubmit }) {
    const textareaRef = useRef(null)
    const fileInputRef = useRef(null)

    /**
     * Permite enviar el mensaje con la tecla Enter, 
     * evitando el salto de línea a menos que se presione Shift.
     */
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            onSubmit(e)
        }
    }

    /**
     * Aplica etiquetas de formato (Markdown) al texto seleccionado 
     * o inserta un marcador de posición si no hay selección.
     */
    const applyFormat = (prefix, suffix = prefix) => {
        const textarea = textareaRef.current
        const start = textarea.selectionStart
        const end = textarea.selectionEnd
        const text = textarea.value

        const before = text.substring(0, start)
        const selected = text.substring(start, end)
        const after = text.substring(end)

        // Se aplica el formato al texto seleccionado
        const newText = before + prefix + (selected || "texto") + suffix + after
        setMessageText(newText)

        // Devuelve el foco al textarea y ajusta el cursor
        setTimeout(() => {
            textarea.focus()
            textarea.setSelectionRange(start + prefix.length, end + prefix.length + (selected ? 0 : 5))
        }, 0)
    }

    /**
     * Inserta caracteres especiales (como emojis o menciones) en la posición actual
     */
    const insertText = (textToInsert) => {
        const textarea = textareaRef.current
        const start = textarea.selectionStart
        const text = textarea.value
        const newText = text.substring(0, start) + textToInsert + text.substring(start)
        setMessageText(newText)
    }

    /**
     * Simula la subida de un archivo agregando el nombre al texto
     */
    const handleFileChange = (e) => {
        const file = e.target.files[0]
        if (file) {
            setMessageText(prev => prev + ` [Archivo: ${file.name}] `)
        }
    }

    return (
        <form className='chat-input-wrapper' onSubmit={onSubmit}>
            {/* Input nativo oculto para manejo de archivos */}
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleFileChange}
            />

            <div className='rich-input-container'>
                {/* Barra de herramientas para formato rápido */}
                <div className='input-toolbar'>
                    <i className="bi bi-type-bold" title="Negrita" onClick={() => applyFormat('**')}></i>
                    <i className="bi bi-type-italic" title="Cursiva" onClick={() => applyFormat('_')}></i>
                    <i className="bi bi-type-strikethrough" title="Tachado" onClick={() => applyFormat('~~')}></i>
                    <i className="bi bi-link-45deg" title="Enlace" onClick={() => applyFormat('[', '](url)')}></i>
                    <i className="bi bi-code-slash" title="Código" onClick={() => applyFormat('`')}></i>
                </div>

                {/* Área de escritura principal */}
                <div className='input-main'>
                    <textarea
                        ref={textareaRef}
                        rows="1"
                        placeholder="Escribe un mensaje..."
                        value={messageText}
                        onChange={onChange}
                        onKeyDown={handleKeyDown}
                    ></textarea>
                </div>

                {/* Pie del input con acciones y botón de envío */}
                <div className='input-footer'>
                    <div className='input-actions-left'>
                        <i className="bi bi-plus-lg" title="Subir archivo" onClick={() => fileInputRef.current.click()}></i>
                        <i className="bi bi-emoji-smile" title="Insertar emoji" onClick={() => insertText('😊')}></i>
                        <i className="bi bi-at" title="Mencionar" onClick={() => insertText('@')}></i>
                    </div>
                    <div className='input-actions-right'>
                        <span>Presiona <b>Enter</b> para enviar</span>
                        <button type='submit' className='send-btn' disabled={!messageText.trim()}>
                            <i className="bi bi-send-fill"></i>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
