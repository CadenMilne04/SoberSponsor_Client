import React, { useEffect } from 'react'

function JournalEntries(props) {
    const reversed = [...props.entries].reverse();

    return (
        <div className='relative grid grid-cols-1 gap-5 mt-5 justify-center'>
            {[...props.entries].reverse().map((entry, i) => { 
                return(
                    <div className='grid grid-cols-1 gap-2 m-auto p-3  w-full rounded-md bg-gray-300  font-light p-3'>
                        <h1 className='bg-zinc-900 text-white rounded-md p-2 w-fit'>{entry.title}</h1>
                        <p>{entry.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default JournalEntries
