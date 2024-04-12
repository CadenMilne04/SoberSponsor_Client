import React, { useEffect } from 'react'

function JournalEntries(props) {
    const reversed = [...props.entries].reverse();

    // useEffect(() => {
    // },[props.entries]);

    return (
        <div className='relative grid grid-cols-1 gap-5 mt-5 justify-center'>
            {[...props.entries].reverse().map((entry, i) => { 
                return(
                    <div className='m-auto p-3 bg-white w-full rounded-md'>
                        <h1 className='bg-zinc-900 text-white rounded-md p-2 w-fit'>{entry.title}</h1>
                        <p>{entry.body}</p>
                    </div>
                )
            })}
        </div>
    )
}

export default JournalEntries
