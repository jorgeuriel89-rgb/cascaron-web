import React, { useState } from 'react';
import './AGIndustries.css';

const AGIndustries = () => {
  const [animar, setAnimar] = useState(false);
  
  // Estado para controlar qué menú está desplegado (null = ninguno)
  const [menuActivo, setMenuActivo] = useState(null);

  const ejecutarAnimacionYLink = () => {
    setAnimar(true);
    setTimeout(() => {
     window.open('/edit', '_blank');
      setAnimar(false);
    }, 800);
  };

  return (
    <div className={`sx-wrapper ${animar ? 'efecto-salida' : ''}`}>
      <nav className="sx-nav">
        <div className="sx-nav-content">
          <div className="sx-logo">
             <img 
               src="/image-removebg-preview (2).png" 
               alt="SpaceX Logo" 
               className="sx-logo-img"
              />
          </div>
          
          <div className="sx-menu">
            {/* APARTADO: VEHÍCULOS */}
            <div 
              className="sx-nav-item-container" 
              onMouseEnter={() => setMenuActivo('vehiculos')} 
              onMouseLeave={() => setMenuActivo(null)}
            >
              <a href="#" className="sx-nav-link">
                VEHÍCULOS <span className={`sx-arrow ${menuActivo === 'vehiculos' ? 'open' : ''}`}>▼</span>
              </a>
              <div className={`sx-dropdown-bar ${menuActivo === 'vehiculos' ? 'show' : ''}`}>
                <a href="#">NAVE ESPACIAL</a>
                <a href="#">DRAGÓN</a>
                <a href="#">HALCÓN 9</a>
                <a href="#">HALCÓN PESADO</a>
              </div>
            </div>

            <a href="#">STARLINK</a>

            {/* APARTADO: VUELOS ESPACIALES TRIPULADOS */}
            <div 
              className="sx-nav-item-container" 
              onMouseEnter={() => setMenuActivo('vuelos')} 
              onMouseLeave={() => setMenuActivo(null)}
            >
              <a href="#" className="sx-nav-link">
                VUELOS ESPACIALES TRIPULADOS <span className={`sx-arrow ${menuActivo === 'vuelos' ? 'open' : ''}`}>▼</span>
              </a>
              <div className={`sx-dropdown-bar ${menuActivo === 'vuelos' ? 'show' : ''}`}>
                <a href="#">DESCRIPCIÓN GENERAL</a>
                <a href="#">ESTACIÓN ESPACIAL</a>
                <a href="#">ÓRBITA TERRESTRE</a>
                <a href="#">LA LUNA</a>
                <a href="#">MARTE Y MÁS ALLÁ</a>
              </div>
            </div>

            <a href="#">ESCUDO ESTELAR</a>
            <a href="#">xAI</a>

            {/* APARTADO: COMPAÑÍA */}
            <div 
              className="sx-nav-item-container" 
              onMouseEnter={() => setMenuActivo('compania')} 
              onMouseLeave={() => setMenuActivo(null)}
            >
              <a href="#" className="sx-nav-link">
                COMPAÑÍA <span className={`sx-arrow ${menuActivo === 'compania' ? 'open' : ''}`}>▼</span>
              </a>
              <div className={`sx-dropdown-bar ${menuActivo === 'compania' ? 'show' : ''}`}>
                <a href="#">MISIÓN</a>
                <a href="#">EQUIPO</a>
                <a href="#">CARRERAS</a>
              </div>
            </div>

            <a href="#">COMERCIO</a>
          </div>

          <div className="sx-nav-right">
            <div className="sx-selector">PRÓXIMOS LANZAMIENTOS</div>
          </div>
        </div>
      </nav>

      {/* SECCIÓN 1: MARTE */}
      <section className="sx-hero">
        <div className="sx-bg-container">
          <img src="/4k-8k-mars-planet-wallpaper-preview.jpg" alt="Marte" className="sx-bg-media" />
          <div className="sx-overlay"></div>
        </div>
        <div className="sx-hero-content">
          <h1>HACER LA VIDA MULTIPLANETARIA</h1>
          <p>SpaceX se fundó bajo la convicción de que un futuro en el que la humanidad explore las estrellas es fundamentalmente más emocionante que uno en el que no lo haga.</p>
          <button className="sx-btn-ghost" onClick={ejecutarAnimacionYLink}>
            EXPLORAR <span>→</span>
          </button>
        </div>
      </section>

      {/* SECCIÓN 2: FALCON 9 */}
      <section className="sx-hero">
        <div className="sx-bg-container">
          <img src="/imagen2.jpg" alt="Falcon 9" className="sx-bg-media" />
          <div className="sx-overlay"></div>
        </div>
        <div className="sx-hero-content">
          <h1>REVOLUCIONANDO LA TECNOLOGÍA ESPACIAL</h1>
          <p>La nave espacial Starship y el cohete Super Heavy de SpaceX constituyen un sistema de transporte totalmente reutilizable diseñado para transportar tanto tripulación como carga.</p>
          <button className="sx-btn-ghost">VER MÁS</button>
        </div>
      </section>

      {/* SECCIÓN 3: VIDEO */}
      <section className="sx-hero">
        <div className="sx-bg-container">
          <video className="sx-bg-media" autoPlay muted loop playsInline preload="auto">
            <source src="/video3.mp4" type="video/mp4" />
          </video>
          <div className="sx-overlay"></div>
        </div>
        <div className="sx-hero-content">
          <h1>PROVEEDOR LÍDER MUNDIAL DE SERVICIOS DE LANZAMIENTO</h1>
          <p>SpaceX lidera el mundo en lanzamientos con sus cohetes fiables y reutilizables, transformando la capacidad de la humanidad de acceder al espacio.</p>
          <button className="sx-btn-ghost">DETALLES</button>
        </div>
      </section>

      {/* SECCIÓN 4: ASTRONAUTA */}
      <section className="sx-hero">
        <div className="sx-bg-container">
          <img src="/imagen3.jpg" alt="Astronauta" className="sx-bg-media" />
          <div className="sx-overlay"></div>
        </div>
        <div className="sx-hero-content">
          <h1>IMPULSANDO LOS VUELOS ESPACIALES TRIPULADOS</h1>
          <p>SpaceX está ayudando a construir una nueva era en la que miles y, en última instancia, millones de personas podrán explorar el espacio.</p>
          <button className="sx-btn-ghost">APRENDER MÁS</button>
        </div>
      </section>

      <footer className="sx-footer">
        <div className="sx-footer-content">
          <span className="sx-copyright">© 2026 SPACEX</span>
          <nav className="sx-footer-links">
            <a href="#">CARRERAS PROFESIONALES</a>
            <a href="#">ACTUALIZACIONES</a>
            <a href="#">POLÍTICA DE PRIVACIDAD</a>
            <a href="#">PROVEEDORES</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default AGIndustries;