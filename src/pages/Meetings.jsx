import React from 'react'
import Background from '../components/Background'
import MeetingsFeed from '../components/MeetingsFeed'

function Meetings() {
    return (
        <div className='relative h-fit mt-20 py-14 flex justify-center'>
            <Background />

            <MeetingsFeed /> 
            
        </div>
    )
}

export default Meetings
