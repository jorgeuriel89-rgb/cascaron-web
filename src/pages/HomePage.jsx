import React, { useState } from "react";
import { Menu, X, Instagram, Mail, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";
import "./HomePage.css";

import HomeVideo from "../assets/Home/home_background.mp4";
import image1 from "../assets/Home/image1.png";
import image2 from "../assets/Home/image2.png";
import image3 from "../assets/Home/image3.png";
import image4 from "../assets/Home/logo_global.png";
import image5 from "../assets/Home/image5.png"; // ← corregido
import image6 from "../assets/Home/image6.png";

const HomePage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const menuOptions = [
    { name: "Aeronave", path: "/aeronave" },
    { name: "Renta de aeronaves", path: "/renta" },
    { name: "Quiénes somos", path: "/nosotros" },
    { name: "Experiencias", path: "/experiencias" },
    { name: "Aviart", path: "/aviart" },
  ];

  const contentOptions = [
    { id: 1, path: image1, caption: "RENTA DE AERONAVES" },
    { id: 2, path: image2, caption: "CONCIERGE VIP" },
    { id: 3, path: image3, caption: "EXPERIENCIA AVIART" },
  ];

  const contentOptionsBottom = [
    { id: 4, path: image5, caption: "" },
    { id: 5, path: image6, caption: "" },
  ];

  return (
    <div className="home-container">
      
      {/* VIDEO DE FONDO */}
      <video
        autoPlay
        muted
        loop
        playsInline
        webkitPlaysInline
        preload="auto"
        className="video-background"
      >
        <source src={HomeVideo} type="video/mp4" />
      </video>

      {/* HEADER */}
      <header className="main-header">
        <img src={image4} alt="Logo Aviación" className="header-img" />
      </header>

      {/* BOTÓN HAMBURGUESA */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`hamburger-btn ${isOpen ? "menu-open" : ""}`}
      >
        {isOpen ? <X size={30} /> : <Menu size={30} />}
      </button>

      {/* SIDEBAR */}
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <nav className="nav-links">
          {menuOptions.map((opt) => (
            <button
              key={opt.name}
              className="nav-item"
              onClick={() => {
                navigate(opt.path);
                setIsOpen(false);
              }}
            >
              {opt.name}
            </button>
          ))}
        </nav>

        <div className="contact-icons">
          <Instagram size={22} style={{ cursor: "pointer" }} />
          <Mail size={22} style={{ cursor: "pointer" }} />
          <Phone size={22} style={{ cursor: "pointer" }} />
        </div>
      </div>

      {/* OVERLAY + CONTENIDO */}
      <div className="overlay">
        <main className="content-section">
          {contentOptions.map((item) => (
            <div key={item.id} className="card">
              <div className="image-placeholder bottom">
                <img src={item.path} alt="card" className="promoimg"/>
              </div>
              <button className="generic-btn">
                {item.caption}
              </button>
            </div>
          ))}
        </main>

        <section className="full-width-section">
          <p className="section-text">Lifestyle Global Jet Set</p>
        </section>
{/* 
        <section className="full-width-section">
          <p className="quote">
            -NATANAEL CANO, VINICIUS JR, DANNA, TINI STOESSEL, STEVE AOKI, BELINDA-
          </p>
        </section> */}

        <section className="content-section2">
          {contentOptionsBottom.map((item) => (
            <div key={item.id} className="card">
              <div className="image-placeholder bottom">
                <img src={item.path} alt="card" />
              </div>
            </div>
          ))}
           
        </section>
<footer
  style={{
    backgroundColor: "black",
    padding: "20px 0 20px 0" // 🔥 más espacio abajo
  }}
>
  <p
    style={{
      fontSize: "0.7rem",
      letterSpacing: "2px",
      color: "#ffffff",
      margin: 0,
      textAlign: "center"
    }}
  >
    © {new Date().getFullYear()} Global Jet Set - Todos los derechos reservados
  </p>
</footer>
      </div>

      {/* FOOTER */}

    </div>
  );
};

export default HomePage;