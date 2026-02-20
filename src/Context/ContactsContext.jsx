import React, { createContext, useState } from 'react'
import { getContacts } from '../services/contactServices'

// Creación del contexto para manejar el estado de los contactos
export const ContactsContext = createContext(
    {
        contacts: []
    }
)

export default function ContactsProvider({ children }) {
    // Estado local inicializado con los contactos obtenidos del servicio
    const [contacts, setContacts] = useState(getContacts())

    // Valores que serán accesibles por los consumidores del contexto
    const provider_values = {
        contacts: contacts,
        setContacts: setContacts
    }

    return (
        <ContactsContext.Provider value={provider_values}>
            {children}
        </ContactsContext.Provider>
    )
}