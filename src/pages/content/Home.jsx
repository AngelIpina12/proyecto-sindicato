import React from "react";
import { Header } from '../layout/Header';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';
import { Box, Container, Typography } from "@mui/material";

const Home = () => {
    return (
        <div className="Home">
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
                    <Typography variant="h1" component="h1">Bienvenidos al Sindicato Unico del Personal Académico de Conalep Nuevo León </Typography>
                    <Typography variant="body1">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid eos nesciunt deserunt tempora adipisci ducimus, aliquam aut, eius cupiditate consequuntur dolorum id. Itaque voluptatem ipsa quidem laborum, cupiditate vero mollitia.</Typography>
                </Container>
            </Box>
            <Footer />
        </div >
    );
}

export default Home;