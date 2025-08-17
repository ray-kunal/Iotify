import React from 'react'
import Navbar from '../Components/Navbar'
import Content from '../Components/Content'
import Footer from '../Components/Footer'
function Home() {
  return (
    <div className='flex flex-col  min-h-screen bg-gray-100 gap-1'>
      <Navbar />
      <Content />
      <Footer className='flex-1' />
    </div>
  )
}

export default Home