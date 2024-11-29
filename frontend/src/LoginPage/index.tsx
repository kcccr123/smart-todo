import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({
  onLogin,
  onBackToMain,
}: {
  onLogin: () => void;
  onBackToMain: () => void;
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Use navigate for routing

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (email === "test@example.com" && password === "password") {
      console.log("Login successful!");
      onLogin(); // Notify App of successful login
    } else {
      alert("Invalid email or password");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexDirection: "column",
      }}
    >
      <form
        onSubmit={handleLogin}
        style={{ width: "300px", display: "flex", flexDirection: "column" }}
      >
        <h2>Login</h2>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginBottom: "10px" }}
        />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", marginBottom: "10px" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#6200EE",
            color: "#fff",
            border: "none",
            marginBottom: "10px",
          }}
        >
          Login
        </button>
      </form>
      <button
        onClick={onBackToMain}
        style={{
          padding: "10px",
          background: "#007BFF",
          color: "#fff",
          border: "none",
          marginTop: "10px",
        }}
      >
        Return to Main Page
      </button>
      <button
        onClick={() => navigate("/register")}
        style={{
          padding: "10px",
          background: "#28a745",
          color: "#fff",
          border: "none",
          marginTop: "10px",
        }}
      >
        Register
      </button>
    </div>
  );
};

export default LoginPage;
