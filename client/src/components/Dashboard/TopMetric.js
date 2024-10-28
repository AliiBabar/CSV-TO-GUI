import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const TopMetric = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#2C2C2E', borderRadius: '12px', width: '90%', color: '#FFF', minHeight: '250px' }}>
      <Typography variant="h6" sx={{ marginBottom: 2 }}>
        Overview Metrics
      </Typography>
      <Grid container spacing={2} direction="column">
        <Grid item container>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>Total Value:</Typography>
          <Typography variant="h6" sx={{ color: 'green' }}>$100,000</Typography>
        </Grid>
        <Grid item container>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>Total Cost:</Typography>
          <Typography variant="h6" sx={{ color: 'green' }}>$50,000</Typography>
        </Grid>
        <Grid item container>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>Average Order Value:</Typography>
          <Typography variant="h6" sx={{ color: 'green' }}>$500</Typography>
        </Grid>
        <Grid item container>
          <Typography variant="subtitle1" sx={{ flexGrow: 1 }}>Last Updated:</Typography>
          <Typography variant="h6" sx={{ color: 'green' }}>Oct 28, 2024</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopMetric;
