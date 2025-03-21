import React, { useEffect, useState } from "react";
import { Box, Card, CardContent, Container, Divider, Paper, Typography, useTheme } from "@mui/material";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import SUPAC1Image from "../../assets/SUPAC1.jpg";
import SUPAC2Image from "../../assets/SUPAC2.jpg";
import SUPAC3Image from "../../assets/SUPAC3.jpg";
import SUPAC4Image from "../../assets/SUPAC4.jpg";
import SUPAC5Image from "../../assets/SUPAC5.jpg";
import SUPAC6Image from "../../assets/SUPAC6.jpg";
import SUPAC7Image from "../../assets/SUPAC7.jpg";
import SUPAC8Image from "../../assets/SUPAC8.jpg";
import SUPAC9Image from "../../assets/SUPAC9.jpg";
import SUPAC10Image from "../../assets/SUPAC10.jpg";
import { Layout } from "../layout/Layout";
import PageTransition from "../../utilities/PageTransition";

const carouselImages = [
    {
        url: SUPAC1Image,
        title: "Formación académica de calidad"
    },
    {
        url: SUPAC2Image,
        title: "Excelencia educativa"
    },
    {
        url: SUPAC3Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC4Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC5Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC6Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC7Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC8Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC9Image,
        title: "Desarrollo profesional"
    },
    {
        url: SUPAC10Image,
        title: "Desarrollo profesional"
    }
];


const Home = () => {
    const theme = useTheme();
    const [currentSlide, setCurrentSlide] = useState(0);

    // Función para cambiar de slide automáticamente
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    // Funciones para controlar el carrusel
    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === carouselImages.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? carouselImages.length - 1 : prev - 1));
    };
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
                        color: theme.palette.primary.main
                    }}
                >
                    Bienvenidos al Sindicato Único del Personal Académico de Conalep Nuevo León
                </Typography>

                {/* Carrusel de imágenes */}
                <Box
                    sx={{
                        position: 'relative',
                        mb: 6,
                        '&:hover .carousel-controls': {
                            opacity: 1,
                        }
                    }}
                >
                    <Paper
                        elevation={3}
                        sx={{
                            overflow: 'hidden',
                            position: 'relative',
                            height: { xs: '200px', sm: '300px', md: '400px' },
                            borderRadius: 2,
                        }}
                    >
                        {carouselImages.map((image, index) => (
                            <Box
                                key={index}
                                sx={{
                                    position: 'absolute',
                                    width: '100%',
                                    height: '100%',
                                    opacity: index === currentSlide ? 1 : 0,
                                    transition: 'opacity 1s ease-in-out',
                                    backgroundImage: `url(${image.url})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                }}
                            >
                                <Box
                                    sx={{
                                        position: 'absolute',
                                        bottom: 0,
                                        width: '100%',
                                        backgroundColor: 'rgba(0,0,0,0.6)',
                                        padding: 2,
                                        color: 'white',
                                    }}
                                >
                                    <Typography variant="h5">{image.title}</Typography>
                                </Box>
                            </Box>
                        ))}

                        {/* Controles del carrusel */}
                        <Box
                            className="carousel-controls"
                            sx={{
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                padding: 2,
                                opacity: 0,
                                transition: 'opacity 0.3s',
                            }}
                        >
                            <Box
                                onClick={prevSlide}
                                sx={{
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    borderRadius: '50%',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: 'white',
                                }}
                            >
                                <KeyboardArrowLeftIcon />
                            </Box>
                            <Box
                                onClick={nextSlide}
                                sx={{
                                    backgroundColor: 'rgba(0,0,0,0.5)',
                                    borderRadius: '50%',
                                    width: 40,
                                    height: 40,
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer',
                                    color: 'white',
                                }}
                            >
                                <KeyboardArrowRightIcon />
                            </Box>
                        </Box>

                        {/* Indicadores del carrusel */}
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                display: 'flex',
                                justifyContent: 'center',
                                padding: 1,
                                zIndex: 2,
                            }}
                        >
                            {carouselImages.map((_, index) => (
                                <Box
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    sx={{
                                        width: 12,
                                        height: 12,
                                        borderRadius: '50%',
                                        backgroundColor: index === currentSlide ? 'white' : 'rgba(255,255,255,0.5)',
                                        margin: '0 4px',
                                        cursor: 'pointer',
                                        transition: 'background-color 0.3s',
                                    }}
                                />
                            ))}
                        </Box>
                    </Paper>
                </Box>

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
                        bgcolor: theme.palette.primary.light,
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
                                mb: 3,
                            }}
                        >
                            Política de Calidad
                        </Typography>
                        <Typography variant="body1" paragraph align="center">
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
                        <Typography variant="body1" align="center" sx={{ mt: 3, fontWeight: 'bold' }}>
                            "Comprometidos con la excelencia académica y el bienestar laboral"
                        </Typography>
                    </CardContent>
                </Card>
            </PageTransition>
        </Layout>
    );
}

export default Home;