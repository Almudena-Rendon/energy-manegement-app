import { useEffect, useState } from 'react'
import { MoonIcon, SunIcon } from '../utils/Index'

const SwitchTheme = () => {
  const [theme, setTheme] = useState(localStorage.theme || 'dark')

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    localStorage.theme = newTheme

    if (newTheme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  useEffect(() => {
    if (localStorage.theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  return (
    <div onClick={toggleTheme}>
      <button
        className='group flex h-full w-10 items-center justify-center rounded-xl bg-yellow-300 duration-150 active:scale-90 dark:bg-zinc-700 dark:text-zinc-200'
      >
        {theme === 'light' ? (
          <SunIcon className='h-6 w-6 group-hover:animate-spin' />
        ) : (
          <MoonIcon className='h-6 w-6 group-hover:animate-pulse' />
        )}
      </button>
    </div>
  )
}

export default SwitchTheme
