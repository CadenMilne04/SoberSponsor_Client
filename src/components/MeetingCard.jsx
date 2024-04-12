import React from 'react'

function MeetingCard(props) {
    return (
        <div className='relative flex flex-col bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-2 w-fit h-fit'>
            <div className='bg-gray-300 rounded-full font-light p-3'>
                Title: {props.title}
            </div>

            <div className='bg-gray-300 rounded-full font-light p-3'>
                Description: {props.desc}
            </div>

            <div className='bg-gray-300 rounded-full font-light p-3'>
                Location: {props.location}
            </div>
        </div>
    )
}

export default MeetingCard
