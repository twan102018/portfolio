import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import App from "./App";
import Project1 from "./components/pages/project1";
import { CursorProvider } from "./hooks/CursorContext";
import Timeline from "./components/timeline";

const ScrollToTop = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CursorProvider>
      <Router>
        <ScrollToTop /> {/* Add ScrollToTop here */}
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/netflix" element={<Project1 />} />
        </Routes>
      </Router>
    </CursorProvider>
  </React.StrictMode>
);
