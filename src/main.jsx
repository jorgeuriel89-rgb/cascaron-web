import React from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from './contexts/ThemeContext'
import { LanguageProvider } from './contexts/LanguageContext'
import AppRoutes from './routes/AppRoutes'
import { BrowserRouter } from 'react-router-dom';

import App from './App'
import './styles/global.css'

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <React.StrictMode>
    <LanguageProvider>
      <ThemeProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
      </ThemeProvider>
    </LanguageProvider>
  </React.StrictMode>
)