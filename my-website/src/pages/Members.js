import { useState, useEffect } from "react"
import axios from "axios"
import './About.css'




const Members = () => {

  return(
    <div>
      
      <h1> Advisors </h1>
    <div className = "Advisors">{/* move this to the right */}
    <div><h3>Dr.Carames </h3></div>
    <p> "Write something here" </p>
    <div><h3>Richard Straughter</h3></div>
    <p> "Write Something here" </p>
    </div>

    {/* To the right and put picture */}
    <h1> Eboard</h1>
    <div className = "flex-container"> 
      <div><h3>President : Felipe Rodas</h3></div>
      <div><h3>Vice President: Erick Licona</h3></div>
      <div><h3>Vice President : Ahmed Zoghlami</h3></div>
      <div><h3>Secretary: Stephany Abanto </h3></div>
    </div>




    </div>

  );
};

export default Members;

    // const [users, setUsers] = useState([])
    // const url = "http://localhost:3001/users";
    // const WAIT_TIME = 4000;


    // //To list the usernames on the website 
    // useEffect(()=> {
    //   const id = setInterval(()=>{
    //     axios.get(url).then(res=> {
    //           const listItems = res.data.res.map(gotten_user => {
    //           return (
    //             <li key={gotten_user.user_id}>{gotten_user.username} </li>)
    //         });
    //           setUsers(listItems)
    //         });
    //   }, WAIT_TIME);
    //   return ()=> clearInterval(id);
    // },[] );



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
    
  //   return (
 
    
  //   <div>
  //     <h1> Your feed</h1>
  //     <h1>E-board Members</h1>

    
  //   {/* <ul>
  //     {users.map(user =>(
  //       user
  //     ))}
      
  //     </ul> */}

  //   </div>
  //   )
  // }