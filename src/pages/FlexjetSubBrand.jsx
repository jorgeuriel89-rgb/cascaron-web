import React from 'react';
import './FlexjetSubBrand.css';

const FlexjetSubBrand = () => {
  return (
    <div className="subbrand-container">
      {/* Navegación Replicada */}
      <nav className="navbar">
        <a href="/" className="logo">FLEXJET <span style={{fontWeight: 100}}>| SUB-BRAND</span></a>
        <div className="nav-links">
          <a href="#aeronaves">Aeronave</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#contacto">Consultar</a>
        </div>
      </nav>

      {/* Hero Section - El impacto visual de Flexjet */}
      <header className="hero">
        <p>Nueva Dimensión de Lujo</p>
        <h1>MÁS QUE VOLAR, TRASCENDER</h1>
        <button className="btn-primary">Descubrir Más</button>
      </header>

      {/* Sección de Introducción */}
      <section className="content-section">
        <div className="content-text">
          <h2>Excelencia en cada detalle</h2>
          <p>
            Inspirados en la herencia de Flexjet, nuestra nueva submarca redefine 
            los estándares de la aviación privada, combinando tecnología de vanguardia 
            con una hospitalidad sin precedentes.
          </p>
          <button className="btn-primary">Ver la Flota</button>
        </div>
        <div className="content-image">
          <img 
            src="https://images.unsplash.com/photo-1583416750470-965b2707b355?auto=format&fit=crop&w=800&q=80" 
            alt="Interior de lujo" 
            style={{width: '100%', filter: 'grayscale(20%)'}}
          />
        </div>
      </section>

      {/* Footer Minimalista */}
      {/* <footer style={{padding: '4rem', textAlign: 'center', borderTop: '1px solid #333'}}>
        <p style={{fontSize: '0.7rem', letter-spacing: '2px', color: '#666'}}>
          © {new Date().getFullYear()} FLEXJET SUB-BRAND. TODOS LOS DERECHOS RESERVADOS.
        </p>
      </footer> */}
    </div>
  );
};

export default FlexjetSubBrand;