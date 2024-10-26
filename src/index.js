import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import App from "./App";
import Project1 from "./components/pages/project1";
import Header from "./components/header";
import { CursorProvider } from "./hooks/CursorContext";
import Timeline from "./components/timeline";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/about" element={<Project1 />} />
        </Routes>
      </Router>
    </CursorProvider>
  </React.StrictMode>
);
