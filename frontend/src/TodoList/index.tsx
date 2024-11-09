import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";
import { useTheme } from "@mui/material/styles";
import {
  Container,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  IconButton,
  Divider,
  Typography,
} from "@mui/material";

import TodoListOptionsBar from "./TodoListOptionsBar";
import InfoBlock from "./InfoBlock";
import { Task, UserTodoList } from "./types";

const TodoList = ({
  selectedTodo,
  saveLists,
}: {
  selectedTodo: UserTodoList;
  saveLists: () => void;
}) => {
  const theme = useTheme();
  const [refresh, setRefresh] = useState<number>(0);

  const addTask = (title: string, desc: string) => {
    const newTask: Task = {
      id: uuidv4(),
      title: title,
      desc: desc,
      completed: false,
    };
    selectedTodo.todos.push(newTask);
    setRefresh((prev) => prev + 1); // Trigger re-render
    saveLists();
  };

  const renderListItems = () => {
    return selectedTodo.todos
      .filter((task) => !task.completed)
      .map((task) => (
        <ListItem key={task.id}>
          <IconButton
            edge="start"
            aria-label="check"
            onClick={() => {
              const taskToUpdate = selectedTodo.todos.find(
                (t) => t.id === task.id
              );
              if (taskToUpdate) {
                taskToUpdate.completed = true;
                setRefresh((prev) => prev + 1); // Trigger re-render
                saveLists();
              }
            }}
          >
            <CheckIcon
              sx={{
                color: "default",
                "&:hover": {
                  color: theme.palette.success.main,
                },
              }}      
            />      
          </IconButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={task.title} secondary={task.desc} />

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              selectedTodo.todos = selectedTodo.todos.filter(
                (t) => t.id !== task.id
              );
              setRefresh((prev) => prev + 1); // Trigger re-render
              saveLists();
            }}
          >
            <DeleteIcon
              sx={{
                color: "default",
                "&:hover": {
                  color: theme.palette.error.main,
                },
              }}
            />
          </IconButton>
        </ListItem>
      ));
  };

  const renderCompletedItems = () => {
    return selectedTodo.todos
      .filter((task) => task.completed)
      .map((task) => (
        <ListItem
          key={task.id}
          sx={{ backgroundColor: theme.palette.success.light }}
        >
          <IconButton
            edge="start"
            aria-label="uncheck"
            onClick={() => {
              const taskToUpdate = selectedTodo.todos.find(
                (t) => t.id === task.id
              );
              if (taskToUpdate) {
                taskToUpdate.completed = false;
                setRefresh((prev) => prev + 1); // Trigger re-render
                saveLists();
              }
            }}
          >
            <CheckIcon
              sx={{
                color: "default",
                "&:hover": {
                  color: theme.palette.success.main,
                },
              }}
            />
          </IconButton>
          <ListItemIcon></ListItemIcon>
          <ListItemText primary={task.title} secondary={task.desc} />

          <IconButton
            edge="end"
            aria-label="delete"
            onClick={() => {
              selectedTodo.todos = selectedTodo.todos.filter(
                (t) => t.id !== task.id
              );
              setRefresh((prev) => prev + 1); // Trigger re-render
              saveLists();
            }}
          >
            <DeleteIcon
              sx={{
                color: "default",
                "&:hover": {
                  color: theme.palette.error.main,
                },
              }}
            />
          </IconButton>
        </ListItem>
      ));
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          padding: 2,
          margin: 2,
          width: "100%",
        }}
      >
        <InfoBlock
          title={selectedTodo.name}
          date={selectedTodo.created}
          desc={selectedTodo.desc}
        />
        <TodoListOptionsBar newTask={addTask} />
      </Paper>
      <Container style={{ width: "75%" }}>
        <List>{renderListItems()}</List>

        {selectedTodo.todos.some((task) => task.completed) && (
          <>
            <Divider />
            <Typography sx={{ margin: "4px" }} variant="h5">
              Completed
            </Typography>
            <List>{renderCompletedItems()}</List>
          </>
        )}
      </Container>
    </Container>
  );
};

export default TodoList;
