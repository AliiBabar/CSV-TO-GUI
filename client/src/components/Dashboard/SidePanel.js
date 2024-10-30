// src/components/SidePanel.js
import React, { useState } from "react";
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
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled, useTheme } from "@mui/system";

const SidePanel = ({ mode, setMode }) => {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const theme = useTheme();

  // Handlers for Insights hover
  const handleInsightsMouseEnter = () => {
    setInsightsOpen(true);
  };

  const handleInsightsMouseLeave = () => {
    setInsightsOpen(false);
  };

  // Handlers for Settings hover
  const handleSettingsMouseEnter = () => {
    setSettingsOpen(true);
  };

  const handleSettingsMouseLeave = () => {
    setSettingsOpen(false);
  };

  // Styled ListItem with hover effect
  const StyledListItem = styled(ListItem)(({ theme }) => ({
    padding: "8px 16px",
    borderRadius: "100px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  }));

  // Styled MenuItem for Light and Dark Mode options with hover effect
  const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    borderRadius: "100px",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    },
  }));

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        "& .MuiDrawer-paper": {
          width: 240,
          boxSizing: "border-box",
          backgroundColor: theme.palette.background.paper,
          color: theme.palette.text.primary,
          paddingTop: "20px",
        },
      }}
    >
      <Typography variant="h6" sx={{ padding: 2, fontWeight: "bold" }}>
        Business Analytics
      </Typography>
      <List>
        <StyledListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Home" />
        </StyledListItem>

        <StyledListItem
          button
          onMouseEnter={handleInsightsMouseEnter}
          onMouseLeave={handleInsightsMouseLeave}
        >
          <ListItemIcon>
            <InsightsIcon />
          </ListItemIcon>
          <ListItemText primary="Insights" />
        </StyledListItem>
        <Collapse
          in={insightsOpen}
          timeout="auto"
          unmountOnExit
          onMouseEnter={handleInsightsMouseEnter}
          onMouseLeave={handleInsightsMouseLeave}
        >
          <List component="div" disablePadding>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Sales and Profit" />
            </StyledListItem>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Segmentation" />
            </StyledListItem>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Geography" />
            </StyledListItem>
            <StyledListItem button sx={{ pl: 4 }}>
              <ListItemText primary="Top Products" />
            </StyledListItem>
          </List>
        </Collapse>

        <StyledListItem button>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="Accounts" />
        </StyledListItem>

        <StyledListItem
          button
          onMouseEnter={handleSettingsMouseEnter}
          onMouseLeave={handleSettingsMouseLeave}
        >
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </StyledListItem>
        <Collapse
          in={settingsOpen}
          timeout="auto"
          unmountOnExit
          onMouseEnter={handleSettingsMouseEnter}
          onMouseLeave={handleSettingsMouseLeave}
        >
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
                  {/* Only apply hover effect on the actual options */}
                  <StyledMenuItem value="light">Light Mode</StyledMenuItem>
                  <StyledMenuItem value="dark">Dark Mode</StyledMenuItem>
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
