import React from 'react'
import { Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landingPage/LandingPage'
import LoginPage from './components/user/Login';
import SignUp from './components/user/Signup';

function App() {
  return (
    <Routes>
      <Route path="/sign_in" element={<LoginPage />} />
      <Route path="/sign_up" element={<SignUp />} />
      <Route path="/" element={<LandingPage />} />
    </Routes>
  )
}

export default App