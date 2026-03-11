import { STORAGE_KEYS } from './constants'

export const getInitialTheme = () => {
  const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME)
  if (savedTheme) return savedTheme
  
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  return prefersDark ? 'dark' : 'light'
}

export const getInitialLanguage = () => {
  const savedLang = localStorage.getItem(STORAGE_KEYS.LANGUAGE)
  if (savedLang) return savedLang
  
  const browserLang = navigator.language.split('-')[0]
  return browserLang === 'es' ? 'es' : 'en'
}

export const applyTheme = (theme) => {
  document.documentElement.setAttribute('data-theme', theme)
  localStorage.setItem(STORAGE_KEYS.THEME, theme)
}

export const formatDate = (date) => {
  return new Intl.DateTimeFormat('es-ES', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date)
}