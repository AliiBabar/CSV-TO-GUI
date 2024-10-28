import React from 'react';
import Plot from 'react-plotly.js';
import { Box, Typography } from '@mui/material';

const DummyMap = () => {
  const data = [
    {
      z: [
        [10, 20, 30, 40, 50],
        [15, 25, 35, 45, 55],
        [20, 30, 40, 50, 60],
        [25, 35, 45, 55, 65],
        [30, 40, 50, 60, 70],
      ],
      x: ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'],
      y: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
      type: 'heatmap',
      colorscale: 'Blues',
    },
  ];

  return (
    <Box sx={{ padding: 2, marginTop: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Regional Sales Heatmap
      </Typography>
      <Plot
        data={data}
        layout={{
          title: '',
          autosize: true,
          width: 500,
          height: 300,
          margin: { t: 20, b: 20, l: 50, r: 20 },
        }}
      />
    </Box>
  );
};

export default DummyMap;
