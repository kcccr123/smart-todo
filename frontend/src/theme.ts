import { createTheme } from "@mui/material/styles";

export const lightModeTheme = createTheme({
  palette: {
    mode: "light", // Specify that this is a light mode theme
    primary: {
      main: "#000000", // Black for primary actions
      light: "#555555", // Light gray for hover/active states
      dark: "#333333", // Dark gray for emphasis
      contrastText: "#ffffff", // White text for contrast on primary background
    },
    secondary: {
      main: "#ffffff", // White for secondary actions
      light: "#f0f0f0", // Very light gray for hover/active states
      dark: "#cccccc", // Light gray for emphasis
      contrastText: "#000000", // Black text for contrast on secondary background
    },
    text: {
      primary: "#000000", // Black text for readability
      secondary: "#666666", // Medium gray for secondary text
    },
    background: {
      default: "#ffffff", // White background for the main area
      paper: "#f5f5f5", // Light gray for paper elements
    },
    success: {
      main: "#4caf50", // Green for success
      light: "#80e27e", // Light green for success
      dark: "#087f23", // Dark green for success
      contrastText: "#ffffff", // White text for contrast
    },
    error: {
      main: "#f44336", // Red for error
      light: "#e57373", // Light red for error
      dark: "#c62828", // Dark red for error
      contrastText: "#ffffff", // White text for contrast
    },
    warning: {
      main: "#ff9800", // Orange for warning
      light: "#ffb74d", // Light orange for warning
      dark: "#f57c00", // Dark orange for warning
      contrastText: "#ffffff", // White text for contrast
    },
    info: {
      main: "#000000", // Black for info (can be adjusted based on usage)
      light: "#555555", // Light gray for info
      dark: "#333333", // Dark gray for info
      contrastText: "#ffffff", // White text for contrast
    },
  },
});
