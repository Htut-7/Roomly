import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./Router/Router";
import { RouterProvider } from "react-router-dom";
import AuthContextProvider from "./Contexts/AuthContext";

createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </AuthContextProvider>,
);
