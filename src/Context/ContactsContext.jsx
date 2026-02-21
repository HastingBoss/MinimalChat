import React, { createContext, useState } from 'react'
import { getContacts, getChannels } from '../services/contactServices'

// Creación del contexto para manejar el estado de los contactos
export const ContactsContext = createContext(
    {
        contacts: [],
        channels: []
    }
)

export default function ContactsProvider({ children }) {
    const [contacts, setContacts] = useState(getContacts())
    const [channels, setChannels] = useState(getChannels())

    // Valores que serán accesibles por los consumidores del contexto
    const provider_values = {
        contacts: contacts,
        setContacts: setContacts,
        channels: channels,
        setChannels: setChannels,
        addContact: (newContact) => setContacts(prev => [...prev, { ...newContact, id: Date.now(), type: 'dm', messages: [] }]),
        deleteContact: (id) => setContacts(prev => prev.filter(c => c.id !== id))
    }

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}