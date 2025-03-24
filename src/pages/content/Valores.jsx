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
import JusticeIcon from '@mui/icons-material/Gavel';
import IntegrityIcon from '@mui/icons-material/VerifiedUser';
import SolidarityIcon from '@mui/icons-material/PeopleAlt';
import RespectIcon from '@mui/icons-material/Accessibility';
import TransparencyIcon from '@mui/icons-material/Visibility';
import ExcellenceIcon from '@mui/icons-material/EmojiEvents';
import PageTransition from '../../utilities/PageTransition';

export const Valores = () => {
  const theme = useTheme();

  const valoresList = [
    {
      title: "Justicia",
      description: "Promovemos el trato equitativo y la defensa de los derechos laborales y profesionales de todos nuestros agremiados, actuando conforme a la normatividad y buscando siempre relaciones laborales justas y equilibradas.",
      icon: <JusticeIcon sx={{ fontSize: 60, color: theme.palette.primary.light }} />
    },
    {
      title: "Integridad",
      description: "Actuamos con rectitud, honestidad y congruencia, manteniendo una conducta ética en todas nuestras acciones y decisiones, tanto en la gestión sindical como en nuestra labor docente.",
      icon: <IntegrityIcon sx={{ fontSize: 60, color: theme.palette.primary.light }} />
    },
    {
      title: "Solidaridad",
      description: "Fomentamos el apoyo mutuo y la colaboración entre compañeros, creando una comunidad académica unida que trabaja por el bien común y el mejoramiento de las condiciones de todos los miembros del sindicato.",
      icon: <SolidarityIcon sx={{ fontSize: 60, color: theme.palette.primary.light }} />
    },
    {
      title: "Respeto",
      description: "Valoramos la dignidad de cada persona, reconociendo y apreciando las diferencias individuales y fomentando un ambiente de trabajo basado en la consideración mutua y el diálogo constructivo.",
      icon: <RespectIcon sx={{ fontSize: 60, color: theme.palette.primary.light }} />
    },
    {
      title: "Transparencia",
      description: "Mantenemos una gestión abierta y clara, comunicando con oportunidad y veracidad nuestras acciones y resultados, y rindiendo cuentas de manera periódica a nuestros agremiados.",
      icon: <TransparencyIcon sx={{ fontSize: 60, color: theme.palette.primary.light }} />
    },
    {
      title: "Excelencia",
      description: "Buscamos constantemente la mejora continua y la calidad en todas nuestras actividades, promoviendo el desarrollo profesional y personal de nuestros agremiados para fortalecer la calidad educativa en Conalep.",
      icon: <ExcellenceIcon sx={{ fontSize: 60, color: theme.palette.primary.light }} />
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
            Nuestros Valores
          </Typography>

          <Typography variant="body1" paragraph sx={{ mb: 5 }}>
            En el Sindicato Único del Personal Académico de Conalep Nuevo León, nuestros valores son la brújula que guía todas nuestras acciones y decisiones. Representan los principios fundamentales que definen nuestra identidad como organización sindical y nuestra forma de relacionarnos entre compañeros, con las autoridades educativas y con la sociedad en general.
          </Typography>

          <Divider sx={{ mb: 6 }} />

          <Grid container spacing={4}>
            {valoresList.map((valor, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  elevation={3}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-5px)',
                      boxShadow: theme.shadows[6],
                    },
                    borderRadius: 2,
                  }}
                >
                  <CardContent sx={{ p: 3, flexGrow: 1 }}>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        mb: 2
                      }}
                    >
                      {valor.icon}
                      <Typography
                        variant="h3"
                        component="h2"
                        align="center"
                        sx={{
                          mt: 2,
                          color: theme.palette.primary.main,
                          fontWeight: 'bold',
                        }}
                      >
                        {valor.title}
                      </Typography>
                    </Box>
                    <Divider sx={{ mb: 2 }} />
                    <Typography variant="body1" align="center">
                      {valor.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>

          <Box
            sx={{
              bgcolor: theme.palette.primary.main,
              color: 'white',
              p: 4,
              borderRadius: 2,
              mt: 6
            }}
          >
            <Typography variant="h3" component="h2" gutterBottom align="center">
              Aplicación de nuestros valores
            </Typography>
            <Typography variant="body1" paragraph>
              Estos valores no son solo declaraciones de principios, sino que se reflejan en nuestra gestión diaria:
            </Typography>
            <Grid container spacing={2} sx={{ mt: 2 }}>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                  <li>En la defensa de los derechos laborales de nuestros agremiados</li>
                  <li>En la gestión transparente de los recursos sindicales</li>
                  <li>En el trato equitativo a todos los miembros de nuestra organización</li>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography variant="body1" component="ul" sx={{ pl: 2 }}>
                  <li>En la promoción del desarrollo profesional docente</li>
                  <li>En nuestra relación con las autoridades educativas</li>
                  <li>En el compromiso con la calidad educativa de Conalep</li>
                </Typography>
              </Grid>
            </Grid>
            <Typography variant="body1" align="center" sx={{ mt: 3, fontWeight: 'bold' }}>
              "Nuestros valores nos definen y fortalecen como comunidad académica"
            </Typography>
          </Box>
        </Box>
      </PageTransition>
    </Layout>
  );
};