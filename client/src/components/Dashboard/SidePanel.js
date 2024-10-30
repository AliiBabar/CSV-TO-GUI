// src/components/SidePanel.js
import React, { useState } from 'react';
import {
    Drawer,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Typography,
    Collapse,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import InsightsIcon from '@mui/icons-material/Insights';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { styled, useTheme } from '@mui/system'; // Import useTheme here

const SidePanel = ({ mode, setMode }) => {
    const [insightsOpen, setInsightsOpen] = useState(false);
    const [settingsOpen, setSettingsOpen] = useState(false);
    const theme = useTheme(); // Use theme here

    const handleInsightsHover = (isHovered) => {
        setInsightsOpen(isHovered);
    };

    const StyledListItem = styled(ListItem)({
        '&:hover': {
            backgroundColor: theme.palette.action.hover,
            borderRadius: '8px',
        },
        transition: 'background-color 0.3s ease',
    });

    return (
        <Drawer
            variant="permanent"
            sx={{
                width: 240,
                '& .MuiDrawer-paper': {
                    width: 240,
                    boxSizing: 'border-box',
                    backgroundColor: theme.palette.background.paper,
                    color: theme.palette.text.primary,
                    paddingTop: '20px',
                },
            }}
        >
            <Typography variant="h6" sx={{ padding: 2, fontWeight: 'bold' }}>
                Business Analytics
            </Typography>
            <List>
                <StyledListItem button>
                    <ListItemIcon><HomeIcon /></ListItemIcon>
                    <ListItemText primary="Home" />
                </StyledListItem>

                <StyledListItem
                    button
                    onMouseEnter={() => handleInsightsHover(true)}
                    onMouseLeave={() => handleInsightsHover(false)}
                >
                    <ListItemIcon><InsightsIcon /></ListItemIcon>
                    <ListItemText primary="Insights" />
                </StyledListItem>
                <Collapse in={insightsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <StyledListItem button sx={{ pl: 4 }}>
                            <ListItemText primary="Product Sales and Profit" />
                        </StyledListItem>
                        <StyledListItem button sx={{ pl: 4 }}>
                            <ListItemText primary="Customer Segmentation" />
                        </StyledListItem>
                        <StyledListItem button sx={{ pl: 4 }}>
                            <ListItemText primary="Geographic Distribution" />
                        </StyledListItem>
                        <StyledListItem button sx={{ pl: 4 }}>
                            <ListItemText primary="Top Performing Products" />
                        </StyledListItem>
                    </List>
                </Collapse>

                <StyledListItem button>
                    <ListItemIcon><AccountCircleIcon /></ListItemIcon>
                    <ListItemText primary="Accounts" />
                </StyledListItem>

                {/* Settings with Theme Toggle Dropdown */}
                <StyledListItem
                    button
                    onClick={() => setSettingsOpen(!settingsOpen)}
                >
                    <ListItemIcon><SettingsIcon /></ListItemIcon>
                    <ListItemText primary="Settings" />
                </StyledListItem>
                <Collapse in={settingsOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem>
                            <FormControl fullWidth>
                                <InputLabel id="mode-select-label">Theme Mode</InputLabel>
                                <Select
                                    labelId="mode-select-label"
                                    id="mode-select"
                                    value={mode}
                                    label="Theme Mode"
                                    onChange={(e) => setMode(e.target.value)}
                                    sx={{
                                        color: theme.palette.text.primary,
                                        backgroundColor: theme.palette.background.default,
                                    }}
                                >
                                    <MenuItem value='light'>Light Mode</MenuItem>
                                    <MenuItem value='dark'>Dark Mode</MenuItem>
                                </Select>
                            </FormControl>
                        </ListItem>
                    </List>
                </Collapse>
            </List>
        </Drawer>
    );
};

export default SidePanel;
