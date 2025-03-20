import React from 'react'

export const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="nav-item">Inicio</a>
        
        <div className="dropdown">
          <a href="#" className="nav-item">Quiénes Somos</a>
          <div className="dropdown-content">
            <a href="#">Historia</a>
            <a href="#">Misión y Visión</a>
            <a href="#">Directorio</a>
          </div>
        </div>
        
        <div className="dropdown">
          <a href="#" className="nav-item">Estudiantes</a>
          <div className="dropdown-content">
            <a href="#">Servicios Escolares</a>
            <a href="#">Becas</a>
            <a href="#">Calendario</a>
          </div>
        </div>
        
        <div className="dropdown">
          <a href="#" className="nav-item">Transparencia</a>
          <div className="dropdown-content">
            <a href="#">Informes</a>
            <a href="#">Documentos</a>
            <a href="#">Licitaciones</a>
          </div>
        </div>
        
        <div className="dropdown">
          <a href="#" className="nav-item">Servicios</a>
          <div className="dropdown-content">
            <a href="#">Trámites</a>
            <a href="#">Certificaciones</a>
            <a href="#">Bolsa de Trabajo</a>
          </div>
        </div>
        
        <div className="dropdown">
          <a href="#" className="nav-item">Otros</a>
          <div className="dropdown-content">
            <a href="#">Noticias</a>
            <a href="#">Eventos</a>
            <a href="#">Contacto</a>
          </div>
        </div>
      </div>
    </nav>
  )
}
