import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import JournalEntries from '../components/JournalEntries';
import JournalNewEntry from '../components/JournalNewEntry';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Journal() {
    const { loggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn == false){
            navigate("/");
        }
    }, []);


    const [entries, setEntries] = useState([{title: "Day 1", body: "I am finally deciding to quit the drinking"}, 
        {title: "Day 2", body: "I drank today anyways, I am quitting SoberSponsor lol"}]);

    function addNewEntry(newTitle, newBody){
        setEntries([...entries, {title: newTitle, body: newBody}]);
    }

    return (
        <div className='relative h-fit py-14 flex mt-20 justify-center'>
            <Background />

            <div className='relative flex flex-col bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>
                <JournalNewEntry addNewEntry={addNewEntry}/>

                <JournalEntries entries={entries}/>
            </div>
        </div>
    )
}

export default Journal
