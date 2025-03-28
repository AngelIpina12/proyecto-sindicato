import React from 'react'
import { Box, Container, styled } from '@mui/material'
import logo from "../../assets/SUPACLogoNavbrPNGWithTransparency.png";

const HeaderWrapper = styled(Box)(({ theme }) => ({
    background: `linear-gradient(to bottom, ${theme.palette.primary.main} 70%, ${theme.palette.secondary.main} 100%)`,
    backgroundColor: theme.palette.primary.main,
    padding: theme.spacing(2, 0),
}));

const LogoContainer = styled(Container)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}));

const Logo = styled('img')({
    height: 100
});

export const Header = () => {
    return (
        <HeaderWrapper className="header-main">
            <LogoContainer>
                <Logo src={logo} alt="SUPAC Nuevo León Logo" id="logo" />
            </LogoContainer>
        </HeaderWrapper>
    )
}
