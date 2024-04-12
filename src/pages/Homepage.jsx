import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import JournalNewEntry from '../components/JournalNewEntry'
import NextMilestone from '../components/NextMilestone';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

function Homepage() {
    const [entries, setEntries] = useState([{title: "Day 1", body: "I am finally deciding to quit the drinking"}, 
        {title: "Day 2", body: "I drank today anyways, I am quitting SoberSponsor lol"}]);

    function addNewEntry(newTitle, newBody){
        alert(entries);
        setEntries([...entries, {title: newTitle, body: newBody}]);
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    const data = {
      labels: ['Days Remaining', 'Days Complete'],
      datasets: [
        {
          data: [12, 19],
          backgroundColor: [
            'rgba(24, 24, 27, 1)',
            'rgba(94, 194, 95, 1)',
          ],
          borderColor: [
            'rgba(24, 24, 27, 1)',
            'rgba(94, 194, 95, 1)',
          ],
          borderWidth: 1,
        },
      ],
    };

    return (
        <div className='relative'>
            <Background />
            <div className='relative h-screen grid grid-cols-2 grid-rows-2 gap-4 items-center'>
                <div className='w-3/4 m-auto'>
                    <JournalNewEntry addNewEntry={addNewEntry}/> 
                </div>
                <div className='w-3/4 m-auto'>
                    <JournalNewEntry addNewEntry={addNewEntry}/> 
                </div>
                <div className='w-3/4 m-auto'>
                    <NextMilestone data = {data}/> 
                </div>
                <div className='w-3/4 m-auto'>
                    <JournalNewEntry addNewEntry={addNewEntry}/> 
                </div>
            </div>
        </div>
    )
}

export default Homepage
