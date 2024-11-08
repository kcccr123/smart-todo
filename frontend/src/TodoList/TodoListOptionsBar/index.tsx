import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { Modal, Box, Button, TextField, Typography } from "@mui/material";

import { StyledButton } from "../styles";

const TodoListOptionsBar = ({
  newTask,
}: {
  newTask: (title: string, desc: string) => void;
}) => {
  const [title, setTitle] = useState<string>("");
  const [desc, setDesc] = useState<string>("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleAddTask = () => {
    if (title && desc) {
      newTask(title, desc);
      setTitle("");
      setDesc("");
    }
    setIsModalVisible(false);
  };

  const closeModal = () => {
    setTitle("");
    setDesc("");
    setIsModalVisible(false);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "Center",
        width: "60%",
        height: "100%",
      }}
    >
      <StyledButton onClick={() => setIsModalVisible(true)}>
        <AddIcon fontSize="small" /> Add Task
      </StyledButton>
      <Modal open={isModalVisible} onClose={closeModal}>
        <Box
          sx={{
            position: "absolute" as "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            borderRadius: 2,
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography variant="h6" component="h2" gutterBottom>
            Add New Task
          </Typography>
          <TextField
            label="Task Title"
            fullWidth
            margin="normal"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            label="Task Description"
            fullWidth
            margin="normal"
            multiline
            rows={4}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
          <Button onClick={handleAddTask} variant="contained" color="primary">
            Add Task
          </Button>
        </Box>
      </Modal>
    </div>
  );
};

export default TodoListOptionsBar;
