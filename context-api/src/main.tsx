// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";

// Intefaces
import App from "./components/interfaces/App";

// Styles
import GlobalStyle from "./global/global";

// Providers
import { AuthProvider } from "./providers/auth";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AuthProvider>
      <GlobalStyle />
      <App />
    </AuthProvider>
  </React.StrictMode>
);
