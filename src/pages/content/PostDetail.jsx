import React, { useContext, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  Typography, 
  Paper, 
  Divider, 
  Button,
  Chip 
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { BlogContext } from '../../context/BlogContext';
import { Layout } from '../layout/Layout';
import PageTransition from '../../utilities/PageTransition';

const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const { getPostById } = useContext(BlogContext);
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  // Obtención de publicación
  useEffect(() => {
    const postData = getPostById(postId);
    if (postData) {
      setPost(postData);
    }
    setLoading(false);
  }, [postId, getPostById]);

  // Formatear fecha
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
  };

  // Manejar regreso a la página principal
  const handleBack = () => {
    navigate('/');
  };

  if (loading) {
    return (
      <Layout>
        <Container>
          <Typography>Cargando publicación...</Typography>
        </Container>
      </Layout>
    );
  }

  if (!post) {
    return (
      <Layout>
        <Container>
          <Paper sx={{ p: 4, mt: 4, textAlign: 'center' }}>
            <Typography variant="h4" color="error">
              Publicación no encontrada
            </Typography>
            <Button 
              variant="contained" 
              startIcon={<ArrowBackIcon />} 
              onClick={handleBack}
              sx={{ mt: 3 }}
            >
              Volver a inicio
            </Button>
          </Paper>
        </Container>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageTransition>
        <Container maxWidth="md">
          <Button 
            variant="outlined" 
            startIcon={<ArrowBackIcon />} 
            onClick={handleBack}
            sx={{ my: 2 }}
          >
            Volver
          </Button>
          
          <Paper elevation={3} sx={{ p: { xs: 2, sm: 4 }, mb: 4, borderRadius: 2 }}>
            <Typography 
              variant="h1" 
              component="h1" 
              gutterBottom
              sx={{ fontSize: { xs: '2rem', sm: '2.5rem' } }}
            >
              {post.title}
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3, }}>
              <Chip 
                icon={<CalendarTodayIcon />} 
                label={post.date ? formatDate(post.date) : 'Fecha no disponible'} 
                variant="outlined" 
                size="small"
                sx={{ p: 2}}
              />
            </Box>
            
            {post.imageUrl && (
              <Box 
                sx={{ 
                  width: '100%', 
                  height: { xs: 200, sm: 300, md: 400 }, 
                  backgroundImage: `url(${post.imageUrl})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  borderRadius: 1,
                  mb: 3
                }} 
              />
            )}
            
            <Divider sx={{ mb: 3 }} />
            
            <Typography 
              variant="body1" 
              sx={{ 
                whiteSpace: 'pre-line',
                lineHeight: 1.8 
              }}
            >
              {post.content}
            </Typography>
          </Paper>
        </Container>
      </PageTransition>
    </Layout>
  );
};

export default PostDetail;