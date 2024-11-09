// src/OptionsBar.tsx
import React, { useState } from "react";
import { AppBar, Toolbar, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";

const OptionsBar = ({
  isSidebarOpen,
  setIsSideBarOpen,
}: {
  isSidebarOpen: boolean;
  setIsSideBarOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const theme = useTheme(); // Access the theme

  const toggleSidebar = (open: boolean) => () => {
    setIsSideBarOpen(open);
  };

  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
      }}
    >
      <Toolbar>
        <IconButton
          edge="start"
          color="primary"
          aria-label="menu"
          onClick={toggleSidebar(!isSidebarOpen)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Quick Todo
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default OptionsBar;
