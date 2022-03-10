import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { purple } from '@mui/material/colors';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router,Routes, Route, useNavigate } from 'react-router-dom';
import { Navigate } from "react-router-dom";


const pages = ['Acceuil', 'Formations', 'Articles'];

const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const ResponsiveAppBar = () => {
  const navigate=useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const navLight = createTheme({
    palette: {
      mode: 'light',
      primary: {
        main: '#ba68c8',
      },
    },
  });
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const goHome = () => {
    navigate("/acceuil")
  };

  const goFormations = () => {
    navigate("/formations")
  };

  const goArticles = () => {
    navigate("/articles")
  };


  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <ThemeProvider theme={navLight}>
        <AppBar position="static" >
        <Container maxWidth="xl">
            <Toolbar disableGutters>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
                <Avatar alt="RF Therapy" src="./medias/logo.jpg"  sx={{ width: 56, height: 56 }}/>
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                <MenuIcon />
                </IconButton>
                <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                }}
                keepMounted
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                }}
                open={Boolean(anchorElNav)}
                onClose={goHome}
                sx={{
                    display: { xs: 'block', md: 'none' },
                }}
                >
                  <MenuItem key={pages[0]} onClick={goHome}>
                    <Typography textAlign="center">{pages[0]}</Typography>
                  </MenuItem>
                  <MenuItem key={pages[1]} onClick={goFormations}>
                    <Typography textAlign="center">{pages[1]}</Typography>
                  </MenuItem>
                  <MenuItem key={pages[2]} onClick={goArticles}>
                    <Typography textAlign="center">{pages[2]}</Typography>
                  </MenuItem>
                </Menu>
            </Box>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
                <Avatar alt="RF Therapy" src="./medias/logo.jpg"  sx={{ width: 56, height: 56 }}/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                <Button
                    key={pages[0]}
                    onClick={goHome}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {pages[0]}
                </Button>
                <Button
                    key={pages[1]}
                    onClick={goFormations}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {pages[1]}
                </Button>
                <Button
                    key={pages[2]}
                    onClick={goArticles}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {pages[2]}
                </Button>
            </Box>
            </Toolbar>
        </Container>
        </AppBar>
    </ThemeProvider>
    
  );
};
export default ResponsiveAppBar;
