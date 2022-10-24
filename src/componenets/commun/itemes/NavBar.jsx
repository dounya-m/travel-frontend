import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import "../../../assets/style/style.css"
// import { HiBars4 } from 'react-icons/hi2';
function NavBar() {

  return (
    <section className='flex items-center justify-between p-6'>
        {/* <h3 className='absolute mb-10 text-3xl font-bold'><HiBars4 /></h3> */}
        {/* <h3 className='absolute mb-10 text-3xl font-bold'>x</h3> */}
        <div>
        <h3 className='text-2xl font-bold'>
            Tri<span className='text-orange-600 '>pgo</span>
        </h3>
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
            <button className='px-4 py-2 text-white bg-orange-500 rounded-lg hover:bg-orange-400'><Link to='login'>sign-in</Link></button>
        </div>
        
    </section>
  )
}

export default NavBar