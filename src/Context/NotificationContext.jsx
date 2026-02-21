import React, { createContext, useState, useContext, useCallback } from 'react'
import './NotificationContext.css'

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
        <NotificationContext.Provider value={{ showNotification }}>
            {children}
            <div className="notification-container">
                {notifications.map(n => (
                    <div key={n.id} className={`notification ${n.type}`}>
                        {n.message}
                    </div>
                ))}
            </div>
        </NotificationContext.Provider>
    )
}

export const useNotification = () => useContext(NotificationContext)
