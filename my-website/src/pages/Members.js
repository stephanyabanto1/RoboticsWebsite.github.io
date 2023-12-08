import { useState, useEffect } from "react"
import axios from "axios"

export default function Members() {
    const [users, setUsers] = useState([])
    const url = "http://localhost:3001/users";
    const WAIT_TIME = 4000;

    useEffect(()=> {
      const id = setInterval(()=>{
        axios.get(url).then(res=> {
              const listItems = res.data.res.map(gotten_user => {
              return (
                <li key={gotten_user.user_id}>{gotten_user.username} </li>)
            });
              setUsers(listItems)
            });
      }, WAIT_TIME);
      return ()=> clearInterval(id);
    },[] );



    // useEffect(()=> {
    //   axios.get('http://localhost:3001/users') //web page is requesting with get 
    //   .then((res) => {
    //     // console.log(res.data.res)
    //     const listItems = res.data.res.map(gotten_user => {
    //     return (
    //       <li key={gotten_user.user_id}>{gotten_user.username} -- {gotten_user.password}</li>)
    //   });
    //     setUsers(listItems)
    //   })
    // }, [])
    
    return (
 
    
    <div>
      <h1> Your feed</h1>
    
    <ul>
      {users.map(user =>(
        user
      ))}
      
    </ul>

    </div>
    )
  }