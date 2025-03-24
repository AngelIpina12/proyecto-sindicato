import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, 
  Container, 
  TextField, 
  Button, 
  Typography, 
  Paper,
  Grid,
  Alert,
  Snackbar
} from '@mui/material';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { styled } from '@mui/material/styles';
import { BlogContext } from '../../context/BlogContext';
import { Layout } from '../layout/Layout';
import PageTransition from '../../utilities/PageTransition';

// Estilos para el input de archivo
const VisuallyHiddenInput = styled('input')({
  clip: 'rect(0 0 0 0)',
  clipPath: 'inset(50%)',
  height: 1,
  overflow: 'hidden',
  position: 'absolute',
  bottom: 0,
  left: 0,
  whiteSpace: 'nowrap',
  width: 1,
});

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  // Manejar cambio de imagen
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // Manejar envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim() || !image) {
      setAlert({
        open: true,
        message: 'Por favor, completa todos los campos y sube una imagen',
        severity: 'error'
      });
      return;
    }
    const newPost = {
      title,
      content,
      imageUrl: imagePreview,
      excerpt: content.substring(0, 150) + '...' 
    };
    const postId = addPost(newPost);
    setAlert({
      open: true,
      message: '¡Publicación creada con éxito!',
      severity: 'success'
    });
    setTimeout(() => {
      navigate(`/blog/${postId}`);
    }, 1500);
  };

  // Cerrar alerta
  const handleCloseAlert = () => {
    setAlert({ ...alert, open: false });
  };

  return (
    <Layout>
      <PageTransition>
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, mt: 4, mb: 4, borderRadius: 2 }}>
            <Typography variant="h1" component="h1" gutterBottom align="center">
              Crear Nueva Publicación
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Título de la publicación"
                    variant="outlined"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Button
                    component="label"
                    variant="contained"
                    startIcon={<CloudUploadIcon />}
                    sx={{ mb: 2 }}
                    fullWidth
                  >
                    Subir imagen principal
                    <VisuallyHiddenInput 
                      type="file" 
                      accept="image/*" 
                      onChange={handleImageChange} 
                    />
                  </Button>
                  
                  {imagePreview && (
                    <Box 
                      sx={{ 
                        mt: 2, 
                        width: '100%', 
                        height: 300, 
                        backgroundImage: `url(${imagePreview})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        borderRadius: 1
                      }} 
                    />
                  )}
                </Grid>
                
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    label="Contenido de la publicación"
                    variant="outlined"
                    multiline
                    rows={10}
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                  />
                </Grid>
                
                <Grid item xs={12}>
                  <Button 
                    type="submit" 
                    variant="contained" 
                    color="primary" 
                    size="large"
                    fullWidth
                  >
                    Publicar
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Paper>
          
          <Snackbar 
            open={alert.open} 
            autoHideDuration={6000} 
            onClose={handleCloseAlert}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
          >
            <Alert onClose={handleCloseAlert} severity={alert.severity} sx={{ width: '100%' }}>
              {alert.message}
            </Alert>
          </Snackbar>
        </Container>
      </PageTransition>
    </Layout>
  );
};

export default CreatePost;