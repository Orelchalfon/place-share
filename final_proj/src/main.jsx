/* eslint-disable no-unused-vars */
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import PlaceShareContextProvider from "./shared/context/PlaceShareContextProvider.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(
  <PlaceShareContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PlaceShareContextProvider>
);
