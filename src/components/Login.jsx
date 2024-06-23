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
            <form className="space-y-4 pb-6" onSubmit={handleLogin}>
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
                  className="w-full rounded-lg border bg-darkGray border-gray-700 placeholder-gray-400 text-white px-3 py-3 text-sm tracking-wide pl-12" 
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
                  className="w-full rounded-lg border bg-darkGray border-gray-700 placeholder-gray-400 text-white px-3 py-3 text-sm tracking-wide focus:outline-none focus:shadow-outline pl-12" 
                  placeholder="••••••••" 
                  required 
                />
              </div>
              <div>
                <button 
                  disabled={loading} 
                  type="submit" 
                  className="transition-all duration-300 w-full border focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-4 py-3 me-2 mt-4 bg-darkGray text-white  hover:bg-gray-700 hover:border-gray-700 focus:ring-gray-700 border-gray-700">
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


