// src/components/Layout/Header.jsx
import React, { useState, useEffect } from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import { useTheme } from '../../hooks/useTheme'
import './Header.css'

export const Header = () => {
  const { t, language, toggleLanguage } = useLanguage()
  const { theme, toggleTheme } = useTheme()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isHeaderHidden, setIsHeaderHidden] = useState(false)
  const [lastScrollY, setLastScrollY] = useState(0)

  // Detectar scroll para cambiar estilo del header
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      
      // Cambiar estilo cuando se hace scroll
      setIsScrolled(currentScrollY > 50)
      
      // Ocultar/mostrar header según dirección del scroll
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsHeaderHidden(true)
      } else {
        setIsHeaderHidden(false)
      }
      
      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  // Cerrar menú móvil al cambiar de tamaño de pantalla
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsMobileMenuOpen(false)
      }
    }

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Prevenir scroll cuando el menú móvil está abierto
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }

    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  const headerClasses = `header ${isScrolled ? 'scrolled' : ''} ${
    isHeaderHidden ? 'header-hidden' : 'header-visible'
  }`

  return (
    <header className={headerClasses}>
      <div className="container">
{ false &&       <div className="header-content">
          {/* Logo */}
          <a href="/" className="logo">
            <span>🌍</span>
            <span>{t('app.title')}</span>
          </a>

          {/* Navegación Desktop */}
          <nav className="nav">
            <ul className="nav-list">
              <li><a href="/" className="nav-link active">{t('nav.home')}</a></li>
              <li><a href="/about" className="nav-link">{t('nav.about')}</a></li>
              <li><a href="/services" className="nav-link">Servicios</a></li>
              <li><a href="/blog" className="nav-link">Blog</a></li>
              <li><a href="/contact" className="nav-link">{t('nav.contact')}</a></li>
            </ul>
          </nav>

          {/* Acciones */}
          <div className="header-actions">
            {/* Barra de búsqueda */}
            <div className="search-bar">
              <input 
                type="text" 
                className="search-input" 
                placeholder="Buscar..."
              />
              <button className="search-btn">🔍</button>
            </div>

            {/* Botón de idioma */}
            <button 
              className="language-btn"
              onClick={toggleLanguage}
              data-lang={language === 'es' ? 'EN' : 'ES'}
            >
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>

            {/* Botón de tema */}
            <button 
              className="theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Menú de usuario (ejemplo) */}
            <div className="user-menu">
              <img 
                src="https://via.placeholder.com/40" 
                alt="User" 
                className="user-avatar"
              />
              <div className="user-dropdown">
                <a href="/profile" className="user-dropdown-item">
                  <span>👤</span> Perfil
                </a>
                <a href="/settings" className="user-dropdown-item">
                  <span>⚙️</span> Configuración
                </a>
                <a href="/logout" className="user-dropdown-item">
                  <span>🚪</span> Cerrar sesión
                </a>
              </div>
            </div>

            {/* Botón menú móvil */}
            <button 
              className="mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>}
      </div>

      {/* Menú móvil */}
      <div className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}>
        <ul className="mobile-nav-list">
          <li className="mobile-nav-item">
            <a href="/" className="mobile-nav-link active" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.home')}
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/about" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.about')}
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/services" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Servicios
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/blog" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              Blog
            </a>
          </li>
          <li className="mobile-nav-item">
            <a href="/contact" className="mobile-nav-link" onClick={() => setIsMobileMenuOpen(false)}>
              {t('nav.contact')}
            </a>
          </li>
        </ul>
        
        {/* Barra de búsqueda móvil */}
        <div className="search-bar" style={{ marginTop: 'var(--spacing-lg)' }}>
          <input 
            type="text" 
            className="search-input" 
            placeholder="Buscar..."
            style={{ width: '100%' }}
          />
          <button className="search-btn">🔍</button>
        </div>
      </div>
    </header>
  )
}