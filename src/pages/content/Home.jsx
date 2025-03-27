import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Container, Divider, Paper, Typography, useTheme } from "@mui/material";
// import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
// import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
// import SUPAC1Image from "../../assets/SUPAC1.jpg";
// import SUPAC2Image from "../../assets/SUPAC2.jpg";
// import SUPAC3Image from "../../assets/SUPAC3.jpg";
// import SUPAC4Image from "../../assets/SUPAC4.jpg";
// import SUPAC5Image from "../../assets/SUPAC5.jpg";
// import SUPAC6Image from "../../assets/SUPAC6.jpg";
// import SUPAC7Image from "../../assets/SUPAC7.jpg";
// import SUPAC8Image from "../../assets/SUPAC8.jpg";
// import SUPAC9Image from "../../assets/SUPAC9.jpg";
// import SUPAC10Image from "../../assets/SUPAC10.jpg";
import { Layout } from "../layout/Layout";
import PageTransition from "../../utilities/PageTransition";
import NewsCarousel from "../../components/NewsCarousel";

const Home = () => {
    const theme = useTheme();

    return (
        <Layout>
            <PageTransition>
                {/* Título principal */}
                <Typography
                    variant="h1"
                    component="h1"
                    align="center"
                    sx={{
                        mb: 4,
                        color: theme.palette.text.main
                    }}
                >
                    Bienvenidos al sitio web de SUPAC Nuevo León
                </Typography>

                {/* Carrusel de noticias */}
                <NewsCarousel />    

                {/* Información introductoria */}
                <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                    El Sindicato Único del Personal Académico de Conalep Nuevo León (SUPAC) tiene como objetivo principal velar por los derechos laborales y profesionales de todos los docentes que forman parte de nuestra institución educativa. Nuestra labor se centra en fomentar un ambiente laboral propicio para el desarrollo académico y profesional de nuestros agremiados.
                </Typography>

                <Typography variant="body1" paragraph sx={{ mb: 5 }}>
                    A través de nuestra gestión, buscamos mejorar las condiciones de trabajo, impulsar la capacitación continua y promover el reconocimiento a la labor docente. Trabajamos en estrecha colaboración con las autoridades educativas para asegurar que cada integrante de nuestro sindicato reciba el apoyo necesario para desempeñar su importante labor en la formación de profesionales técnicos.
                </Typography>

                <Divider sx={{ my: 6 }} />

                {/* Política de Calidad */}
                <Card
                    elevation={4}
                    sx={{
                        mb: 5,
                        bgcolor: theme.palette.primary.dark,
                        color: 'white',
                        borderRadius: 2,
                    }}
                >
                    <CardContent sx={{ p: 4 }}>
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            align="center"
                            sx={{
                                fontWeight: 'bold',
                                mb: 8,
                                fontSize: 24
                            }}
                        >
                            Política de Calidad
                        </Typography>
                        <Typography variant="body1" paragraph>
                            En el Sindicato Único del Personal Académico de Conalep Nuevo León nos comprometemos a:
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • Trabajar con ética, transparencia y responsabilidad en la representación de los intereses laborales de nuestros agremiados.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • Asegurar la mejora continua de nuestros procesos y servicios mediante un sistema de gestión de calidad eficaz.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • Promover una cultura de excelencia educativa que contribuya al desarrollo integral de los estudiantes de Conalep.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • Fomentar el desarrollo profesional y personal de nuestros agremiados a través de capacitación constante.
                        </Typography>
                        <Typography variant="body1" paragraph>
                            • Mantener un diálogo constructivo y permanente con las autoridades educativas en beneficio de la comunidad académica.
                        </Typography>
                        <Typography variant="body1" align="center" sx={{ mt: 8, fontWeight: 'bold', fontSize: 24 }}>
                            "Comprometidos con la excelencia académica y el bienestar laboral"
                        </Typography>
                    </CardContent>
                </Card>
            </PageTransition>
        </Layout>
    );
}

export default Home;