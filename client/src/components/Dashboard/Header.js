import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <AppBar position="static" sx={{ width: '100%', backgroundColor: '#2C2C2E', borderRadius: '12px' }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{ backgroundColor: 'white', padding: '2px 8px', borderRadius: '4px' }}
          />
          <IconButton type="submit" aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
