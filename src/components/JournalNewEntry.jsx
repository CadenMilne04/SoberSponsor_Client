import React, { useState } from 'react'
import axios from "axios";
import JWTServices from "../services/JWTSevice";

function JournalNewEntry(props) {
    const [newTitle, setNewTitle] = useState("");
    const [newBody, setNewBody] = useState("");

    async function addNewEntry(){
        try {
            const token = JWTServices.getToken();

            const request = {
                token: token,
                title: newTitle,
                body: newBody
            }

            const response = await axios.patch("https://sobersponsor-server.onrender.com/api/user/journal/new", request);
            
            alert("New entry added!");
            setNewTitle("");
            setNewBody("");

            props.getEntries();

        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className='grid grid-cols-1 gap-2 m-auto w-full rounded-md bg-gray-300 font-light p-3'>
            <h2>New Journal Entry:</h2>
            <input value={newTitle} onChange={(e) => {setNewTitle(e.target.value)}} className='bg-zinc-900 text-white rounded-md p-2 w-fit' placeholder='Entry Title'/>
            <textarea value={newBody} onChange={(e) => {setNewBody(e.target.value)}} className='bg-gray-100 rounded-md p-2' rows="5" placeholder="How are you feeling?"></textarea>
            <button onClick={addNewEntry} className='w-fit bg-green-500 text-white p-2 rounded-md hover:bg-green-700'>Save Entry</button>
        </div>
    )
}

export default JournalNewEntry
