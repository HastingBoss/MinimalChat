import React, { createContext, useState } from 'react'
import { getContacts } from '../services/contactServices'

export const ContactsContext = createContext(

    {
        contacts: []
    }
)

export default function ContactsProvider({ children }) {
    const [contacts, setContacts] = useState(getContacts())

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