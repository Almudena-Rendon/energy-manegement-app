import { useState } from "react";
import { toast } from 'react-hot-toast';

const Login = () => {

  const [username, setUsername] = useState("mor_2314")
  const [password, setPassword] = useState("83r5^_")
  const [loading, setLoading] = useState(false)

  const handleLogin = async () => {
    setLoading(true)
    try {
      const response = await fetch('https://fakestoreapi.com/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          username: username,
          password: password
        })
      })
  
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json)
      toast.success(`You've logged in successfully!`)

      localStorage.setItem('token', json.token);
    } catch (error) {
      console.error('There was a problem with the login request:', error)
      toast.error('Error: Invalid username or password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="relative p-4 w-full max-w-lg max-h-full">
        <div className="relativ rounded-lg shadow bg-gray-700">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t border-gray-600">
                <h3 className="text-xl font-semibold text-white">
                    Sign in to our platform
                </h3>
            </div>
            <div className="p-4 md:p-5">
                <form className="space-y-4 pb-4" action="#">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-white">Your email</label>
                        <input value={username} onChange={(e) => setUsername(e.target.value)} className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" placeholder="name@email.com" required />
                    </div>
                    <div>
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-white">Your password</label>
                        <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" className="border text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 bg-gray-600 border-gray-500 placeholder-gray-400 text-white" required />
                    </div>
                    <div className="pt-3">
                      <button type="submit" onClick={handleLogin} className="w-full text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-blue-600 hover:bg-blue-700 focus:ring-blue-800">
                        {loading ? "Loading..." :  "Login to your account"}
                      </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    
  )
}

export default Login
