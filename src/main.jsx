import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
// Quitamos los imports que causan error (ThemeProvider, LanguageProvider y AppRoutes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)