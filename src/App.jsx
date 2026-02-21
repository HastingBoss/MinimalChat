// Importaciones de React y React Router
import React from 'react'
import { Route, Routes } from 'react-router'
// Importación de pantallas (Screens)
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
// Proveedor de contexto para los contactos
import ContactsProvider from './Context/ContactsContext'
import { NotificationProvider } from './Context/NotificationContext'

function App() {
  return (
    <div className='app'>
      <NotificationProvider>
        <ContactsProvider>
          {/* Definición de las rutas de la aplicación */}
          <Routes>
            <Route
              path='/'
              element={
                <HomeScreen />
              } />
            <Route
              path='/contact/:contact_id'
              element={
                <ContactScreen />
              } />
            <Route
              path='*'
              element={
                <ErrorNotFoundScreen />
              } />
          </Routes>
        </ContactsProvider>
      </NotificationProvider>
    </div>
  )
}

export default App