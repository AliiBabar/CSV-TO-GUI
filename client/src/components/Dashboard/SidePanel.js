// src/components/SidePanel.js
import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
  IconButton,
  Collapse,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HomeIcon from "@mui/icons-material/Home";
import InsightsIcon from "@mui/icons-material/Insights";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SettingsIcon from "@mui/icons-material/Settings";
import { styled } from "@mui/system";

const StyledListItem = styled(ListItem)(({ theme }) => ({
  padding: "8px 16px",
  borderRadius: "8px",
  transition: "all 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const SidePanel = ({ mode, setMode }) => {
  const [insightsOpen, setInsightsOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // 768px breakpoint

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const handleInsightsMouseEnter = () => {
    setInsightsOpen(true);
  };

  const handleInsightsMouseLeave = () => {
    setInsightsOpen(false);
  };

  const handleSettingsMouseEnter = () => {
    setSettingsOpen(true);
  };

  const handleSettingsMouseLeave = () => {
    setSettingsOpen(false);
  };

  return (
    <>
      {isMobile ? (
        // Hamburger menu icon for mobile view
        <IconButton
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={handleDrawerOpen}
          sx={{
            position: "absolute",
            left: 16,
            top: "50%",
            transform: "translateY(-50%)",
            color: theme.palette.mode === "dark" ? theme.palette.common.white : theme.palette.text.primary, // Dynamic color based on theme
          }}
        >
          <MenuIcon />
        </IconButton>
      ) : (
        // Full side panel with original styling for larger screens
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

            {/* Re-added Accounts label */}
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
                      <MenuItem value="light">Light Mode</MenuItem>
                      <MenuItem value="dark">Dark Mode</MenuItem>
                    </Select>
                  </FormControl>
                </ListItem>
              </List>
            </Collapse>
          </List>
        </Drawer>
      )}

      {/* Drawer overlay for mobile view */}
      <Drawer anchor="left" open={drawerOpen} onClose={handleDrawerClose}>
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

          {/* Insights with Hover to Open Collapse */}
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

          {/* Accounts label added to the mobile view */}
          <StyledListItem button>
            <ListItemIcon>
              <AccountCircleIcon />
            </ListItemIcon>
            <ListItemText primary="Accounts" />
          </StyledListItem>

          {/* Settings with Hover to Open Collapse */}
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
                    <MenuItem value="light">Light Mode</MenuItem>
                    <MenuItem value="dark">Dark Mode</MenuItem>
                  </Select>
                </FormControl>
              </ListItem>
            </List>
          </Collapse>
        </List>
      </Drawer>
    </>
  );
};

export default SidePanel;
