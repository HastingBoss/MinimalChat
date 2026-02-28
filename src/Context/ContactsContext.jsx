import React, { createContext, useState } from 'react'
import { getContacts, getChannels } from '../services/contactServices'

/**
 * Contexto que almacena el estado global de los contactos y canales
 */
export const ContactsContext = createContext(
    {
        contacts: [],
        channels: []
    }
)

/**
 * Proveedor de contactos que gestiona la persistencia temporal en el estado
 */
export default function ContactsProvider({ children }) {
    // Inicialización del estado con datos simulados (mock data)
    const [contacts, setContacts] = useState(getContacts())
    const [channels, setChannels] = useState(getChannels())

    // Valores y funciones para manipular el estado global
    const provider_values = {
        contacts: contacts,
        setContacts: setContacts,
        channels: channels,
        setChannels: setChannels,
        /**
         * Añade un nuevo contacto a la lista
         * @param {Object} newContact Datos del nuevo contacto
         */
        addContact: (newContact) => setContacts(prev => [...prev, { ...newContact, type: 'dm', messages: [] }]),
        /**
         * Elimina un contacto por ID
         * @param {number|string} id Identificador del contacto
         */
        deleteContact: (id) => setContacts(prev => prev.filter(c => c.id !== id))
    }

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}
