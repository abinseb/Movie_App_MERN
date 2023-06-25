import React from 'react';
import { AppBar, Button, Toolbar, Typography, useMediaQuery, useTheme } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <AppBar
      style={{ backgroundColor: '#778899', height: isMobile ? '100px' : '150px' }}
      position="static"
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: 'space-between', // Align items to the right
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img
            style={{ height: '100px', width: '100px', paddingTop: '20px' }}
            src={require('./images/movielogo.png')}
            alt="logo"
          />

          <Typography
            variant={isMobile ? 'h6' : 'h5'}
            style={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
              paddingLeft: isMobile ? '5px' : '10px',
            }}
          >
            Movie Management App
          </Typography>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Button>
            <Link style={{textDecoration:'none'}} to={'/'} >
              <HomeIcon style={{ color: '#000000', height: '70px', width: '60px' }} />
            </Link>
          </Button>
          <Button
            color="inherit"
            style={{ color: '#000000', marginRight: isMobile ? '5px' : '10px', marginLeft: isMobile ? '5px' : '20px' }}
          >
            <Link style={{textDecoration:'none'}} to={'/addmovie'}>
             Add Movie
            </Link>
          </Button>
          <Button
            color="inherit"
            style={{ color: '#000000', marginRight: isMobile ? '5px' : '10px', marginLeft: isMobile ? '5px' : '20px' }}
          >
            <Link style={{textDecoration:'none'}} to={'/aboutus'} >About Us</Link>
            
          </Button>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
