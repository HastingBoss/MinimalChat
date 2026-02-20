import React from 'react'
import { useParams } from 'react-router'
import { useContext, useState } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'

export default function ContactScreen() {
    const { contacts, setContacts } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const [messageText, setMessageText] = useState('')

    const contact_selected = contacts.find(contact => contact.id === Number(contact_id))

    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!messageText.trim()) return

        const newMessage = {
            id: Date.now(),
            send_by_me: true,
            message: messageText,
            created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            is_read: false
        }

        const updatedContacts = contacts.map(contact => {
            if (contact.id === Number(contact_id)) {
                return {
                    ...contact,
                    messages: [...contact.messages, newMessage]
                }
            }
            return contact
        })

        setContacts(updatedContacts)
        setMessageText('')
    }

    return (
        <div className='screen'>
            <ContactSidebar />
            {!contact_selected ? (
                <div className='chat-container' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <h2>Selecciona un contacto</h2>
                </div>
            ) : (
                <div className='chat-container'>
                    <div className='chat-header'>
                        <img src={contact_selected.profile_picture} alt={contact_selected.name} />
                        <div className='chat-header-info'>
                            <h2>{contact_selected.name}</h2>
                            <p className='job-title'>{contact_selected.job_title}</p>
                            <div className='status-info'>
                                <span className='connection'>Últ. con.: {contact_selected.last_time_connection}</span>
                                <span className='work-hours'>• Horario: {contact_selected.work_hours}</span>
                            </div>
                        </div>
                    </div>
                    <div className='messages-list'>
                        {contact_selected.messages.map(message => (
                            <div key={message.id} className={`message ${message.send_by_me ? 'sent' : 'received'}`}>
                                <p>{message.message}</p>
                                <div className='message-meta'>
                                    <span>{message.created_at}</span>
                                    <span>{message.is_read ? '✓✓' : '✓'}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    <form className='chat-input-container' onSubmit={handleSendMessage}>
                        <input
                            type='text'
                            className='chat-input'
                            placeholder='Escribe un mensaje...'
                            value={messageText}
                            onChange={(e) => setMessageText(e.target.value)}
                        />
                        <button type='submit' className='send-button'>
                            ➤
                        </button>
                    </form>
                </div>
            )}
        </div>
    )
}
