import React from "react";
import ReactDOM from "react-dom/client";
import {createBrowserRouter, createRoutesFromElements, Routes, Route, BrowserRouter, RouterProvider} from "react-router-dom";
import "./styles.css";
import App from "./App";
import Members from "./pages/Members";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Error from "./pages/Error";
import Profile from "./pages/Profile";


const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
