import React from "react";
import FlexjetSubBrand from "./FlexjetSubBrand";
import HomePage from "./HomePage";

export default function Home() {
  return (
    <div style={styles.container}>
      {/* <header style={styles.header}>
        <h1 style={styles.logo}>MiProyecto</h1>
        <nav>
          <a href="#" style={styles.link}>Inicio</a>
          <a href="#" style={styles.link}>Servicios</a>
          <a href="#" style={styles.link}>Contacto</a>
        </nav>
      </header>

      <section style={styles.hero}>
        <h2>Bienvenido a mi página</h2>
        <p>Este es un home simple creado con JSX.</p>
        <button style={styles.button}>Comenzar</button>
      </section>

      <footer style={styles.footer}>
        <p>© {new Date().getFullYear()} MiProyecto - Todos los derechos reservados</p>
      </footer> */}
      <HomePage/>
    </div>
  );
}

const styles = {
  container: {
    fontFamily: "Arial, sans-serif",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "20px 40px",
    backgroundColor: "#111",
    color: "#fff",
  },
  logo: {
    margin: 0,
  },
  link: {
    marginLeft: "20px",
    color: "#fff",
    textDecoration: "none",
  },
  hero: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "40px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#000",
    color: "#fff",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
  },
  footer: {
    padding: "15px",
    textAlign: "center",
    backgroundColor: "#f5f5f5",
  },
};