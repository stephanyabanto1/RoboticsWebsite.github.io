import { useState, useEffect } from "react"
import axios from "axios"

export default function Members() {
    const [users, setUsers] = useState([])

    useEffect(()=> {
      axios.get('http://localhost:3001/users') //web page is requesting with get 
      .then((res) => {
        // console.log(res.data.res)
        const listItems = res.data.res.map(gotten_user => {

        return (
          <li key={gotten_user.user_id}>{gotten_user.username} -- {gotten_user.password}</li>)

      });
        setUsers(listItems)

      })

    }, [])
    
    return (
    <>
    <ul>
      {users}
    </ul>
    </>
    )
  }