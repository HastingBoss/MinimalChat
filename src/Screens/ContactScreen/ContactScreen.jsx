// Hooks y componentes necesarios
import React from 'react'
import { useParams } from 'react-router'
import { useContext, useState, useEffect } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import CallOverlay from '../../Components/CallOverlay/CallOverlay'
import ChatHeader from '../../Components/Chat/ChatHeader'
import MessageList from '../../Components/Chat/MessageList'
import MessageInput from '../../Components/Chat/MessageInput'
import RightPanel from '../../Components/Chat/RightPanel'

import { useNotification } from '../../Context/NotificationContext'

export default function ContactScreen() {
    // Acceso al estado global y parámetros de la URL
    const { contacts, setContacts, channels, setChannels } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const { showNotification } = useNotification()

    // Estados locales para el manejo de la UI del chat
    const [messageText, setMessageText] = useState('')
    const [isCalling, setIsCalling] = useState(false)
    const [searchTerm, setSearchTerm] = useState('')

    // Estados para sidebars responsivos
    const [isLeftSidebarOpen, setIsLeftSidebarOpen] = useState(false)
    const [isRightSidebarOpen, setIsRightSidebarOpen] = useState(false)

    // Cerrar sidebars al cambiar de contacto (especialmente en móvil)
    useEffect(() => {
        setIsLeftSidebarOpen(false)
        setIsRightSidebarOpen(false)
    }, [contact_id])

    // Identificar si el chat seleccionado es un contacto directo o un canal
    const contact_selected = contacts.find(contact => String(contact.id) === contact_id) ||
        channels.find(channel => String(channel.id) === contact_id)

    // Scroll automático al final de la lista cuando cambia el contacto o llegan mensajes
    useEffect(() => {
        const list = document.querySelector('.messages-list')
        if (list) list.scrollTop = list.scrollHeight
    }, [contact_id, contacts, channels])

    /**
     * Valida si el contacto está en horario laboral antes de iniciar la llamada
     */
    const handleStartCall = () => {
        const workHours = contact_selected.work_hours

        if (!workHours || workHours === '24hs') {
            setIsCalling(true)
            return
        }

        const now = new Date()
        const currentTimeInMinutes = now.getHours() * 60 + now.getMinutes()

        const [start, end] = workHours.split(' - ')
        const [startHour, startMinute] = start.split(':').map(Number)
        const [endHour, endMinute] = end.split(':').map(Number)

        const startTimeInMinutes = startHour * 60 + startMinute
        const endTimeInMinutes = endHour * 60 + endMinute

        if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
            setIsCalling(true)
        } else {
            showNotification(`Fuera de horario laboral: ${workHours}`, 'error')
        }
    }

    /**
     * Finaliza la llamada y registra la actividad en el historial de mensajes
     */
    const handleEndCall = () => {
        setIsCalling(false)
        const callMessage = {
            id: Date.now(),
            send_by_me: true,
            message: '📞 Llamada saliente finalizada',
            created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            is_read: true
        }

        // Actualizar el estado correspondiente (DM o Canal)
        if (contact_selected.type === 'dm') {
            const updatedContacts = contacts.map(c =>
                String(c.id) === contact_id ? { ...c, messages: [...c.messages, callMessage] } : c
            )
            setContacts(updatedContacts)
        } else {
            const updatedChannels = channels.map(c =>
                String(c.id) === contact_id ? { ...c, messages: [...c.messages, callMessage] } : c
            )
            setChannels(updatedChannels)
        }
    }

    /**
     * Maneja el envío de nuevos mensajes de texto
     */
    const handleSendMessage = (e) => {
        e.preventDefault()
        if (!messageText.trim()) return

        const newMessage = {
            id: Date.now(),
            send_by_me: true,
            sender: { name: 'Marshall Brown', avatar: 'https://randomuser.me/api/portraits/men/32.jpg' },
            message: messageText,
            created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            is_read: false
        }

        if (contact_selected.type === 'dm') {
            const updatedContacts = contacts.map(c =>
                String(c.id) === contact_id ? { ...c, messages: [...c.messages, newMessage] } : c
            )
            setContacts(updatedContacts)
        } else {
            const updatedChannels = channels.map(c =>
                String(c.id) === contact_id ? { ...c, messages: [...c.messages, newMessage] } : c
            )
            setChannels(updatedChannels)
        }
        setMessageText('')
    }

    return (
        <div className={`screen ${isLeftSidebarOpen ? 'left-open' : ''} ${isRightSidebarOpen ? 'right-open' : ''}`}>
            {/* Overlays para cerrar sidebars en móvil */}
            {(isLeftSidebarOpen || isRightSidebarOpen) && (
                <div
                    className="mobile-overlay"
                    onClick={() => {
                        setIsLeftSidebarOpen(false)
                        setIsRightSidebarOpen(false)
                    }}
                ></div>
            )}

            <div className={`sidebar-wrapper ${isLeftSidebarOpen ? 'open' : ''}`}>
                <ContactSidebar />
            </div>

            {!contact_selected ? (
                <div className='chat-container' style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <div style={{ textAlign: 'center', opacity: 0.5 }}>
                        <i className="bi bi-chat-dots" style={{ fontSize: '3rem' }}></i>
                        <h2>Selecciona un canal o contacto</h2>
                    </div>
                </div>
            ) : (
                <>
                    <div className='chat-container'>
                        <CallOverlay
                            contact={contact_selected}
                            isActive={isCalling}
                            onEndCall={handleEndCall}
                        />

                        <ChatHeader
                            contact={contact_selected}
                            onCall={handleStartCall}
                            searchTerm={searchTerm}
                            onSearchChange={setSearchTerm}
                            onToggleLeft={() => setIsLeftSidebarOpen(!isLeftSidebarOpen)}
                            onToggleRight={() => setIsRightSidebarOpen(!isRightSidebarOpen)}
                        />

                        <MessageList
                            messages={contact_selected.messages}
                            contact={contact_selected}
                            searchTerm={searchTerm}
                            onClearSearch={() => setSearchTerm('')}
                        />

                        <MessageInput
                            messageText={messageText}
                            setMessageText={setMessageText}
                            onChange={(e) => setMessageText(e.target.value)}
                            onSubmit={handleSendMessage}
                        />
                    </div>
                    <div className={`right-panel-wrapper ${isRightSidebarOpen ? 'open' : ''}`}>
                        <RightPanel contact={contact_selected} />
                    </div>
                </>
            )}
        </div>
    )
}
