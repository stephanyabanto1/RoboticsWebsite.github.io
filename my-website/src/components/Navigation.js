import {Link } from 'react-router-dom'


export default function Navigation(){

    return(
        <nav className ='flex items-center justify-between w-full h-16 py-2 text-white border-b px-28 mb-36 border-cyan-400'>

        <Link to='/' className = 'text-2xl font-medium text-white'>
            <span className="text-cyan-400"> M</span>
            <span className="text-cyan-400"> M</span>
        
        </Link>

        <ul className = 'flex items-center h-16 text-xl'>
            <li> <Link to = '/signup' > Sign Up</Link></li>
            <li className='pl-20'><Link to='/signup'> Sign In </Link></li>

        </ul>
        </nav>
    )
    
}