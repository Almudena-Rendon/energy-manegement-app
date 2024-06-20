import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-hot-toast'
import { Lock, Spinner, Unlocked, User } from "../utils/Index"

const Login = ({ setIsLogged }) => {
  const navigate = useNavigate()
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()
  const [loading, setLoading] = useState(false)
  const [locked, setLocked] = useState(true)

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const json = await response.json()
      console.log("hola", json)
      toast.success(`You've logged in successfully!`)
      localStorage.setItem('token', json.token)
      navigate('/dashboard')
      setIsLogged(true)
    } catch (error) {
      console.error('There was a problem with the login request:', error)
      toast.error('Error: Invalid username or password.')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    setUsername("mor_2314")
    setPassword("83r5^_")
  }, [])

  return (
    <>
      <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relative rounded-lg shadow bg-darkGray">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-800">
            <h3 className="text-xl font-semibold text-white">
              Sign in to our platform
            </h3>
          </div>
          <div className="p-4 md:p-5">
            <form className="space-y-4 pb-4" onSubmit={handleLogin}>
            <label htmlFor="password" className="block text-sm font-medium text-white">
                Username
              </label>
              <div className="relative mt-4 md:mt-0 lg:mt-4">
                <div className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center">
                  <User />
                </div>
                <input 
                  type="text" 
                  name="username" 
                  id="username" 
                  value={username} 
                  onChange={(e) => setUsername(e.target.value)} 
                  className="w-full border bg-darkGray border-gray-500 placeholder-gray-400 text-white px-3 py-3 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12" 
                  placeholder="Username" 
                  required 
                />
              </div>
              <label htmlFor="password" className="block text-sm font-medium text-white">
                Your password
              </label>
              <div className="relative mt-4">
                <div 
                  onClick={() => setLocked(!locked)} 
                  className="pl-4 pr-4 h-full absolute bottom-0 left-0 flex items-center cursor-pointer">
                  {locked ? <Lock /> : <Unlocked />}
                </div>
                <input 
                  type={locked ? "password" : "text"} 
                  name="password" 
                  id="password" 
                  value={password} 
                  onChange={(e) => setPassword(e.target.value)} 
                  className="w-full border bg-darkGray border-gray-500 placeholder-gray-400 text-white px-3 py-3 text-sm tracking-wide focus:outline-none focus:shadow-outline rounded pl-12" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <div>
                <button 
                  disabled={loading} 
                  type="submit" 
                  className="transition-all duration-300 mt-5 w-full border border-transparent rounded font-semibold tracking-wide text-sm px-5 py-4 focus:outline-none focus:shadow-outline bg-blue-500 text-gray-100 hover:bg-blue-600 hover:text-gray-200">
                  {loading ? <Spinner /> : null}
                  {loading ? "Loading..." : "Login to your account"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login


