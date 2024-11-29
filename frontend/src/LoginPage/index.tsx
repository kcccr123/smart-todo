import React from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

// Define the type for the `onLogin` prop
interface LoginPageProps {
  onLogin: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const handleLoginClick = () => {
    console.log("Login button clicked");
    onLogin(); // Call the `onLogin` prop function
  };

  return (
    <Container
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography variant="h4" gutterBottom>
        Login
      </Typography>
      <TextField label="Username" variant="outlined" style={{ marginBottom: "1rem" }} />
      <TextField label="Password" type="password" variant="outlined" style={{ marginBottom: "1rem" }} />
      <Button variant="contained" color="primary" onClick={handleLoginClick}>
        Login
      </Button>
    </Container>
  );
};

export default LoginPage;
