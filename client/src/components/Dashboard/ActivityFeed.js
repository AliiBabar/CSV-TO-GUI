import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ActivityFeed = () => {
  return (
    <Box sx={{ padding: 2, backgroundColor: '#2C2C2C', borderRadius: '12px', marginTop: 2, color: '#FFF' }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Activity Feed
      </Typography>
      <List>
        <ListItem>
          <ListItemText primary="New features coming soon!" />
        </ListItem>
        <ListItem>
          <ListItemText primary="System maintenance on Saturday" />
        </ListItem>
      </List>
    </Box>
  );
};

export default ActivityFeed;
