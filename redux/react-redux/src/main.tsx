// Dependencies
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

// Intefaces
import App from "./components/interfaces/App";

// Styles
import GlobalStyle from './global/global';

// Global Store
import store from "./redux/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
    <GlobalStyle />
      <App />
    </Provider>
  </React.StrictMode>
);
