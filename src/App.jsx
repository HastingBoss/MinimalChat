// Importaciones de React y React Router
import React from 'react'
import { Route, Routes } from 'react-router-dom'
// Importación de pantallas (Screens)
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsProvider from './Context/ContactsContext'
import { NotificationProvider } from './Context/NotificationContext'
import ProfileWrapper from './Components/MicroApps/Profile/ProfileWrapper'
import AiBotWrapper from './Components/MicroApps/AiBot/AiBotWrapper'
import GroupSettingsWrapper from './Components/MicroApps/GroupSettings/GroupSettingsWrapper'
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
              }>
              {/* Rutas alternativas para funcionalidades adicionales (Micro-apps) */}
              <Route path='profile' element={<ProfileWrapper />} />
              <Route path='ai-bot' element={<AiBotWrapper />} />
              <Route path='group-settings' element={<GroupSettingsWrapper />} />
            </Route>
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