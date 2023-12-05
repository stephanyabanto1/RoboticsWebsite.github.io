import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar(){

        return( 
    
        
    <nav className = "nav">
        <Link to = "/" className = "site-tittle"> Robotics Website</Link>

        <ul>
            <CustomLink to = "/About"> About us </CustomLink>
            <CustomLink to = "/Members"> Members </CustomLink>
            <CustomLink to = "/NewEvents"> News and Events </CustomLink>
            <CustomLink to = "/SignIn"> Sign in</CustomLink>
            <CustomLink to = "/SignUp"> Sign Up</CustomLink>
       
           
        </ul>
    </nav>
    )
}

function CustomLink({to, children, ...props }){
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
    
    return (
        
        <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}