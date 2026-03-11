// src/components/Layout/Footer.jsx
import React from 'react'
import { useLanguage } from '../../hooks/useLanguage'
import './Footer.css'

export const Footer = () => {
  const { t } = useLanguage()
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
  { false &&   <div className="container">
        <div className="footer-content">
          {/* Secciones del footer */}
          <div className="footer-sections">
            {/* Sección: Sobre nosotros */}
            <div className="footer-section">
              <h3>{t('footer.about')}</h3>
              <ul className="footer-links">
                <li><a href="/about">{t('footer.ourStory')}</a></li>
                <li><a href="/team">{t('footer.team')}</a></li>
                <li><a href="/careers">{t('footer.careers')}</a></li>
              </ul>
            </div>

            {/* Sección: Soporte */}
            <div className="footer-section">
              <h3>{t('footer.support')}</h3>
              <ul className="footer-links">
                <li><a href="/faq">{t('footer.faq')}</a></li>
                <li><a href="/contact">{t('footer.contact')}</a></li>
                <li><a href="/help">{t('footer.help')}</a></li>
              </ul>
            </div>

            {/* Sección: Legal */}
            <div className="footer-section">
              <h3>{t('footer.legal')}</h3>
              <ul className="footer-links">
                <li><a href="/privacy">{t('footer.privacy')}</a></li>
                <li><a href="/terms">{t('footer.terms')}</a></li>
                <li><a href="/cookies">{t('footer.cookies')}</a></li>
              </ul>
            </div>

            {/* Sección: Contacto */}
            <div className="footer-section">
              <h3>{t('footer.contact')}</h3>
              <div className="footer-contact-info">
                <div className="footer-contact-item" data-tooltip="Email">
                  <span>📧</span>
                  <span>info@globaljetset.com</span>
                </div>
                <div className="footer-contact-item" data-tooltip="Teléfono">
                  <span>📞</span>
                  <span>+34 123 456 789</span>
                </div>
                <div className="footer-contact-item" data-tooltip="Dirección">
                  <span>📍</span>
                  <span>Madrid, España</span>
                </div>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div className="footer-newsletter">
            <p>{t('footer.newsletterDesc')}</p>
            <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder={t('footer.emailPlaceholder')}
                className="footer-newsletter-input"
              />
              <button type="submit" className="footer-newsletter-button">
                {t('footer.subscribe')}
              </button>
            </form>
          </div>

          {/* Divisor */}
          <div className="footer-divider"></div>

          {/* Parte inferior del footer */}
          <div className="footer-bottom">
            <p className="footer-copyright">
              &copy; {currentYear} GlobalJetset - {t('footer.rights')}
            </p>
            
            <ul className="footer-legal">
              <li><a href="/privacy">{t('footer.privacy')}</a></li>
              <li><a href="/terms">{t('footer.terms')}</a></li>
              <li><a href="/cookies">{t('footer.cookies')}</a></li>
            </ul>

            {/* Redes sociales */}
            <div className="footer-social">
              <a href="#" className="footer-social-link" aria-label="Twitter">𝕏</a>
              <a href="#" className="footer-social-link" aria-label="Facebook">f</a>
              <a href="#" className="footer-social-link" aria-label="Instagram">📷</a>
              <a href="#" className="footer-social-link" aria-label="LinkedIn">in</a>
            </div>
          </div>
        </div>
      </div>}
    </footer>
  )
}