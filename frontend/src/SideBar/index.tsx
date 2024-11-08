import React from "react";
import {
  Drawer,
  Box,
  List,
  ListItem,
  ListItemText,
  IconButton,
  ListItemButton,
  ListItemIcon,
  Divider,
  Button,
  Typography,
} from "@mui/material";

import { UserTodoList } from "../TodoList/types";

const SideBar = ({
  isSidebarOpen,
  userTodoLists,
  setSelectedTodo,
}: {
  isSidebarOpen: boolean;
  userTodoLists: UserTodoList[];
  setSelectedTodo: React.Dispatch<React.SetStateAction<UserTodoList>>;
}) => {
  const renderTodoLists = () => {
    // this mutates the code, replace in future
    return userTodoLists.map((todoList) => (
      <ListItem key={todoList.id}>
        <ListItemButton onClick={() => setSelectedTodo(todoList)}>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={todoList.name} />
        </ListItemButton>
      </ListItem>
    ));
  };

  return (
    <Drawer
      variant="persistent"
      anchor="left"
      open={isSidebarOpen}
      sx={{
        "& .MuiDrawer-paper": {
          width: 250,
          overflowX: "hidden",
        },
      }}
    >
      <Box
        sx={{
          width: 250,
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Button
          onClick={() =>
            setSelectedTodo({
              id: "",
              name: "",
              desc: "",
              created: "",
              todos: [],
            })
          }
          sx={{ textTransform: "none" }}
        >
          <Typography> Create List </Typography>
        </Button>
        <Divider />
        <List>{renderTodoLists()}</List>
      </Box>
    </Drawer>
  );
};

export default SideBar;
