// src/components/TopMetric.js
import React from 'react';
import { Paper, Typography, List, ListItem, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const TopMetric = () => {
    const theme = useTheme();

    return (
        <Paper
            elevation={4}
            sx={{
                padding: 3,
                borderRadius: 2,
                minHeight: '100%',
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
        >
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Overview Metrics
            </Typography>
            <List>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Total Orders</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>1234</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Total Cost</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>$500,000</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Average Order</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>$400</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>New Customers</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>450</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Return Customers</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>789</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Revenue Growth</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>15%</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
                <ListItem>
                    <Grid container>
                        <Grid item xs={6}>
                            <Typography>Last Updated</Typography>
                        </Grid>
                        <Grid item xs={6} sx={{ textAlign: 'right' }}>
                            <Typography sx={{ color: 'green', fontWeight: 'bold' }}>10/26/2024</Typography>
                        </Grid>
                    </Grid>
                </ListItem>
            </List>
        </Paper>
    );
};

export default TopMetric;