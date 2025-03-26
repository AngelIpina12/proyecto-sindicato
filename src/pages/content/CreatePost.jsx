import React, { useState, useContext, useEffect } from 'react';
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
import { AnimatePresence, motion } from 'framer-motion';

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

// Alert estilizado con sombra
const StyledAlert = styled(Alert)(({ theme }) => ({
  boxShadow: '0px 3px 8px rgba(0, 0, 0, 0.15)',
  borderRadius: theme.shape.borderRadius,
  width: '100%',
  maxWidth: '600px',
  '& .MuiAlert-icon': {
    fontSize: '1.2rem',
  },
  '& .MuiAlert-message': {
    fontSize: '0.95rem',
  }
}));

// Contenedor de alerta fijo en la parte superior
const FixedAlertContainer = styled(Box)({
  position: 'fixed',
  top: 10,
  left: 0,
  right: 0,
  display: 'flex',
  justifyContent: 'center',
  zIndex: 9999, // Asegura que está por encima de todo
});

// Variantes para animación de entrada y salida
const alertVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    scale: 0.9
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 200,
      damping: 20
    }
  },
  exit: {
    opacity: 0,
    y: -20,
    scale: 0.95,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const CreatePost = () => {
  const navigate = useNavigate();
  const { addPost } = useContext(BlogContext);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState('');
  const [alert, setAlert] = useState({ open: false, message: '', severity: 'success' });

  // Cierre automático de la alerta después de un tiempo
  useEffect(() => {
    if (alert.open) {
      const timer = setTimeout(() => {
        setAlert({ ...alert, open: false });
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [alert]);

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
      <AnimatePresence>
        {alert.open && (
          <FixedAlertContainer>
            <motion.div
              variants={alertVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ width: '100%', maxWidth: '600px', display: 'flex', justifyContent: 'center' }}
            >
              <StyledAlert
                severity={alert.severity}
                variant="filled"
                onClose={handleCloseAlert}
              >
                {alert.message}
              </StyledAlert>
            </motion.div>
          </FixedAlertContainer>
        )}
      </AnimatePresence>
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
        </Container>
      </PageTransition>
    </Layout>
  );
};

export default CreatePost;