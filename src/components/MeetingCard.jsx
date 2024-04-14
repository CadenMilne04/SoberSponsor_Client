import React from 'react'

function MeetingCard(props) {
    return (
        <div className='relative flex flex-col bg-zinc-900 border-green-500 border-2 rounded-xl p-4 gap-2 w-full h-fit'>
            <div className='bg-gray-300 rounded-full font-light p-1'>
                Title: {props.title}
            </div>

            <div className='bg-gray-300 rounded-full font-light p-1'>
                Description: {props.desc}
            </div>

            <div className='bg-gray-300 rounded-full font-light p-1'>
                Location: {props.location}
            </div>
        </div>
    )
}

export default MeetingCard
