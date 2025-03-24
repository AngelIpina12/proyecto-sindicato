import React, { useState } from 'react'
import { Link as RouterLink } from 'react-router-dom';
import {
    AppBar,
    Container,
    Toolbar,
    Button,
    Menu,
    MenuItem,
    Box,
    IconButton,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemButton,
    Collapse,
    styled
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';

const menuItems = [
    {
        title: 'Inicio',
        path: '/',
        items: []
    },
    {
        title: 'Quiénes Somos',
        path: '/',
        items: [
            { title: 'Misión y Visión', path: '/mision-vision' },
            { title: 'Valores', path: '/valores' },
            { title: 'Organización', path: '/organizacion' }
        ]
    },
    {
        title: 'Estudiantes',
        path: '/estudiantes',
        items: [
            { title: 'Servicios Escolares', path: '/estudiantes/servicios-escolares' },
            { title: 'Becas', path: '/estudiantes/becas' },
            { title: 'Calendario', path: '/estudiantes/calendario' }
        ]
    },
    {
        title: 'Transparencia',
        path: '/transparencia',
        items: [
            { title: 'Informes', path: '/transparencia/informes' },
            { title: 'Documentos', path: '/transparencia/documentos' },
            { title: 'Licitaciones', path: '/transparencia/licitaciones' }
        ]
    },
    {
        title: 'Servicios',
        path: '/servicios',
        items: [
            { title: 'Trámites', path: '/servicios/tramites' },
            { title: 'Certificaciones', path: '/servicios/certificaciones' },
            { title: 'Bolsa de Trabajo', path: '/servicios/bolsa-trabajo' }
        ]
    },
    {
        title: 'Otros',
        path: '/otros',
        items: [
            { title: 'Noticias', path: '/otros/noticias' },
            { title: 'Eventos', path: '/otros/eventos' },
            { title: 'Contacto', path: '/otros/contacto' }
        ]
    }
];

const NavbarWrapper = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    boxShadow: 'none',
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    margin: theme.spacing(0, 1),
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
        color: 'rgba(204, 204, 204, 0.74)',
        transform: 'scale(1.07)',
    },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        color: 'rgba(204, 204, 204, 0.74)',
    },
}));

const CreateButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    margin: theme.spacing(0, 1),
    backgroundColor: theme.palette.primary.light,
    fontSize: '0.9rem',
    borderRadius: '20px',
    padding: theme.spacing(0.5, 2),
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
        color: 'rgba(204, 204, 204, 0.74)',
        backgroundColor: theme.palette.primary.main,
        transform: 'scale(1.07)',
    },
}));

