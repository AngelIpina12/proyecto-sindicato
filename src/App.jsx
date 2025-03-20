import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Home from './pages/content/Home';

// Tema personalizado con los colores de CONALEP
const theme = createTheme({
  palette: {
    primary: {
      main: '#1a302a', // Color oscuro del header/footer
      light: '#2d4b40',
      dark: '#122018',
    },
    secondary: {
      main: '#1e352e', // Color de la barra de navegación
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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <Home />
    </ThemeProvider>
  );
}

export default App;