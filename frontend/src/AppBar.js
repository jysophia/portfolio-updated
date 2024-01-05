import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import './App.css';

const pages = ['Resume', 'Projects', 'Past Life', 'Contact'];
const font = "'Poppins', sans-serif";

function ResponsiveAppBar() {
    const [resumePage, setResumePage] = React.useState(false);
    const [projectsPage, setProjectsPage] = React.useState(false);
    const [pastLifePage, setPastLifePage] = React.useState(false);
    const [contactPage, setContactPage] = React.useState(false);
    const [landingPage, setLandingPage] = React.useState(null);

    const handleGoToPage = (event) => {
        if (event.currentTarget === 'Resume') {
            setResumePage(true);
        } else if (event.currentTarget === 'Projects') {
            setProjectsPage(true);
        } else if (event.currentTarget === 'Past Life') {
            setPastLifePage(true);
        } else if (event.currentTarget === 'Contact') {
            setContactPage(true);
        }
    }
    const handleLandingPage = (event) => {
        setLandingPage(event.currentTarget);
    }

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Button variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: font,
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                            onClick={handleLandingPage}>
                        Sophia Kim
                    </Button>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {pages.map((page) => (
                            <Button
                                key={page}
                                onClick={handleGoToPage}
                                sx={{ my: 2, color: 'white', display: 'block', fontFamily: font }}
                            >
                                {page}
                            </Button>
                        ))}
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;