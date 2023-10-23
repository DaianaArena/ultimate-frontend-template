"use client"
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';


const providers = ({children}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true)
  }, [ ])
  
  if (!mounted) {
    return (
      <>
      {children}
      </>
    )
  }
  return (
    <ThemeProvider attribute="class">
    {children}
    </ThemeProvider>
  )
}

export default providers