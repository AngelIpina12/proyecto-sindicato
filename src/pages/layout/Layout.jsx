import React, { useEffect, useState } from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Box, Container, Toolbar } from '@mui/material';
import ScrollToTopButton from '../../components/ScrollToTopButton';

export const Layout = ({ children }) => {
  const [isNavbarSticky, setIsNavbarSticky] = useState(false);

  // Detectar scroll
  useEffect(() => {
    const header = document.querySelector('.header-main');
    const handleScroll = () => {
      if (header) {
        const headerBottom = header.getBoundingClientRect().bottom;
        setIsNavbarSticky(headerBottom <= 0);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="layout" style={{ width: '100%' }}>
      <Header />
      <Navbar />
      {isNavbarSticky && <Toolbar />}
      <Box
        component="main"
        sx={{
          width: '100%',
          py: 6,
          minHeight: '500px',
          backgroundColor: '#f5f5f5',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Container maxWidth="lg">
          {children}
        </Container>
      </Box>
      <Footer />
      <ScrollToTopButton />
    </div>
  );
};