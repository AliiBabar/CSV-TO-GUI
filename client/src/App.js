// src/App.js
import React from 'react';
import { CssBaseline } from '@mui/material';
import Dashboard from './components/Dashboard/Dashboard';

const App = () => {
    return (
        <>
            <CssBaseline /> {/* Ensures consistent baseline styling */}
            <Dashboard /> {/* Renders the main Dashboard component */}
        </>
    );
};

export default App;