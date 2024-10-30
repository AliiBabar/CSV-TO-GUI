// src/components/DummyMap.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';
import HeatMapGrid from 'react-heatmap-grid';

const DummyMap = () => {
    // Define years and cities
    const xLabels = [
        'Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar', 'Multan', 'Faisalabad',
        'Rawalpindi', 'Sialkot', 'Hyderabad'
    ];
    const yLabels = [
        '2016', '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
    ];

    // Generate dummy data with random intensities
    const data = Array(yLabels.length)
        .fill(0)
        .map(() =>
            Array(xLabels.length)
                .fill(0)
                .map(() => Math.floor(Math.random() * 100))
        );

    return (
        <Paper elevation={4} sx={{ padding: 3, borderRadius: 2, minHeight: '100%', display: 'flex', alignItems: 'center' }}>
            <Box sx={{ flex: 1 }}>
                <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                    Regional Sales Heatmap
                </Typography>
                <div style={{ width: '100%', height: '300px', position: 'relative' }}>
                    <HeatMapGrid
                        xLabels={xLabels}
                        yLabels={yLabels}
                        data={data}
                        cellStyle={(background, value, min, max) => ({
                            background: `rgba(30, 139, 195, ${1 - (max - value) / (max - min)})`,
                            border: '1px solid #ffffff',
                        })}
                        xLabelsStyle={(index) => ({
                            color: '#000',
                            fontSize: '12px',
                            writingMode: 'vertical-rl',
                            textAlign: 'center',
                        })}
                        yLabelsStyle={() => ({
                            color: '#000',
                            fontSize: '12px',
                        })}
                    />
                </div>
            </Box>
            <Box sx={{ marginLeft: 2, height: '300px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                {/* Custom color bar */}
                <Box
                    sx={{
                        width: '20px',
                        height: '100%',
                        background: 'linear-gradient(to top, #1a237e, #3949ab, #5c6bc0, #c5cae9)',
                        borderRadius: '4px',
                        marginBottom: 1,
                    }}
                />
                <Box sx={{ textAlign: 'center', fontSize: '10px' }}>
                    <div>100</div>
                    <div>75</div>
                    <div>50</div>
                    <div>25</div>
                    <div>0</div>
                </Box>
            </Box>
        </Paper>
    );
};

export default DummyMap;
