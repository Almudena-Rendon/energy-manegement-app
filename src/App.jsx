
import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ToasterComponent from './components/Toaster'

function App() {

  return (
    <>
      <main className="relative">
        <Navbar />  
        <Hero />
        <ToasterComponent />
      </main>   
    </>
  )
}

export default App
