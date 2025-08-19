import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
