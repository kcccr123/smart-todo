import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App"; // Main app component
import LoginPage from "./LoginPage"; // Login page component

// Define the onLogin handler function
const handleLogin = () => {
  console.log("User logged in successfully!");
  // Add any additional actions upon successful login, e.g., navigate to another route
};

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        {/* Pass the onLogin prop to LoginPage */}
        <Route path="/" element={<LoginPage onLogin={handleLogin} />} />

        {/* Route for the main app */}
        <Route path="/app" element={<App />} />

        {/* Add other routes if needed */}
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
export { default } from "./LoginPage";
