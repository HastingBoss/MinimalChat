import React, { useContext } from 'react'
import { useParams, useNavigate } from 'react-router'
import { ContactsContext } from '../../../Context/ContactsContext'
import AiSummarizer from './AiSummarizer'

export default function AiBotWrapper() {
    const { contacts, channels } = useContext(ContactsContext)
    const { contact_id } = useParams()
    const navigate = useNavigate()

    const contact = contacts.find(c => String(c.id) === contact_id) || channels.find(c => String(c.id) === contact_id)
    if (!contact) return null

    return (
        <AiSummarizer
            messages={contact.messages || []}
            contactName={contact.name || "Chat"}
            onClose={() => navigate(`/contact/${contact_id}`)}
        />
    )
}
