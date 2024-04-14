import React, { useEffect } from 'react'
import Background from '../components/Background'
import MeetingsFeed from '../components/MeetingsFeed'
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Meetings() {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn == false){
            navigate("/");
        }
    }, []);
    return (
        <div className='relative h-fit mt-20 py-14 flex justify-center'>
            <Background />

            <MeetingsFeed /> 
            
        </div>
    )
}

export default Meetings
