import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App"; // Main app component
import LoginPage from "./LoginPage"; // Login page component

// Define the onLogin handler function
const handleLogin = () => {
  console.log("User logged in successfully!");
  // Add any additional logic if needed (e.g., navigation)
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