import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/content/Home';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { MisionVision } from './pages/content/MisionVision';
import { Valores } from './pages/content/Valores';
import { Organizacion } from './pages/content/Organizacion';
import { AnimatePresence } from 'framer-motion';
import CreatePost from './pages/content/CreatePost';
import PostDetail from './pages/content/PostDetail';
import { BlogProvider } from './context/BlogContext';
import { ScrollToTopRouter } from './utilities/ScrollToTopRouter';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1a302a',
      light: '#2d4b40',
      dark: '#122018',
    },
    secondary: {
      main: '#1e352e',
      light: '#2d4b40',
      dark: '#122018',
    },
    text: {
      primary: '#333333',
      secondary: '#666666',
    },
  },
  typography: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 600,
      marginBottom: '1rem',
    },
    h3: {
      fontSize: '1.2rem',
      fontWeight: 600,
      marginBottom: '0.8rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/mision-vision" element={<MisionVision />} />
        <Route path="/valores" element={<Valores />} />
        <Route path="/organizacion" element={<Organizacion />} />
        <Route path="/crear-publicacion" element={<CreatePost />} />
        <Route path="/blog/:postId" element={<PostDetail />} />
        <Route path="*" element={<div>Página no encontrada</div>} />
      </Routes>
    </AnimatePresence>
  );
};


function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlogProvider>
        <BrowserRouter>
          <ScrollToTopRouter />
          <AnimatedRoutes />
        </BrowserRouter>
      </BlogProvider>
    </ThemeProvider>
  );
}

export default App;