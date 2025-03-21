import React from 'react';
import { motion } from 'framer-motion';

// Variantes de animación para la transición de páginas
const pageVariants = {
  initial: {
    opacity: 0,
    y: 5
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: 5
  }
};

// Configuración de la transición
const pageTransition = {
  type: 'tween',
  ease: 'anticipate',
  duration: 0.3
};

const PageTransition = ({ children }) => {
  return (
    <motion.div
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
      transition={pageTransition}
    >
      {children}
    </motion.div>
  );
};

export default PageTransition;