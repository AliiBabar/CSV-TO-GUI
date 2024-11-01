// src/components/DummyMap.js
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const DummyMap = () => {
    // Define years and cities
    const xLabels = [
        'Karachi', 'Lahore', 'Islamabad', 'Quetta', 'Peshawar', 'Multan', 'Faisalabad',
        'Rawalpindi', 'Sialkot'
    ];
    const yLabels = [
        '2017', '2018', '2019', '2020', '2021', '2022', '2023', '2024'
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
        <Paper
            elevation={4}
            sx={{
                padding: 3,
                borderRadius: 2,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: (theme) => theme.palette.background.paper,
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                Regional Sales Heatmap
            </Typography>

            {/* Heatmap and Key Container */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    width: '100%',
                    overflowX: 'auto', // Allow horizontal scroll if necessary
                    justifyContent: 'center',
                }}
            >
                {/* Heatmap Grid */}
                <Box
                    sx={{
                        display: 'grid',
                        gridTemplateColumns: `repeat(${xLabels.length + 1}, 1fr)`, // Extra column for yLabels
                        gridAutoRows: 'minmax(30px, auto)', // Adjust cell height responsively
                        gap: 1,
                        flexGrow: 1,
                    }}
                >
                    {/* Top-left empty corner */}
                    <Box sx={{ gridColumn: '1', gridRow: '1' }}></Box>

                    {/* X-axis Labels */}
                    {xLabels.map((label, index) => (
                        <Box
                            key={`xLabel-${index}`}
                            sx={{
                                gridColumn: index + 2,
                                gridRow: '1',
                                textAlign: 'center',
                                fontSize: '0.8em',
                                fontWeight: 'bold',
                            }}
                        >
                            {label}
                        </Box>
                    ))}

                    {/* Y-axis Labels and Heatmap Cells */}
                    {yLabels.map((label, rowIndex) => (
                        <React.Fragment key={`row-${rowIndex}`}>
                            {/* Y-axis Label */}
                            <Box
                                sx={{
                                    gridColumn: '1',
                                    gridRow: rowIndex + 2,
                                    textAlign: 'right',
                                    paddingRight: 1,
                                    fontSize: '0.8em',
                                    fontWeight: 'bold',
                                }}
                            >
                                {label}
                            </Box>
                            {/* Heatmap Cells */}
                            {xLabels.map((_, colIndex) => {
                                const value = data[rowIndex][colIndex];
                                return (
                                    <Box
                                        key={`cell-${rowIndex}-${colIndex}`}
                                        sx={{
                                            gridColumn: colIndex + 2,
                                            gridRow: rowIndex + 2,
                                            backgroundColor: `rgba(30, 139, 195, ${value / 100})`,
                                            border: '1px solid #ffffff',
                                            width: '100%',
                                            height: '100%',
                                            minWidth: '30px',
                                            minHeight: '30px',
                                        }}
                                    ></Box>
                                );
                            })}
                        </React.Fragment>
                    ))}
                </Box>

                {/* Color Key */}
                <Box
                    sx={{
                        marginLeft: 2, // Space between heatmap and key
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        width: '20px',
                        height: '150px',
                        background: 'linear-gradient(to top, #1a237e, #3949ab, #5c6bc0, #c5cae9)',
                        borderRadius: '4px',
                    }}
                >
                    <Box sx={{ textAlign: 'center', fontSize: '10px', color: '#000', marginTop: '5px' }}>
                        <div>100</div>
                        <div>75</div>
                        <div>50</div>
                        <div>25</div>
                        <div>0</div>
                    </Box>
                </Box>
            </Box>
        </Paper>
    );
};

export default DummyMap;