// src/components/DummyMap.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const DummyMap = () => {
    const theme = useTheme();

    return (
        <Paper elevation={4} sx={{ padding: 3, borderRadius: 2, minHeight: '100%' }}>
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Regional Sales Heatmap
            </Typography>
            <Box
                sx={{
                    height: 300,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme.palette.background.paper,
                    borderRadius: 1,
                    color: theme.palette.text.secondary,
                    fontSize: 18,
                }}
            >
                [Heatmap Placeholder]
            </Box>
        </Paper>
    );
};

export default DummyMap;
