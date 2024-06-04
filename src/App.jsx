import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToasterComponent from './components/Toaster'
import Navbar from './components/Navbar'
import Dashboard from './pages/Dashboard'
import Hero from './pages/Hero'
import 'flowbite'

function App() {

  const [isLogged, setIsLogged] = useState(false)

  useEffect(() => {
    const checkToken = () => {
      const token = localStorage.getItem("token")
      if(token) {
        setIsLogged(true) 
      } else {
        setIsLogged(false) 
      }
    }
    checkToken()
  }, [])

  return (
    <>
      <Router>
        <main className="relative">
          <Navbar isLogged={isLogged} setIsLogged={setIsLogged} />  
          <ToasterComponent />
          <Routes>
            <Route path='/' element={<Hero setIsLogged={setIsLogged} />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </main> 
      </Router>
    </>
  )
}

export default App
