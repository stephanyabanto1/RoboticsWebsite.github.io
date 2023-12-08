import {useLocation} from "react-router-dom"
import {useState} from 'react';
import axios from 'axios';


const Profile = () => {

    const [post, setPost] = useState('')
    const [posts, setPosts] =useState(null)

 const submitPosts = e =>
 {
  e.preventDefault()
  axios.post('http://localhost:3001/signup', {post: post})
  .then((res) => {
    setPost('')
    console.log(res)
    setPosts(res.data.post)
  })
 }



    const location = useLocation()
    const user1 = location.state
    
    return(
       
      <form>

         <div>
            <h3 className = "pb-6 text-2xl text-center text-white"> Profile </h3>
            {user1 ? <h4 className = "text-xl text-center text-white">Hi, {user1}!</h4>: null}
        </div>  

        
       </form>
    )

}

export default Profile;