import React from 'react';
import { Layout } from '../layout/Layout';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Avatar,
  Divider,
  Paper,
  useTheme
} from '@mui/material';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import PageTransition from '../../utilities/PageTransition';

export const Organizacion = () => {
  const theme = useTheme();

  const comiteEjecutivo = [
    {
      nombre: "Dr. Juan Pérez Rodríguez",
      cargo: "Secretario General",
      descripcion: "Doctor en Educación con 20 años de experiencia docente. Lidera la representación del sindicato y coordina las acciones estratégicas.",
      foto: "https://via.placeholder.com/150"
    },
    {
      nombre: "Mtra. María López García",
      cargo: "Secretaria de Organización",
      descripcion: "Maestra en Administración Educativa. Responsable de la coordinación interna y los procesos organizativos del sindicato.",
      foto: "https://via.placeholder.com/150"
    },
    {
      nombre: "Mtro. Roberto González Martínez",
      cargo: "Secretario de Finanzas",
      descripcion: "Maestro en Economía. Administra los recursos financieros del sindicato y garantiza la transparencia en su manejo.",
      foto: "https://via.placeholder.com/150"
    },
    {
      nombre: "Dra. Ana Sánchez Torres",
      cargo: "Secretaria de Asuntos Académicos",
      descripcion: "Doctora en Pedagogía. Gestiona los temas relacionados con la actividad docente y el desarrollo profesional.",
      foto: "https://via.placeholder.com/150"
    },
    {
      nombre: "Mtro. Carlos Ramírez Flores",
      cargo: "Secretario de Asuntos Laborales",
      descripcion: "Maestro en Derecho Laboral. Atiende las cuestiones relacionadas con derechos laborales y condiciones de trabajo.",
      foto: "https://via.placeholder.com/150"
    },
    {
      nombre: "Mtra. Lucía Hernández Vega",
      cargo: "Secretaria de Comunicación",
      descripcion: "Maestra en Comunicación. Responsable de la difusión de información y la comunicación interna y externa.",
      foto: "https://via.placeholder.com/150"
    }
  ];

  return (
    <Layout>
      <PageTransition>
        <Box sx={{ my: 4 }}>
          <Typography
            variant="h1"
            component="h1"
            align="center"
            sx={{ color: theme.palette.primary.main, mb: 5 }}
          >
            Nuestra Organización
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 4 }}>
            El Sindicato Único del Personal Académico de Conalep Nuevo León está estructurado para atender
            eficazmente las necesidades de todos sus agremiados y mantener una representación efectiva
            ante las autoridades educativas y laborales.
          </Typography>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 6,
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.light}`,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <BusinessIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  mt: 2,
                }}
              >
                Estructura Organizacional
              </Typography>
            </Box>
            <Divider sx={{ mb: 3 }} />

            <Typography variant="body1" paragraph>
              Nuestra estructura sindical está diseñada para garantizar una representación efectiva y democrática. Contamos con los siguientes órganos de gobierno:
            </Typography>

            <Grid container spacing={3} sx={{ mb: 3 }}>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                    Asamblea General
                  </Typography>
                  <Typography variant="body2">
                    Máximo órgano de decisión conformado por todos los agremiados. Se reúne periódicamente para tomar decisiones estratégicas y evaluar el trabajo del Comité Ejecutivo.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                    Comité Ejecutivo
                  </Typography>
                  <Typography variant="body2">
                    Órgano colegiado responsable de la administración y representación del sindicato. Está integrado por secretarías específicas que atienden las diferentes áreas de gestión.
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  sx={{
                    p: 3,
                    border: `1px solid ${theme.palette.primary.light}`,
                    borderRadius: 2,
                    height: '100%',
                  }}
                >
                  <Typography variant="h6" gutterBottom sx={{ color: theme.palette.primary.main }}>
                    Comisiones Especiales
                  </Typography>
                  <Typography variant="body2">
                    Grupos de trabajo formados para atender temas específicos como transparencia, elecciones, honor y justicia, entre otros, según las necesidades del sindicato.
                  </Typography>
                </Box>
              </Grid>
            </Grid>

            <Typography variant="body1" paragraph>
              Nuestro modelo organizacional permite una comunicación efectiva entre las bases y los dirigentes, así como una toma de decisiones participativa que fortalece nuestra unidad como gremio docente.
            </Typography>
          </Paper>

          <Box sx={{ mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <PeopleIcon sx={{ fontSize: 40, color: theme.palette.primary.main, mr: 2 }} />
              <Typography
                variant="h3"
                component="h2"
                sx={{
                  color: theme.palette.primary.main,
                  fontWeight: 'bold',
                  mt: 2,
                }}
              >
                Comité Ejecutivo
              </Typography>
            </Box>
            <Divider sx={{ mb: 4 }} />

            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
              Nuestro Comité Ejecutivo está conformado por docentes comprometidos con la defensa de los derechos
              laborales y el desarrollo profesional de todos los agremiados. Cada miembro aporta su experiencia
              y conocimientos en beneficio de nuestra comunidad académica.
            </Typography>

            <Grid container spacing={3}>
              {comiteEjecutivo.map((miembro, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card
                    elevation={2}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      borderRadius: 2,
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'scale(1.02)',
                      },
                    }}
                  >
                    <CardContent sx={{ p: 3, flexGrow: 1 }}>
                      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 2 }}>
                        <Avatar
                          src={miembro.foto}
                          alt={miembro.nombre}
                          sx={{
                            width: 120,
                            height: 120,
                            mb: 2,
                            border: `3px solid ${theme.palette.primary.main}`
                          }}
                        />
                        <Typography
                          variant="h6"
                          component="h3"
                          align="center"
                          sx={{ fontWeight: 'bold' }}
                        >
                          {miembro.nombre}
                        </Typography>
                        <Typography
                          variant="subtitle1"
                          color="primary"
                          align="center"
                          sx={{ mb: 1 }}
                        >
                          {miembro.cargo}
                        </Typography>
                      </Box>
                      <Divider sx={{ mb: 2 }} />
                      <Typography variant="body2" align="center">
                        {miembro.descripcion}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>

          <Paper
            elevation={3}
            sx={{
              p: 4,
              mb: 6,
              bgcolor: theme.palette.primary.light,
              color: 'white',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
              <AccountBalanceIcon sx={{ fontSize: 40, mr: 2 }} />
              <Typography
                variant="h3"
                component="h2"
                sx={{ fontWeight: 'bold', mt: 2, }}
              >
                Marco Normativo
              </Typography>
            </Box>
            <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 3 }} />

            <Typography variant="body1" paragraph>
              Nuestras acciones y decisiones se rigen por un marco normativo claro que garantiza la legalidad
              y transparencia de nuestra gestión sindical:
            </Typography>

            <Grid container spacing={2} sx={{ mb: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                  <li>Estatutos del Sindicato Único del Personal Académico</li>
                  <li>Reglamento Interior de Trabajo</li>
                  <li>Contrato Colectivo de Trabajo</li>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                  <li>Ley Federal del Trabajo</li>
                  <li>Ley Federal de los Trabajadores al Servicio del Estado</li>
                  <li>Código de Ética y Conducta</li>
                </Typography>
              </Grid>
            </Grid>

            <Typography variant="body1" align="center" sx={{ mt: 2, fontStyle: 'italic' }}>
              Todos estos documentos están disponibles para consulta de nuestros agremiados en las oficinas
              sindicales y próximamente en nuestra plataforma digital.
            </Typography>
          </Paper>

          <Box
            sx={{
              textAlign: 'center',
              p: 3,
              bgcolor: '#f0f0f0',
              borderRadius: 2,
            }}
          >
            <Typography variant="h4" gutterBottom color="primary">
              Trabajamos por y para nuestros agremiados
            </Typography>
            <Typography variant="body1">
              Nuestra estructura organizacional está diseñada para servir eficazmente a todos los docentes
              de Conalep Nuevo León. Te invitamos a participar activamente en la vida sindical y a contribuir
              con tus ideas y propuestas para fortalecer nuestra organización.
            </Typography>
          </Box>
        </Box>
      </PageTransition>
    </Layout>
  );
};