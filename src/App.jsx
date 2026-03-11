import React from 'react'
import { Layout } from './components/Layout/Layout'
import { useLanguage } from './hooks/useLanguage'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  const { t } = useLanguage()

  return (
    <Layout>
      {/* <section className="home">
        <h2 className="home-title">{t('home.welcome')}</h2>
        <p className="home-description">{t('home.description')}</p>
        
        <div className="features">
          <div className="feature-card">
            <h3>🌍 Multi-idioma</h3>
            <p>Soporte para español e inglés con cambio dinámico</p>
          </div>
          
          <div className="feature-card">
            <h3>🌓 Modo oscuro</h3>
            <p>Cambia entre tema claro y oscuro con persistencia</p>
          </div>
          
          <div className="feature-card">
            <h3>⚡ Vite + JSX</h3>
            <p>Desarrollo rápido con Vite y componentes JSX</p>
          </div>
        </div>
      </section> */}
      <AppRoutes/>

    </Layout>
  )
}

export default App