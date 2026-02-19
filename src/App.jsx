import React from 'react'
import { Route, Routes } from 'react-router'
import HomeScreen from './Screens/HomeScreen/HomeScreen'
import ContactScreen from './Screens/ContactScreen/ContactScreen'
import ErrorNotFoundScreen from './Screens/ErrorNotFoundScreen/ErrorNotFoundScreen'
import ContactsProvider from './Context/ContactsContext'

function App() {

  return (
    <div className='app'>
      <ContactsProvider>
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