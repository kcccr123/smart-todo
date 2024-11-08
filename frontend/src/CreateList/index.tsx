import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Container, Paper, TextField, Button, Typography } from "@mui/material";
import { UserTodoList } from "../TodoList/types";

const CreateList = ({
  onCreate,
}: {
  onCreate: (newList: UserTodoList) => void;
}) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  const handleCreate = () => {
    if (name.trim() === "") {
      // You might want to display an error message here
      return;
    }

    const newList: UserTodoList = {
      id: uuidv4(),
      name: name.trim(),
      desc: desc.trim(),
      created: new Date().toISOString(),
      todos: [],
    };

    onCreate(newList);

    // Optionally reset the form fields
    setName("");
    setDesc("");
  };

  return (
    <Container maxWidth="sm" sx={{ marginTop: 4 }}>
      <Paper sx={{ padding: 4 }}>
        <Typography variant="h5" gutterBottom>
          Create New To-Do List
        </Typography>
        <TextField
          fullWidth
          label="List Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          margin="normal"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreate}
          disabled={name.trim() === ""}
          sx={{ marginTop: 2 }}
        >
          Create List
        </Button>
      </Paper>
    </Container>
  );
};

export default CreateList;
