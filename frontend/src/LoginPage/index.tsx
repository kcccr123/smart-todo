import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = ({ onLogin }: { onLogin: () => void }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Add your backend authentication logic here
    if (email === "test@example.com" && password === "password") {
      console.log("Login successful!");
      onLogin(); // Notify App of successful login
    } else {
      alert("Invalid email or password");
    }
  };

  const handleBack = () => {
    // Navigate back to the main page (or a default route)
    navigate("/app"); // Replace "/app" with the route to the main page
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
        style={{
          width: "300px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h2>Login</h2>
        <label style={{ alignSelf: "flex-start", marginBottom: "4px" }}>
          Email:
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
        />
        <label style={{ alignSelf: "flex-start", marginBottom: "4px" }}>
          Password:
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{ padding: "8px", marginBottom: "10px", width: "100%" }}
        />
        <button
          type="submit"
          style={{
            padding: "10px",
            background: "#6200EE",
            color: "#fff",
            border: "none",
            marginBottom: "10px",
            width: "100%",
          }}
        >
          Login
        </button>
      </form>
      {/* Back Button */}
      <button
        onClick={handleBack}
        style={{
          padding: "10px",
          background: "gray",
          color: "#fff",
          border: "none",
          width: "300px",
          marginTop: "10px",
        }}
      >
        Back to Main Page
      </button>
    </div>
  );
};

export default LoginPage;
