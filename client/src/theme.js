// src/theme.js
import { createTheme } from '@mui/material/styles';

export const colorTokens = {
  grey: {
    0: "#FFFFFF",
    10: "#F6F6F6",
    50: "#F0F0F0",
    100: "#E0E0E0",
    200: "#C2C2C2",
    300: "#A3A3A3",
    400: "#858585",
    500: "#666666",
    600: "#4D4D4D",
    700: "#2C2C2C",
    800: "#1A1A1A",
    900: "#0A0A0A",
    1000: "#000000",
  },
  primary: {
    50: "#E6FBFF",
    100: "#CCF7FE",
    200: "#99EEFD",
    300: "#66E6FC",
    400: "#33DDFB",
    500: "#243B55",
    600: "#00A0BC",
    700: "#006B7D",
    800: "#00353F",
    900: "#001519",
  }
};

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              main: colorTokens.primary[500],
            },
            background: {
              default: colorTokens.grey[1000], // Full black background for dark mode
              paper: colorTokens.grey[700],    // Dark gray for container backgrounds
            },
            text: {
              primary: colorTokens.grey[50],
              secondary: colorTokens.grey[200],
            },
          }
        : {
            primary: {
              main: colorTokens.primary[500],
            },
            background: {
              default: colorTokens.grey[10],
              paper: colorTokens.grey[100],
            },
            text: {
              primary: colorTokens.grey[900],
              secondary: colorTokens.grey[700],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 40,
      },
      h2: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 32,
      },
      h3: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 24,
      },
      h4: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 20,
      },
      h5: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 16,
      },
      h6: {
        fontFamily: ["Rubik", "sans-serif"].join(","),
        fontSize: 14,
      },
    },
  };
};
