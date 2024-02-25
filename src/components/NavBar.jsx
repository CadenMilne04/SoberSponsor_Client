import React from 'react'

function NavBar() {
    return (
        <nav className='grid grid-cols-2 text-white align-middle bg-zinc-900 border-b-green-500 border-b-2 h-20 font-thin text-xl'>
            <ul className='flex flex-row justify-start ml-4 my-auto gap-3'>
                <li><a href="">Home</a></li>
                <li><a href="">Tracker</a></li>
                <li><a href="">Journal</a></li>
                <li><a href="">Information</a></li>
                <li><a href="">Contacts</a></li>
            </ul>
            
            <div className='flex justify-end my-auto mr-4'>
                <a href="" className='m-0'>Account</a>
                <img src="" alt="" />
            </div>
        </nav>
    )
}

export default NavBar
