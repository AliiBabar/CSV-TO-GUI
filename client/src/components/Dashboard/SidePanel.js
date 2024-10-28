import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Typography, Collapse } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { useState } from 'react';

const SidePanel = () => {
  const [insightsOpen, setInsightsOpen] = useState(false);

  const handleInsightsClick = () => {
    setInsightsOpen(!insightsOpen);
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
          backgroundColor: '#F7F8FC',
          color: '#333'
        },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2, fontWeight: 'bold' }}>
        Business Analytics
      </Typography>
      <List>
        {/* Home */}
        <ListItem button>
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>

        {/* Insights */}
        <ListItem button onClick={handleInsightsClick}>
          <ListItemIcon><InsightsIcon /></ListItemIcon>
          <ListItemText primary="Insights" />
          {insightsOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={insightsOpen} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Product Sales and Profit" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Customer Segmentation" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Geographic Distribution" />
            </ListItem>
            <ListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Top Performing Products" />
            </ListItem>
          </List>
        </Collapse>

        {/* Accounts */}
        <ListItem button>
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Accounts" />
        </ListItem>

        {/* Settings */}
        <ListItem button>
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default SidePanel;
