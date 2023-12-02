"use client"
import { ThemeProvider } from 'next-themes';
import { useEffect, useState } from 'react';
import { ReactNode } from 'react';
interface LocaleLayoutProps {
  children: ReactNode;
  };

const providers = ({ children }: LocaleLayoutProps) => {
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