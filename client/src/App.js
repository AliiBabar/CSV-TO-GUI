// src/App.js
import React, { useState } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';
import { createTheme } from '@mui/material/styles';
import { themeSettings } from './theme';

const App = () => {
    const [mode, setMode] = useState('light'); // Add theme mode state
    const theme = createTheme(themeSettings(mode)); // Generate theme based on mode

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Dashboard setMode={setMode} mode={mode} /> {/* Pass setMode and mode to Dashboard */}
        </ThemeProvider>
    );
};

export default App;