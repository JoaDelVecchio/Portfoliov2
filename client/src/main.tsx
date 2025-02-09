import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import HoveredProjectContextProvider from "./context/HoveredProjectContextProvider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <HoveredProjectContextProvider>
      <App />
    </HoveredProjectContextProvider>
  </StrictMode>,
);
