import React, { createContext, useState, useContext, useCallback } from 'react'
import Notification from '../Components/Notification/Notification'

const NotificationContext = createContext()

export function NotificationProvider({ children }) {
    const [notifications, setNotifications] = useState([])

    const showNotification = useCallback((message, type = 'info') => {
        const id = Date.now()
        setNotifications(prev => [...prev, { id, message, type }])
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n.id !== id))
        }, 3000)
    }, [])

    return (
        <NotificationContext.Provider value={{ showNotification, notifications }}>
            {children}
            <Notification />
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)
