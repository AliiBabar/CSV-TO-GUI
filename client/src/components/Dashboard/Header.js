// src/components/Header.js
import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTheme } from '@mui/material/styles';

const Header = () => {
    const theme = useTheme();

    return (
        <AppBar position="static" sx={{ 
            width: '100%', 
            backgroundColor: theme.palette.primary.main, 
            borderRadius: '8px'  // Apply 8px borderRadius here
        }}>
            <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                    Dashboard
                </Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        sx={{
                            backgroundColor: theme.palette.background.paper,
                            color: theme.palette.text.primary,
                            padding: '2px 8px',
                            borderRadius: '4px',
                        }}
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
