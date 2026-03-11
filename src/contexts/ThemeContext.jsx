import React, { createContext, useState, useEffect } from 'react'
import { getInitialTheme, applyTheme } from '../utils/helpers'
import { THEMES } from '../utils/constants'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(getInitialTheme())

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => prev === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT)
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}