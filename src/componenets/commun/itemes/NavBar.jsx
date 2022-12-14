import React from 'react'
import { NavLink, Link, useNavigate } from 'react-router-dom'
import "../../../assets/style/style.css"
// import { HiBars4 } from 'react-icons/hi2';
function NavBar() {
    const token = localStorage.getItem('id')
    const navigate = useNavigate()

    const logout = () => {
        window.localStorage.clear()
        navigate('/login')
    }

  return (
    <section className='flex items-center justify-between p-6'>
        {/* <h3 className='absolute mb-10 text-3xl font-bold'><HiBars4 /></h3> */}
        {/* <h3 className='absolute mb-10 text-3xl font-bold'>x</h3> */}
        <div>
        <NavLink to="/" className='text-3xl font-bold'>
            Tri<span className='text-orange-600 '>pgo</span>
        </NavLink>
        </div>
        <ul className='flex gap-10 font-medium uppercase'>
            <li>
                <NavLink to="/" 
                style={({ isActive }) => ({
                    color: isActive ? '#f97316' : 'black',
                    fontWeight: isActive ? 'bold' : '500',
                    })}>
                    home
                </NavLink>
            </li>
            <li>                
                <NavLink to="/destination" 
                style={({ isActive }) => ({
                    color: isActive ? '#f97316' : 'black',
                    fontWeight: isActive ? 'bold' : '500',
                    })}>
                    destination
                </NavLink>
                </li>
            <li>
                <NavLink to="/about" 
                    style={({ isActive }) => ({
                        color: isActive ? '#f97316' : 'black',
                        fontWeight: isActive ? 'bold' : '500',
                        })}>
                        about
                    </NavLink>
            </li>
            <li>
                <NavLink to="/contact" 
                    style={({ isActive }) => ({
                        color: isActive ? '#f97316' : 'black',
                        fontWeight: isActive ? 'bold' : '500',
                        })}>
                        contact
                    </NavLink>
            </li>
        </ul>
        
        <div>
            <button onClick={token ?  logout : 'null'} className='px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-400'><Link to={token? '/' : '/login'}>
                
            {token? 'log-out' : 'sign-in'}
                </Link></button>
        </div>
        
    </section>
  )
}

export default NavBar