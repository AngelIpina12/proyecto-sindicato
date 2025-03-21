import React from 'react';
import { Header } from './Header';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Box, Container } from '@mui/material';

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 6,
          minHeight: '500px',
          backgroundColor: '#f5f5f5',
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