import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Box,
    Typography,
    Paper,
    IconButton,
    useTheme
} from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { BlogContext } from '../context/BlogContext';

const NewsCarousel = () => {
    const theme = useTheme();
    const navigate = useNavigate();
    const { posts } = useContext(BlogContext);
    const [currentSlide, setCurrentSlide] = useState(0);
    const visiblePosts = posts.slice(0, Math.min(posts.length, 10));

    // Cambiar de slide automáticamente
    useEffect(() => {
        if (visiblePosts.length <= 1) return;
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev === visiblePosts.length - 1 ? 0 : prev + 1));
        }, 5000);
        return () => clearInterval(interval);
    }, [visiblePosts.length]);

    // Funciones para controlar el carrusel
    const nextSlide = () => {
        if (visiblePosts.length <= 1) return;
        setCurrentSlide((prev) => (prev === visiblePosts.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        if (visiblePosts.length <= 1) return;
        setCurrentSlide((prev) => (prev === 0 ? visiblePosts.length - 1 : prev - 1));
    };

    // Navegar a la publicación completa
    const handlePostClick = (postId) => {
        navigate(`/blog/${postId}`);
    };

    if (visiblePosts.length === 0) {
        return (
            <Paper
                elevation={3}
                sx={{
                    p: 4,
                    mb: 6,
                    borderRadius: 2,
                    textAlign: 'center',
                }}
            >
                <Typography variant="h4" gutterBottom>
                    No hay publicaciones recientes
                </Typography>
                <Typography variant="body1">
                    Las noticias y anuncios importantes aparecerán aquí.
                </Typography>
            </Paper>
        );
    }

    return (
        <Box
            sx={{
                position: 'relative',
                mb: 6,
                '&:hover .carousel-controls': {
                    opacity: 1,
                }
            }}
        >
            <Typography
                variant="h3"
                component="h2"
                align="left"
                sx={{
                    mb: 2,
                    color: theme.palette.primary.main,
                    fontWeight: 'bold'
                }}
            >
                Noticias y Anuncios
            </Typography>

            <Paper
                elevation={3}
                sx={{
                    overflow: 'hidden',
                    position: 'relative',
                    height: { xs: '250px', sm: '350px', md: '400px' },
                    borderRadius: 2,
                    cursor: 'pointer',
                }}
            >
                {visiblePosts.map((post, index) => (
                    <Box
                        key={post.id}
                        onClick={() => handlePostClick(post.id)}
                        sx={{
                            position: 'absolute',
                            width: '100%',
                            height: '100%',
                            opacity: index === currentSlide ? 1 : 0,
                            transition: 'opacity 1s ease-in-out',
                            backgroundImage: `url(${post.imageUrl})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                        }}
                    >
                        <Box
                            sx={{
                                position: 'absolute',
                                bottom: 0,
                                width: '100%',
                                backgroundColor: 'rgba(0,0,0,0.7)',
                                padding: 3,
                                color: 'white',
                            }}
                        >
                            <Typography variant="h4" gutterBottom>
                                {post.title}
                            </Typography>
                            <Typography variant="body1" sx={{ display: { xs: 'none', sm: 'block' } }}>
                                {post.excerpt || post.content.substring(0, 150) + '...'}
                            </Typography>
                        </Box>


                        {visiblePosts.length > 1 && (
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
                                    zIndex: 1,
                                }}
                            >
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        prevSlide();
                                    }}
                                    sx={{
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0,0,0,0.7)',
                                        },
                                    }}
                                >
                                    <KeyboardArrowLeftIcon />
                                </IconButton>
                                <IconButton
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        nextSlide();
                                    }}
                                    sx={{
                                        backgroundColor: 'rgba(0,0,0,0.5)',
                                        color: 'white',
                                        '&:hover': {
                                            backgroundColor: 'rgba(0,0,0,0.7)',
                                        },
                                    }}
                                >
                                    <KeyboardArrowRightIcon />
                                </IconButton>
                            </Box>
                        )}

                        {visiblePosts.length > 1 && (
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
                                {visiblePosts.map((_, index) => (
                                    <Box
                                        key={index}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setCurrentSlide(index);
                                        }}
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
                        )}
                    </Box>
                ))}
            </Paper>
        </Box>
    );
};

export default NewsCarousel;