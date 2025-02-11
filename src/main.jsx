import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Home from "./Home";
import Project from "./Project";
import Login from "./Login";
import { AuthProvider } from "./context/AuthProvider";
import ProjectProvider from "./context/ProjectProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <ProjectProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:projectId" element={<Project />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </ProjectProvider>
    </AuthProvider>
  </StrictMode>
);
