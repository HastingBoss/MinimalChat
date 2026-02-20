// Importaciones de React y React Router
import React from 'react'
import { Route, Routes } from 'react-router'
// Importación de pantallas (Screens)
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
// Proveedor de contexto para los contactos
import ContactsProvider from './Context/ContactsContext'

function App() {

  return (
    <div className='app'>
      {/* Proveedor de estado global para los contactos */}
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
    </div>
  )
}

export default App