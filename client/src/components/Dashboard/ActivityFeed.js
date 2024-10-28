import React from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

const ActivityFeed = () => {
  const activities = [
    { id: 1, text: 'New features coming soon!' },
    { id: 2, text: 'System maintenance on Saturday' },
  ];

  return (
    <Box sx={{ padding: 2, backgroundColor: '#F7F8FC', borderRadius: '8px', marginTop: 2, maxHeight: '150px' }}>
      <Typography variant="h6" sx={{ marginBottom: 1 }}>
        Announcments
      </Typography>
      <List>
        {activities.map((activity) => (
          <ListItem key={activity.id}>
            <ListItemText primary={activity.text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default ActivityFeed;
