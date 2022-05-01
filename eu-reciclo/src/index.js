import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Providers from "./Contexts";
import { BrowserRouter as Router } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Router>
      <Providers>
        <App />
      </Providers>
    </Router>
  </React.StrictMode>
);
