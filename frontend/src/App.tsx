import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import SideBar from "./SideBar";
import OptionsBar from "./OptionsBar";
import TodoList from "./TodoList";
import { lightModeTheme } from "./theme";
import { UserTodoList } from "./TodoList/types";
import CreateList from "./CreateList";

const App = () => {
  const [isSidebarOpen, setIsSideBarOpen] = useState(false);
  const [todoLists, setTodoLists] = useState<UserTodoList[]>(() => {
    try {
      return JSON.parse(
        localStorage.getItem("todoLists") || "[]"
      ) as UserTodoList[];
    } catch {
      return [];
    }
  });

  const [selectedTodo, setSelectedTodo] = useState<UserTodoList>(() => {
    try {
      const savedLists = JSON.parse(
        localStorage.getItem("todoLists") || "[]"
      ) as UserTodoList[];
      return (
        savedLists[0] || { id: "", name: "", desc: "", created: "", todos: [] }
      );
    } catch {
      return { id: "", name: "", desc: "", created: "", todos: [] };
    }
  });

  // Save todoLists to localStorage whenever they change
  useEffect(() => {
    saveLists();
  }, [todoLists]);

  const saveLists = () => {
    localStorage.setItem("todoLists", JSON.stringify(todoLists));
  };

  const handleCreateList = (newList: UserTodoList) => {
    setTodoLists([...todoLists, newList]);
    setSelectedTodo(newList);
  };

  return (
    <ThemeProvider theme={lightModeTheme}>
      <CssBaseline />
      <Box sx={{ display: "flex", height: "100vh" }}>
        <Box
          sx={{
            width: isSidebarOpen ? 250 : 0,
            transition: "width 0.3s",
            overflow: "hidden",
          }}
        >
          <SideBar
            isSidebarOpen={isSidebarOpen}
            userTodoLists={todoLists}
            setSelectedTodo={setSelectedTodo}
          />
        </Box>

        <Box
          component="main"
          sx={{
            flexGrow: 1,
            transition: "margin 0.3s",
            padding: 2,
          }}
        >
          <div>
            <OptionsBar
              isSidebarOpen={isSidebarOpen}
              setIsSideBarOpen={setIsSideBarOpen}
            />
            {selectedTodo.id !== "" ? (
              <TodoList selectedTodo={selectedTodo} saveLists={saveLists} />
            ) : (
              <CreateList onCreate={handleCreateList} />
            )}
          </div>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default App;
