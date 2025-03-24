import React from 'react';
import { Layout } from '../layout/Layout';
import {
  Typography,
  Grid,
  Card,
  CardContent,
  Box,
  Divider,
  useTheme
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import TrackChangesIcon from '@mui/icons-material/TrackChanges';
import PageTransition from '../../utilities/PageTransition';

export const MisionVision = () => {
  const theme = useTheme();

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
            Misión y Visión
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 5 }}>
            En el Sindicato Único del Personal Académico de Conalep Nuevo León, tenemos un propósito
            claro y una dirección definida. Nuestra misión y visión reflejan nuestro compromiso con
            la excelencia educativa y el bienestar de nuestros agremiados.
          </Typography>

          <Grid container spacing={4} sx={{ mb: 6 }}>
            <Grid item xs={12} md={6}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: theme.palette.primary.light,
                  color: 'white',
                  borderRadius: 2,
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <TrackChangesIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h3" component="h2" gutterBottom>
                      Misión
                    </Typography>
                  </Box>
                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 3 }} />
                  <Typography variant="body1" paragraph>
                    Representar y defender los derechos e intereses laborales, profesionales,
                    económicos y sociales de los trabajadores académicos del Conalep Nuevo León,
                    promoviendo la mejora continua de las condiciones de trabajo, la dignificación
                    de la labor docente y el desarrollo profesional de nuestros agremiados.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Nos comprometemos a actuar con transparencia, ética y responsabilidad, facilitando
                    el acceso a programas de formación y actualización permanente, y fomentando la
                    participación activa de todos los miembros en la vida sindical.
                  </Typography>
                  <Typography variant="body1">
                    Trabajamos para consolidar un sindicato fuerte, unido y solidario, que contribuya
                    al fortalecimiento de la educación tecnológica y a la formación integral de
                    estudiantes competitivos, innovadores y comprometidos con el desarrollo de
                    nuestro país.
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Card
                elevation={3}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  bgcolor: theme.palette.secondary.main,
                  color: 'white',
                  borderRadius: 2,
                }}
              >
                <CardContent sx={{ p: 4, flexGrow: 1 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 3 }}>
                    <VisibilityIcon sx={{ fontSize: 40, mr: 2 }} />
                    <Typography variant="h3" component="h2" gutterBottom>
                      Visión
                    </Typography>
                  </Box>
                  <Divider sx={{ bgcolor: 'rgba(255,255,255,0.3)', mb: 3 }} />
                  <Typography variant="body1" paragraph>
                    Para el 2030, ser reconocidos como un sindicato líder en el ámbito educativo,
                    caracterizado por su capacidad de gestión, innovación y compromiso con la calidad
                    educativa y el bienestar integral de sus agremiados.
                  </Typography>
                  <Typography variant="body1" paragraph>
                    Aspiramos a consolidarnos como una organización:
                  </Typography>
                  <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                    <li>Democrática y participativa, que represente eficazmente a todos sus miembros.</li>
                    <li>Comprometida con la profesionalización y actualización constante del personal académico.</li>
                    <li>Promotora de la investigación, la innovación y las buenas prácticas educativas.</li>
                    <li>Reconocida por su contribución a la educación tecnológica de calidad en México.</li>
                    <li>Generadora de alianzas estratégicas que beneficien a sus agremiados y a la institución.</li>
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </Grid>

          <Box
            sx={{
              bgcolor: '#f0f0f0',
              p: 4,
              borderRadius: 2,
              border: `1px solid ${theme.palette.primary.light}`,
              mt: 4
            }}
          >
            <Typography variant="h3" component="h2" gutterBottom align="center" color="primary">
              Nuestro Compromiso Institucional
            </Typography>
            <Typography variant="body1" paragraph align="center">
              Trabajamos en estrecha colaboración con las autoridades del Conalep Nuevo León para
              contribuir a la formación de profesionales técnicos de excelencia, promoviendo un
              ambiente educativo de calidad que responda a las necesidades del sector productivo
              y a los retos de la sociedad contemporánea.
            </Typography>
            <Typography variant="body1" align="center" sx={{ fontWeight: 'bold' }}>
              "La unión hace la fuerza, la educación transforma vidas"
            </Typography>
          </Box>
        </Box>
      </PageTransition>
    </Layout>
  );
};