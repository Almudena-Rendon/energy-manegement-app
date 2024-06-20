import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ToasterComponent from './common/Toaster'
import Navbar from './common/Navbar'
import Dashboard from './pages/Dashboard'
import Hero from './pages/Landing'
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
        <main>
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
