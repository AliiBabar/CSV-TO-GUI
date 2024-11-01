// src/components/ActivityFeed.js
import React from 'react';
import { Paper, Typography, List, ListItem, ListItemText, keyframes } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { styled } from '@mui/system';

// Define keyframes using MUI's keyframes utility
const blinker = keyframes`
  50% {
    opacity: 0;
  }
`;

const BlinkingText = styled('span')(({ theme }) => ({
    color: 'red',
    fontWeight: 'bold',
    animation: `${blinker} 3s linear infinite`,
}));

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
            <Typography variant="h1" gutterBottom sx={{ fontWeight: 'bold' }}>
                Announcements
            </Typography>
            <List>
                <ListItem>
                    <ListItemText
                        primary={
                            <BlinkingText>New features coming soon!</BlinkingText>
                        }
                    />
                </ListItem>
            </List>
        </Paper>
    );
};

export default ActivityFeed;