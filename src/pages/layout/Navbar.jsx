import React, { useEffect, useState } from 'react'
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
    styled,
    useTheme
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import CreateIcon from '@mui/icons-material/Create';
import logo from "../../assets/SUPACLogoNavbrPNGWithTransparency.png";
import logoWithGreenFont from "../../assets/SUPACLogoNavbrPNGWithTransparencyAndGreenFont.png";
import { motion } from 'framer-motion';

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
        title: 'Transparencia',
        path: '/transparencia',
        items: [
            { title: 'Cuentas', path: '/transparencia/cuentas' },
            { title: 'Licitaciones', path: '/transparencia/licitaciones' },
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
        title: 'Sugerencias',
        path: '/sugerencias',
        items: [
            { title: 'Noticias', path: '/sugerencias/noticias' },
            { title: 'Eventos', path: '/sugerencias/eventos' },
            { title: 'Contacto', path: '/sugerencias/contacto' }
        ]
    }
];

const NavbarWrapper = styled(AppBar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
}));

const NavButton = styled(Button)(({ theme }) => ({
    color: '#ffffff',
    margin: theme.spacing(0, 1),
    fontSize: '1rem',
    transition: 'background-color 0.3s ease, transform 0.2s ease',
    '&:hover': {
        color: 'rgb(214, 236, 207)',
        transform: 'scale(1.07)',
    },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    color: '#ffffff',
    transition: 'background-color 0.3s ease',
    '&:hover': {
        color: 'rgb(255, 255, 255)',
    },
}));

// Componente de logo animado
const AnimatedLogo = ({ isSticky, size = 40 }) => {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: isSticky ? 1 : 0, scale: isSticky ? 1 : 0.8 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            style={{ display: isSticky ? "block" : "none" }}
        >
            <RouterLink to="/">
                <img src={logo} alt="SUPAC Logo" style={{ height: `${size}px` }} />
            </RouterLink>
        </motion.div>
    );
};

export const Navbar = () => {
    const [anchorEls, setAnchorEls] = useState(() => new Array(menuItems.length).fill(null));
    const [mobileOpen, setMobileOpen] = useState(false);
    const [openSubmenu, setOpenSubmenu] = useState(() => new Array(menuItems.length).fill(false));
    const [isSticky, setIsSticky] = useState(false);
    const theme = useTheme();

    const CreateButton = styled(Button)(({ theme }) => ({
        color: '#ffffff',
        margin: theme.spacing(0, 1),
        backgroundColor: isSticky ? theme.palette.secondary.light : theme.palette.primary.light,
        fontSize: '0.9rem',
        borderRadius: '20px',
        padding: theme.spacing(0.5, 2),
        transition: 'background-color 0.3s ease, transform 0.2s ease',
        '&:hover': {
            color: 'rgb(255, 255, 255)',
            backgroundColor: isSticky ? theme.palette.secondary.dark : theme.palette.primary.dark,
            transform: 'scale(1.07)',
        },
    }));

    // Handlers para escritorio
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

    // Handlers para móvil
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleSubmenuToggle = (index) => {
        const newOpenSubmenu = [...openSubmenu];
        newOpenSubmenu[index] = !newOpenSubmenu[index];
        setOpenSubmenu(newOpenSubmenu);
    };

    // Detectar scroll
    useEffect(() => {
        const header = document.querySelector('.header-main');
        const handleScroll = () => {
            if (header) {
                const headerBottom = header.getBoundingClientRect().bottom;
                setIsSticky(headerBottom <= 0);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menú para móviles
    const drawer = (
        <Box sx={{ width: 250, height: "100%", backgroundColor: "#F2FFF1" }} role="presentation">
            {isSticky && (
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        p: 2
                    }}
                >
                    <RouterLink to="/">
                        <img
                            src={logoWithGreenFont}
                            alt="SUPAC Logo"
                            style={{
                                height: '50px'
                            }}
                        />
                    </RouterLink>
                </Box>
            )}
            <List>
                {menuItems.map((item, index) => (
                    <React.Fragment key={item.title}>
                        <ListItem disablePadding>
                            {item.items.length > 0 ? (
                                <ListItemButton
                                    onClick={() => handleSubmenuToggle(index)}
                                    sx={{
                                        '&:hover': {
                                            color: 'rgb(46, 97, 34)',
                                        },
                                    }}
                                >
                                    <ListItemText primary={item.title} />
                                    {openSubmenu[index] ? <ExpandLess /> : <ExpandMore />}
                                </ListItemButton>
                            ) : (
                                <ListItemButton
                                    component={RouterLink}
                                    to={item.path}
                                    sx={{
                                        '&:hover': {
                                            color: 'rgb(46, 97, 34)',
                                        },
                                    }}
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
                                            sx={{
                                                pl: 4,
                                                '&:hover': {
                                                    color: 'rgb(46, 97, 34)',
                                                },
                                            }}
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
        <NavbarWrapper
            position={isSticky ? "fixed" : "static"}
            elevation={isSticky ? 4 : 0}
            sx={{
                backgroundColor: isSticky
                    ? theme.palette.primary.main
                    : theme.palette.secondary.main,
                transition: 'background-color 0.3s, box-shadow 0.3s'
            }}
        >
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
                        <Box sx={{ position: 'absolute', left: '50%', transform: 'translateX(-50%)' }}>
                            <AnimatedLogo isSticky={isSticky} size={30} />
                        </Box>
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
                                keepMounted: true,
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
                            justifyContent: 'space-between',
                            alignItems: 'center'
                        }}
                    >
                        <motion.div
                            animate={{
                                marginLeft: isSticky ? "160px" : "0px",
                                transition: { duration: 0.4, ease: "easeInOut" }
                            }}
                            style={{ display: 'flex' }}
                        >
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
                        </motion.div>
                        <motion.div
                            style={{
                                position: 'absolute',
                                left: 24,
                                display: 'flex',
                                alignItems: 'center'
                            }}
                        >
                            <AnimatedLogo isSticky={isSticky} />
                        </motion.div>

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
        </NavbarWrapper >
    )
}
