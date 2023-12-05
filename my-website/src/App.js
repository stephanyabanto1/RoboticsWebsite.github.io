import {useState} from 'react';
import axios from 'axios';
import Navbar from "./Navbar"
import About from "./pages/About"
import Home from "./pages/Home"
import Members from "./pages/Members"
import NewEvents from "./pages/NewEvents"
import {Route, Routes, Outlet } from "react-router-dom"
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';


function App(){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

 const submitHandler = e =>
 {
  e.preventDefault()
  axios.post('http://localhost:3001/signup', {username: username, password: password})
  .then((data) => {
    // console.log(data)
    setUsername('')
    setPassword('')
  })
 }

  return (
    <>
    <Navbar/>
        <div className = "container">
          <Routes > 
            <Route path = "/" element= {<Home/>} />
            <Route path = "/Members" element= {<Members/>} />
            <Route path = "/NewEvents" element= {<NewEvents/>} />
            <Route path = "/About" element= {<About/>} />
            <Route path = "/SignIn" element = {<SignIn/>}/>
            <Route path = "/SignUp" element = {<SignUp/>}/>
            <Route path = "/Profile" element = {<Profile/>}/>
          </Routes >
        </div>
    </>
  )
}

export default App;