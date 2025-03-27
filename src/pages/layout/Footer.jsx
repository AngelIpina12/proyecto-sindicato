import { Box, Container, Grid, Grid2, Link, styled, Typography } from '@mui/material'
import React from 'react'

const FooterWrapper = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(6, 0),
    color: 'white',
}));

const FooterLink = styled(Link)(({ theme }) => ({
    color: '#D9FED7',
    display: 'block',
    marginBottom: theme.spacing(1),
    textDecoration: 'none',
    '&:hover': {
        color: '#CCC',
    },
}));

const FooterSection = styled(Box)(({ theme }) => ({
    marginBottom: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
        marginBottom: 0,
    },
}));

export const Footer = () => {
    return (
        <FooterWrapper component="footer">
            <Container maxWidth='lg'>
                <Grid container spacing={4} justifyContent='space-between'>
                    <Grid item xs={12} sm={6} md={4}>
                        <FooterSection>
                            <Typography variant='h3' component='h3' gutterBottom>
                                Contacto
                            </Typography>
                            <Typography variant="body2" color="#D9FED7" display='block'>
                                Dirección: Av. Ejemplo #123
                            </Typography>
                            <Typography variant="body2" color="#D9FED7" display='block'>
                                Monterrey, Nuevo León
                            </Typography>
                            <Typography variant="body2" color="#D9FED7" display='block'>
                                Teléfono: (81) 1234-5678
                            </Typography>
                            <Typography variant="body2" color="#D9FED7" display='block'>
                                Email: contacto@conalep.edu.mx
                            </Typography>
                        </FooterSection>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FooterSection></FooterSection>
                        <Typography variant="h3" component="h3" gutterBottom>
                            Enlaces Rápidos
                        </Typography>
                        <FooterLink href="#">Oferta Educativa</FooterLink>
                        <FooterLink href="#">Inscripciones</FooterLink>
                        <FooterLink href="#">Bolsa de Trabajo</FooterLink>
                        <FooterLink href="#">Noticias</FooterLink>
                    </Grid>
                    <Grid item xs={12} sm={6} md={4}>
                        <FooterSection>
                            <Typography variant="h3" component="h3" gutterBottom>
                                Redes Sociales
                            </Typography>
                            <FooterLink href="#">Facebook</FooterLink>
                            <FooterLink href="#">Twitter</FooterLink>
                            <FooterLink href="#">Instagram</FooterLink>
                            <FooterLink href="#">YouTube</FooterLink>
                        </FooterSection>
                    </Grid>
                </Grid>
            </Container>
        </FooterWrapper >
    )
}
