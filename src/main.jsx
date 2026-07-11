import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Router from "./Router/Router";
import AuthContextProvider from "./Contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <StrictMode>
      <Router/>
    </StrictMode>
  </AuthContextProvider>
);
