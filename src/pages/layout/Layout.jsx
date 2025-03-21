import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Box, Container } from '@mui/material';

export const Layout = ({ children }) => {
  return (
    <div className="layout" style={{ width: '100%' }}>
      <Header />
      <Navbar />
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
    </div>
  );
};