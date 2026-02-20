// Hooks y componentes necesarios
import React from 'react'
import { useParams } from 'react-router'
import { useContext, useState } from 'react'
import { ContactsContext } from '../../Context/ContactsContext'
import ContactSidebar from '../../Components/ContactSidebar/ContactSidebar'
import CallOverlay from '../../Components/CallOverlay/CallOverlay'
import ChatHeader from '../../Components/Chat/ChatHeader'
import MessageList from '../../Components/Chat/MessageList'
import MessageInput from '../../Components/Chat/MessageInput'

export default function ContactScreen() {
    // Obtener contactos y función para actualizarlos del contexto
    const { contacts, setContacts } = useContext(ContactsContext)
    // Obtener el ID del contacto desde la URL
    const { contact_id } = useParams()
    // Estado local para el texto del nuevo mensaje
    const [messageText, setMessageText] = useState('')
    // Estado para controlar la visibilidad de la llamada
    const [isCalling, setIsCalling] = useState(false)
    // Estado para mostrar mensaje de error de horario
    const [scheduleError, setScheduleError] = useState(null)

    // Buscar el contacto seleccionado basado en el ID
    const contact_selected = contacts.find(contact => contact.id === Number(contact_id))

    // Manejador para iniciar la llamada
    const handleStartCall = () => {
        setScheduleError(null) // Limpiar errores previos

        // Verificar horario laboral
        const workHours = contact_selected.work_hours

        if (workHours === '24hs') {
            setIsCalling(true)
            return
        }

        const now = new Date()
        const currentHour = now.getHours()
        const currentMinutes = now.getMinutes()
        // Convertir hora actual a minutos desde medianoche
        const currentTimeInMinutes = currentHour * 60 + currentMinutes

        // Parsear horario de trabajo "HH:MM - HH:MM"
        const [start, end] = workHours.split(' - ')
        const [startHour, startMinute] = start.split(':').map(Number)
        const [endHour, endMinute] = end.split(':').map(Number)

        // Convertir horarios de inicio y fin a minutos
        const startTimeInMinutes = startHour * 60 + startMinute
        const endTimeInMinutes = endHour * 60 + endMinute

        if (currentTimeInMinutes >= startTimeInMinutes && currentTimeInMinutes <= endTimeInMinutes) {
            setIsCalling(true)
        } else {
            // Mostrar mensaje de error en el viewport en lugar de alert
            setScheduleError(`Por favor realiza la llamada en su horario laboral: ${workHours}`)

            // Ocultar mensaje después de 3 segundos
            setTimeout(() => {
                setScheduleError(null)
            }, 3000)
        }
    }

    // Manejador para finalizar la llamada
    const handleEndCall = () => {
        setIsCalling(false)

        // Registrar mensajes de llamada en el chat
        const callMessage = {
            id: Date.now(),
            send_by_me: true,
            message: '📞 Llamada saliente finalizada',
            created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            is_read: true
        }

        const updatedContacts = contacts.map(contact => {
            if (contact.id === Number(contact_id)) {
                return {
                    ...contact,
                    messages: [...contact.messages, callMessage]
                }
            }
            return contact
        })

        setContacts(updatedContacts)
    }

    // Manejador para el envío de nuevos mensajes
    const handleSendMessage = (e) => {
        e.preventDefault()
        // Evitar enviar mensajes vacíos
        if (!messageText.trim()) return

        // Crear objeto del nuevo mensaje con timestamp actual
        const newMessage = {
            id: Date.now(),
            send_by_me: true,
            message: messageText,
            created_at: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            is_read: false
        }

        // Crear nueva lista de contactos actualizando solo el seleccionado
        const updatedContacts = contacts.map(contact => {
            if (contact.id === Number(contact_id)) {
                return {
                    ...contact,
                    messages: [...contact.messages, newMessage] // Agregar el nuevo mensaje al historial
                }
            }
            return contact
        })

        // Actualizar el estado global y limpiar el input
        setContacts(updatedContacts)
        setMessageText('')
    }

    return (
        <div className='screen'>
            {/* Sidebar visible siempre */}
            <ContactSidebar />
            {/* Renderizado condicional: mensaje de 'no seleccionado' o chat completo */}
            {!contact_selected ? (
                <div className='chat-container' style={{ justifyContent: 'center', alignItems: 'center' }}>

                    <h2>Selecciona un contacto</h2>
                </div>
            ) : (
                <div className='chat-container'>
                    {/* Componente de superposición de llamada */}
                    <CallOverlay
                        contact={contact_selected}
                        isActive={isCalling}
                        onEndCall={handleEndCall}
                    />

                    <ChatHeader
                        contact={contact_selected}
                        onCall={handleStartCall}
                        error={scheduleError}
                    />

                    <MessageList messages={contact_selected.messages} />

                    <MessageInput
                        messageText={messageText}
                        onChange={(e) => setMessageText(e.target.value)}
                        onSubmit={handleSendMessage}
                    />
                </div>
            )}
        </div>
    )
}
