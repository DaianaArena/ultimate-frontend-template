"use client"
import { useTheme } from 'next-themes'
import { useState, useEffect } from 'react'


const ThemeSwitcher = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
  
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }
  //className="inline-flex items-center dark:text-white bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
    return (
      <select className="inline-flex items-center text-white bg-pink-500 border-0 py-1 px-3 focus:outline-none  rounded text-base mt-4 md:mt-0" value={theme} onChange={e => setTheme(e.target.value)}>
        <option value="system">System</option>
        <option value="dark">Dark</option>
        <option value="light">Light</option>
      </select>
    )
}

export default ThemeSwitcher