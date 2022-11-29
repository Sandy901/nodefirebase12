import React from "react";
import App from "./App";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./styles/sass/main.scss";
import { store } from "./store";
import { Provider } from "react-redux";
const container = document.getElementById("root");
import { BrowserRouter } from "react-router-dom";
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <BrowserRouter>
     <Provider store={store}>
     <App/>
     </Provider>
    </BrowserRouter>
);
