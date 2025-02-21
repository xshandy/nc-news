import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./Components/ErrorBoundaryComponent.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
      <App />
    </ErrorBoundary>
  </BrowserRouter>
);
