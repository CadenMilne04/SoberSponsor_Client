import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import JournalNewEntry from '../components/JournalNewEntry'
import NextMilestone from '../components/NextMilestone';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import MeetingsFeed from '../components/MeetingsFeed';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Homepage() {
    
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
        <div className='relative mt-20 py-14'>
            <Background />
            <div className='relative h-screen grid grid-cols-2'>
                <div className='flex flex-col w-3/4 py-7 m-auto h-full'>
                    <NextMilestone data = {data}/> 
                    <JournalNewEntry  addNewEntry={addNewEntry}/> 
                </div>
                <div className='w-3/4 flex m-auto justify-center'>
                    <MeetingsFeed />
                </div>
            </div>
        </div>
    )
}

export default Homepage
