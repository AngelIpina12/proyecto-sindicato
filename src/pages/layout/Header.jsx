import { Box, Container, styled } from '@mui/material'
import React from 'react'

const HeaderWrapper = styled(Box)(({ theme }) => ({
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
                <Logo src="../../src/assets/SUPAClogo2.jpeg" alt="CONALEP Nuevo León Logo" id="logo" />
            </LogoContainer>
        </HeaderWrapper>
    )
}
