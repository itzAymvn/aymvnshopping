import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// Import browser router
import { BrowserRouter } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    // Wrap the app in the browser router
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
