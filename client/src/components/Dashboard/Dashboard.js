// src/components/Dashboard.js
import React, { useState } from 'react';
import { Grid, Box, Container } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Header from './Header';
import SidePanel from './SidePanel';
import TopMetric from './TopMetric';
import DummyMap from './DummyMap';
import ActivityFeed from './ActivityFeed';
import { themeSettings } from '../../theme';

const Dashboard = () => {
    const [mode, setMode] = useState('light');
    const theme = createTheme(themeSettings(mode));

    return (
        <ThemeProvider theme={theme}>
            <Box sx={{ display: 'flex', overflow: 'hidden', height: '100vh', backgroundColor: theme.palette.background.default }}>
                <SidePanel mode={mode} setMode={setMode} />
                <Box sx={{ flexGrow: 1, padding: 2, overflowY: 'auto' }}>
                    <Header />
                    <Container sx={{ mt: 1.5, mb: 1.5, px: 0 }}>
                        <Grid container spacing={1} sx={{ mt: 1 }}>
                            {/* TopMetric */}
                            <Grid item xs={12} md={4}>
                                <TopMetric />
                            </Grid>

                            {/* DummyMap */}
                            <Grid item xs={12} md={8}>
                                <DummyMap />
                            </Grid>

                            {/* ActivityFeed */}
                            <Grid item xs={12}>
                                <ActivityFeed />
                            </Grid>
                        </Grid>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default Dashboard;
