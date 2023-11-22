
import axios from 'axios';
import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Members from "./pages/Members"
import NewEvents from "./pages/NewEvents"
import {Route, Routes } from "react-router-dom"

function App(){


 const apiCall = () =>
 {
  axios.get('http://localhost:3001').then((data) => {
    console.log(data)
  })
 }

  return (
    <>
    <button onClick = {apiCall}> MAke Api call </button>

    <Navbar/>
    <div className = "container">
      <Routes > 
        <Route path = "/" element= {<Home/>} />
        <Route path = "/Members" element= {<Members/>} />
        <Route path = "/NewEvents" element= {<NewEvents/>} />
        <Route path = "/About" element= {<About/>} />
      </Routes>
    </div>
    </>
  )
}

export default App