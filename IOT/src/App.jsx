import { useState } from 'react'
import Home from './Pages/Home'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Contact from './Pages/Contact';
import Careers from './Pages/Careers';
import Components from './Pages/Components';
function App() {

  return (
    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/careers" element={<Careers />} />
      <Route path='/buy-components' element={<Components />} />
     </Routes>
    </BrowserRouter>
  )
}

export default App
