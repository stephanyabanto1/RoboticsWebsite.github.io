import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./styles.css";
import {createBrowserRouter, createRoutesFromElements, Route, RouteProvider, BrowserRouter, RouterProvider} from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter(
  createRoutesFromElements((
    <Route path ='/' element = {<App /> }>
      <Route path = '/signUp' element={<signUp />} />
      <Route path = '/signIn' element = {<signIn/>}/>

      </Route>

  ))

)



const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <RouterProvider router = {router}/>
    <BrowserRouter>
    <App />
    </BrowserRouter>
  </React.StrictMode>
)
