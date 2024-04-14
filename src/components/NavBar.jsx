import React from 'react'
import { NavLink } from 'react-router-dom'
import { useAuth } from '../contexts/AuthContext';

function NavBar() {
    const {loggedIn, user} = useAuth();

    return (
        
        <div>
            {loggedIn &&
                <nav className='fixed top-0 z-50 w-full grid grid-cols-2 text-white align-middle bg-zinc-900 border-b-green-500 border-b-2 h-20 font-thin text-xl'>
                    <ul className='flex flex-row justify-start ml-4 my-auto gap-3'>
                        <NavLink className="hover:text-green-500" to="/home">
                            Home
                        </NavLink>
                        <NavLink className="hover:text-green-500" to="/meetings">
                            Meetings
                        </NavLink>
                        <NavLink className="hover:text-green-500" to="/tracker">
                            Tracker
                        </NavLink>
                        <NavLink className="hover:text-green-500" to="/journal">
                            Journal 
                        </NavLink>
                        <NavLink className="hover:text-green-500" to="/contacts">
                            Contacts
                        </NavLink>
                    </ul>
                    
                    <div className='flex justify-end my-auto mr-4'>
                        <NavLink className="hover:text-green-500" to="/profile">
                            {loggedIn ? user : "Account"}
                        </NavLink>
                    </div>
                </nav>
            }
        </div>
    )
}

export default NavBar
