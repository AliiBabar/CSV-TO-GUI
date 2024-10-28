import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

const TopMetric = () => {
  return (
    <Box sx={{ padding: 1, backgroundColor: '#F7F8FC', borderRadius: '8px', width: '50%', marginTop: 2 }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Overview Metrics
      </Typography>
      <Grid container spacing={1} direction="column">
        <Grid item>
          <Typography variant="subtitle1" display="inline">Total Value: </Typography>
          <Typography variant="h6" display="inline">$100,000</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" display="inline">Total Cost: </Typography>
          <Typography variant="h6" display="inline">$50,000</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" display="inline">Average Order Value: </Typography>
          <Typography variant="h6" display="inline">$500</Typography>
        </Grid>
        <Grid item>
          <Typography variant="subtitle1" display="inline">Last Updated: </Typography>
          <Typography variant="h6" display="inline">Oct 28, 2024</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default TopMetric;
