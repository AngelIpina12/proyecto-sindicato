import React, { useState, useEffect } from 'react';
import { Fab, Zoom, useTheme } from '@mui/material';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  // Controlar la visibilidad del botón basado en la posición del scroll
  useEffect(() => {
    const toggleVisibility = () => {
      // Mostrar el botón cuando el scroll es mayor a 300px
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Volver al inicio de la página
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <Zoom in={isVisible}>
      <Fab
        color="primary"
        size="medium"
        aria-label="scroll back to top"
        onClick={scrollToTop}
        sx={{
          position: 'fixed',
          bottom: 20,
          right: 20,
          zIndex: 1000,
          backgroundColor: theme.palette.primary.main,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark,
          }
        }}
      >
        <KeyboardArrowUpIcon />
      </Fab>
    </Zoom>
  );
};

export default ScrollToTopButton;