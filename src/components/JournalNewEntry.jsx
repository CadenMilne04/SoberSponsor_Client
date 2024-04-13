import React, { useState } from 'react'

function JournalNewEntry(props) {
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    return (
        <div className='grid grid-cols-1 gap-2 m-auto w-full rounded-md bg-gray-300 font-light p-3'>
            <h2>New entry:</h2>
            <input value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}} className='bg-zinc-900 text-white rounded-md p-2 w-fit' placeholder='Entry Title'/>
            <textarea value={newBody} onChange={(e) => {setNewBody(e.target.value)}} className='bg-gray-100 rounded-md p-2' rows="5" placeholder="How are you feeling?"></textarea>
            <button onClick={(e) => {props.addNewEntry(newTitle, newBody)}} className='w-fit bg-green-500 text-white p-2 rounded-md hover:bg-green-700'>Save Entry</button>
        </div>
    )
}

export default JournalNewEntry
