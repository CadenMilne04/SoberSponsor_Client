import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import JWTServices from '../services/JWTSevice';

function Homepage() {
    //State variables
    const [user, setUser] = useState("");

    useEffect(() => {
        const decodedToken = JWTServices.isLoggedIn()
        if(decodedToken){
            setUser(decodedToken.username);
        }
    }, []);
    return (
        <div className='relative'>
            <Background />
            <div className='relative h-screen'>
                <h1 className='text-white font-serif font-thin text-4xl'>Hello {user}!</h1>
            </div>
        </div>
    )
}

export default Homepage