export const Navbar = () => {
    // Estado para los menús desplegables (desktop)
    const [anchorEls, setAnchorEls] = useState(() => new Array(menuItems.length).fill(null));

    // Estado para el menú móvil
    const [mobileOpen, setMobileOpen] = useState(false);

    // Estado para los submenús expandidos en móvil
    const [openSubmenu, setOpenSubmenu] = useState(() => new Array(menuItems.length).fill(false));

    // Manejadores para escritorio
    const handleOpenMenu = (index, event) => {
        const newAnchorEls = [...anchorEls];
        newAnchorEls[index] = event.currentTarget;
        setAnchorEls(newAnchorEls);
    };

    const handleCloseMenu = (index) => {
        const newAnchorEls = [...anchorEls];
        newAnchorEls[index] = null;
        setAnchorEls(newAnchorEls);
    };

    // Manejadores para móvil
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSubmenuToggle = (index) => {
        const newOpenSubmenu = [...openSubmenu];
        newOpenSubmenu[index] = !newOpenSubmenu[index];
        setOpenSubmenu(newOpenSubmenu);
    };

    // Menú para móviles
    const drawer = (
        <Box sx={{ width: 250 }} role="presentation">
            <List>
                {menuItems.map((item, index) => (
                    <React.Fragment key={item.title}>
                        <ListItem disablePadding>
                            {item.items.length > 0 ? (
                                <ListItemButton onClick={() => handleSubmenuToggle(index)}>
                                    <ListItemText primary={item.title} />
                                    {openSubmenu[index] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            ) : (
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.path}
                                    onClick={handleDrawerToggle}
                                >
                                    <ListItemText primary={item.title} />
                                </ListItemButton>
                            )}
                        </ListItem>

                        {item.items.length > 0 && (
                            <Collapse in={openSubmenu[index]} timeout="auto" unmountOnExit>
                                <List component="div" disablePadding>
                                    {item.items.map((subItem) => (
                                        <ListItemButton
                                            key={subItem.title}
                                            component={RouterLink}
                                            to={subItem.path}
                                            onClick={handleDrawerToggle}
                                            sx={{ pl: 4 }}
                                        >
                                            <ListItemText primary={subItem.title} />
                                        </ListItemButton>
                                    ))}
                                </List>
                            </Collapse>
                        )}
                    </React.Fragment>
                ))}
            </List>
        </Box>
    );

    return (
        <NavbarWrapper position='static'>
            <Container maxWidth="lg">
                <Toolbar disableGutters>
                    {/* Versión móvil */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'flex',
                                md: 'none'
                            },
                            justifyContent: "space-between",
                            alignItems: "center",
                            width: "100%"
                        }}
                    >
                        <IconButton
                            size="large"
                            aria-label="menu"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleDrawerToggle}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <CreateButton
                            component={RouterLink}
                            to="/crear-publicacion"
                            startIcon={<CreateIcon />}
                            variant="contained"
                            size="small"
                        >
                            Publicar
                        </CreateButton>
                        <Drawer
                            anchor="left"
                            open={mobileOpen}
                            onClose={handleDrawerToggle}
                            ModalProps={{
                                keepMounted: true, // Mejor rendimiento en móviles
                            }}
                            sx={{
                                display: {
                                    xs: 'block',
                                    md: 'none'
                                },
                                '& .MuiDrawer-paper': {
                                    boxSizing: 'border-box',
                                    width: 250
                                },
                            }}
                        >
                            {drawer}
                        </Drawer>
                    </Box>

                    {/* Versión desktop */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: {
                                xs: 'none',
                                md: 'flex'
                            },
                            justifyContent: 'space-between'
                        }}
                    >
                        <Box sx={{ display: 'flex' }}>
                            {menuItems.map((item, index) => (
                                <React.Fragment key={item.title}>
                                    {item.items.length > 0 ? (
                                        <>
                                            <NavButton
                                                onClick={(e) => handleOpenMenu(index, e)}
                                                endIcon={<KeyboardArrowDownIcon />}
                                            >
                                                {item.title}
                                            </NavButton>
                                            <Menu
                                                anchorEl={anchorEls[index]}
                                                open={Boolean(anchorEls[index])}
                                                onClose={() => handleCloseMenu(index)}
                                                PaperProps={{
                                                    sx: {
                                                        backgroundColor: 'secondary.main',
                                                        minWidth: 200,
                                                    },
                                                }}
                                            >
                                                {item.items.map((subItem) => (
                                                    <StyledMenuItem
                                                        key={subItem.title}
                                                        onClick={() => handleCloseMenu(index)}
                                                        component={RouterLink}
                                                        to={subItem.path}
                                                        sx={{
                                                            color: 'white',
                                                            '&:hover': {
                                                                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                                                            },
                                                        }}
                                                    >
                                                        {subItem.title}
                                                    </StyledMenuItem>
                                                ))}
                                            </Menu>
                                        </>
                                    ) : (
                                        <NavButton
                                            component={RouterLink}
                                            to={item.path}
                                        >
                                            {item.title}
                                        </NavButton>
                                    )}
                                </React.Fragment>
                            ))}
                        </Box>
                        <CreateButton
                            component={RouterLink}
                            to="/crear-publicacion"
                            startIcon={<CreateIcon />}
                            variant="contained"
                        >
                            Crear Publicación
                        </CreateButton>
                    </Box>
                </Toolbar>
            </Container>
        </NavbarWrapper>
    )
}
