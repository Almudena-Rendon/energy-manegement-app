
import { useNavigate } from "react-router-dom"
import { IconLeaf } from "../utils/Index"
import SwitchTheme from "./SwitchTheme"


const Navbar = ({ isLogged, setIsLogged }) => {

  const navigate = useNavigate()

  const Links = [
    { title: "Home", href: "#" },
    { title: "About", href: "#" },
    { title: "Services", href: "#" },
    { title: "Contact", href: "#" }
  ]

  const handleLogOut = () => {
    if(isLogged) {
      localStorage.removeItem("token")
      setIsLogged(false)
      navigate('/')
    }
  }

  return (
    <>
   <header className={`${isLogged ? "bg-gray-50 dark:bg-[#1F2937] border-gray-200 dark:border-gray-600" : "bg-gray-900 border-gray-600"} fixed w-full z-20 top-0 start-0 border-b `}> 
    <nav className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">

    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
      <IconLeaf />
      <span className={`self-center text-2xl font-semibold whitespace-nowrap ${isLogged ? "dark:text-white" : "text-white"}`}>Energy App</span>
    </a>

    <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
        <button onClick={handleLogOut} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mr-2">{isLogged ? "Log out" : "Get started"}</button>
        {isLogged && <SwitchTheme />} 
        {/* <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button> */}
    </div>

    {!isLogged && <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
      <ul className={`flex flex-col p-4 md:p-0 mt-4 font-medium border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0  bg-gray-800 md:bg-gray-900 border-gray-700 ${isLogged ? " border-gray-100  bg-gray-50 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700" : " bg-gray-800 md:bg-gray-900 border-gray-700"}`}>

          {Links.map((link, index) => 
          <li key={index}>
            <a href={link.href} className={`block py-2 px-3  ${isLogged ? "text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700" : "rounded md:p-0 md:hover:text-blue-500 text-white hover:bg-gray-700 hover:text-white md:hover:bg-transparent border-gray-700"}`}>{link.title}</a>
          </li>
          )}
        </ul>
      </div>}

    </nav>
   </header>
  </>
  )
}

export default Navbar
