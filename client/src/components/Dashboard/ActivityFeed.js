// src/components/ActivityFeed.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const ActivityFeed = () => {
    const theme = useTheme();

    return (
        <Paper
            elevation={4}
            sx={{
                padding: 1,
                borderRadius: 2,
                minHeight: '100%',
                backgroundColor: theme.palette.background.paper,
                color: theme.palette.text.primary,
            }}
        >
            <Typography variant="h6" gutterBottom sx={{ fontWeight: 'bold' }}>
                Announcements
            </Typography>
            <List>
                <ListItem>
                    <ListItemText primary="New features coming soon!" />
                </ListItem>
                {/* <ListItem>
                    <ListItemText primary="System maintenance on Saturday." />
                </ListItem> */}
            </List>
        </Paper>
    );
};

export default ActivityFeed;
