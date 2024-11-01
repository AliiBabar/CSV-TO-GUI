// src/components/Header.js
import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

const SearchContainer = styled(Box)(({ theme, isExpanded }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.background.paper,
  borderRadius: '4px',
  transition: 'width 0.3s ease-in-out',
  width: isExpanded ? '200px' : '0px', // Toggle between 0px (hidden) and 200px (visible)
  overflow: 'hidden', // Hide input content when collapsed
  paddingLeft: isExpanded ? '8px' : '0px', // Add padding when expanded
}));

const Header = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const theme = useTheme();

  const handleSearchToggle = () => {
    setSearchExpanded((prev) => !prev);
  };

  return (
    <AppBar position="static" sx={{ 
      width: '100%', 
      backgroundColor: theme.palette.primary.main, 
      borderRadius: '8px',
    }}>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Dashboard
        </Typography>
        
        {/* Search Icon and Expanding Search Bar */}
        <SearchContainer isExpanded={searchExpanded} sx={{ marginRight: searchExpanded ? '8px' : '0px' }}>
          <InputBase
            placeholder="Search…"
            inputProps={{ 'aria-label': 'search' }}
            sx={{
              color: theme.palette.text.primary,
              transition: 'opacity 0.3s ease-in-out',
              opacity: searchExpanded ? 1 : 0, // Fade input in/out
              width: '100%',
            }}
          />
        </SearchContainer>
        
        <IconButton
          onClick={handleSearchToggle}
          color="inherit"
          aria-label="toggle search"
          sx={{
            color: theme.palette.common.white, // Adjust color based on theme
            transition: 'transform 0.2s',
            transform: searchExpanded ? 'rotate(90deg)' : 'rotate(0deg)', // Optional rotation effect
          }}
        >
          <SearchIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
