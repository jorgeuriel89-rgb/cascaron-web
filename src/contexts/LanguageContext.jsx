import React, { createContext, useState, useEffect } from 'react'
import { getInitialLanguage } from '../utils/helpers'
import { LANGUAGES, STORAGE_KEYS } from '../utils/constants'
import { translations } from '../utils/translations'

export const LanguageContext = createContext()

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(getInitialLanguage())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEYS.LANGUAGE, language)
  }, [language])

  const toggleLanguage = () => {
    setLanguage(prev => prev === LANGUAGES.ES ? LANGUAGES.EN : LANGUAGES.ES)
  }

  const t = (key) => {
    return translations[language]?.[key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}