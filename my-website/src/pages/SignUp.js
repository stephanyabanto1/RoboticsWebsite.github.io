import {useState} from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';

function SignUp(){

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [user, setUser] =useState(null)


 const submitHandler = e =>
 {
  e.preventDefault()
  axios.post('http://localhost:3001/signup', {username: username, password: password})
  .then((res) => {
    setUsername('')
    setPassword('')
    console.log(res)
    setUser(res.data.username)
  })
 }

 
  return (
    <>
    <div>
    <form className = 'mx-auto border-2 p-9 md:p-12 w-72 md:w96 border-cyan-400 mt-36 h-84' onSubmit={submitHandler}>
    <h3 className = 'pb-6 text-2xl text-center text-white'> Sign Up</h3>
    <label className = 'block mb-1 text-xl text-cyan-400' htmlFor='username'> Username</label>  
    <input className = 'w-full h-8 p-1 mb-6 focus:outline-none' id='username' type='text' value={username} onChange={(e) => setUsername(e.target.value)}/> 
    <label className = 'block mb-1 text-xl text-cyan-400' htmlFor='password'> Password</label>  
    <input className = 'w-full h-8 p-1 mb-6 focus:outline-none' id='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/> 
    
    <div className = 'flex justify-between'>
        <button className='px-3 py-1 rounded-sm bg-cyan-400' type = 'button'> Cancel</button>
        <button className='px-3 py-1 rounded-sm bg-cyan-400' type = 'submit'> Submit</button>
    </div>
    {user ? <Navigate to='/profile' replace ={true} state ={user}/> :null}
    </form>  
    </div>
    </>
  )
}

export default SignUp;