import React, { useState } from 'react'
import Background from '../components/Background'
import JournalEntries from '../components/JournalEntries';
import JournalNewEntry from '../components/JournalNewEntry';

function Journal() {

    const [entries, setEntries] = useState([{title: "Day 1", body: "I am finally deciding to quit the drinking"}, 
        {title: "Day 2", body: "I drank today anyways, I am quitting SoberSponsor lol"}]);

    function addNewEntry(newTitle, newBody){
        alert(entries);
        setEntries([...entries, {title: newTitle, body: newBody}]);
    }

    return (
        <div className='relative h-screen py-5'>
            <Background />

            <div className='relative w-3/4 m-auto items-center bg-white rounded-md bg-opacity-70 p-3'>
                <h1 className='relative w-fit mb-3 font-serif text-5xl bg-zinc-900 text-white rounded-md p-3'>
                    Journal:
                </h1>

                <JournalNewEntry addNewEntry={addNewEntry}/>

                <JournalEntries entries={entries}/>
            </div>
        </div>
    )
}

export default Journal
