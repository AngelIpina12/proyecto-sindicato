import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Contacto</h3>
          <p>Dirección: Av. Ejemplo #123</p>
          <p>Monterrey, Nuevo León</p>
          <p>Teléfono: (81) 1234-5678</p>
          <p>Email: contacto@conalep.edu.mx</p>
        </div>
        <div className="footer-column">
          <h3>Enlaces Rápidos</h3>
          <a href="#">Oferta Educativa</a>
          <a href="#">Inscripciones</a>
          <a href="#">Bolsa de Trabajo</a>
          <a href="#">Noticias</a>
        </div>
        <div className="footer-column">
          <h3>Redes Sociales</h3>
          <a href="#">Facebook</a>
          <a href="#">Twitter</a>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
    </footer>
  )
}
