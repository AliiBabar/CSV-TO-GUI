import React from 'react';
import Plot from 'react-plotly.js';
import { Box, Typography } from '@mui/material';

const DummyMap = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#2C2C2E', borderRadius: '12px', color: '#FFF', width: '100%', minHeight: '250px' }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Regional Sales Heatmap
      </Typography>
      <Plot
        data={[
          {
            z: [[10, 20, 30, 40, 50], [15, 25, 35, 45, 55], [20, 30, 40, 50, 60], [25, 35, 45, 55, 65], [30, 40, 50, 60, 70]],
            x: ['Northeast', 'Southeast', 'Midwest', 'Southwest', 'West'],
            y: ['Q1', 'Q2', 'Q3', 'Q4', 'Q5'],
            type: 'heatmap',
            colorscale: 'Blues',
          },
        ]}
        layout={{ autosize: true, margin: { t: 20, b: 20, l: 50, r: 20 } }}
        style={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default DummyMap;
