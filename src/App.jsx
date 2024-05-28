
import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ToasterComponent from './components/Toaster'

function App() {

  const [token, setToken] = useState(localStorage.getItem("userToken") ?? null)

  return (
    <>
      <main className="relative">
        <Navbar />  
        <Hero token={token} setToken={setToken} />
        <ToasterComponent />
      </main>   
    </>
  )
}

export default App
