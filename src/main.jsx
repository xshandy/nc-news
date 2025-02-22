import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import ErrorBoundaryComponent from "./Components/ErrorBoundaryComponent.jsx";
import { UserProvider } from "./Components/UserContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <UserProvider>
      <ErrorBoundary FallbackComponent={ErrorBoundaryComponent}>
        <App />
      </ErrorBoundary>
    </UserProvider>
  </BrowserRouter>
);
