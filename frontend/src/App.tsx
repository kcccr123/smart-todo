import { useState, useEffect } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import SideBar from "./SideBar";
import OptionsBar from "./OptionsBar";
import TodoList from "./TodoList";
import { lightModeTheme } from "./theme";
import { UserTodoList } from "./TodoList/types";
import CreateList from "./CreateList";
import LoginPage from "./LoginPage"; 
import RegisterPage from "./RegisterPage";



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

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showMainPage, setShowMainPage] = useState(false);
  const navigate = useNavigate();

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

  const handleLogin = () => {
    setIsLoggedIn(true);
    setShowMainPage(false);
    navigate("/app");
  };

  const handleBackToMain = () => {
    setShowMainPage(true);
    setIsLoggedIn(false);
    navigate("/app");
  };

  return (
    <ThemeProvider theme={lightModeTheme}>
      <CssBaseline />
      <Routes>
        {!isLoggedIn && !showMainPage ? (
          <>
            <Route
              path="/"
              element={<LoginPage onLogin={handleLogin} onBackToMain={handleBackToMain} />}
            />
            <Route path="/register" element={<RegisterPage />} />
          </>
        ) : (
          <Route
            path="*"
            element={
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
                  <OptionsBar
                    isSidebarOpen={isSidebarOpen}
                    setIsSideBarOpen={setIsSideBarOpen}
                  />
                  {selectedTodo.id !== "" ? (
                    <TodoList
                      selectedTodo={selectedTodo}
                      saveLists={saveLists}
                    />
                  ) : (
                    <CreateList onCreate={handleCreateList} />
                  )}
                </Box>
              </Box>
            }
          />
        )}
      </Routes>
    </ThemeProvider>
  );
};

export default App;
