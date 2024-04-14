import React, { useEffect, useState } from 'react'
import Background from '../components/Background'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import NextMilestone from '../components/NextMilestone';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

function Tracker() {
    const { loggedIn, quitDate } = useAuth();
    const [timeSince, setTimeSince] = useState("loading...");
    const [calsSince, setCalsSince] = useState("loading...");
    const [moneySince, setMoneySince] = useState("loading...");
    const [remainingDays, setRemainingDays] = useState(0);
    const [daysComplete, setDaysComplete] = useState(0);
    const [nextMilestone, setNextMilestone] = useState(0);

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn == false){
            navigate("/");
        }

        updateTimeDifference();
    }, []);

    function updateTimeDifference() {
        setInterval(function() {
            let timeDiff = getTimeDifference(Date.parse(quitDate), Date.now());
        }, 1000);
    }
    function getTimeDifference(startDate, endDate) {
            let timeDiff = endDate- startDate;

            let seconds = Math.floor(timeDiff / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);
            setCalsSince(days * 740); //ChatGPT Estimated 740 calories of liquer a day for an alcoholic
            setMoneySince(days * 31); //ChatGPT Estimated 31 dollars a day for an alcoholic

            hours %= 24;
            minutes %= 60;
            seconds %= 60;

            let result = days + " days, " + hours + " hours, " + minutes + " minutes, " + seconds + " seconds";

            setTimeSince(result);
    }

    ChartJS.register(ArcElement, Tooltip, Legend);

    return (
        <div className='relative h-screen py-14 mt-20 flex justify-center'>
            <Background />
            
            <div className='relative flex flex-col bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>
                <div className='bg-gray-300 rounded-full font-light p-3'>
                    Sober for: {timeSince}
                </div>

                <div className='flex flex-row  gap-5'>
                    <div className='bg-gray-300 rounded-full font-light w-1/2 p-3'>
                        Calories Saved: {calsSince} kcal
                    </div> 

                    <div className='bg-gray-300 rounded-full font-light w-1/2 p-3'>
                        Dollars Saved: ${moneySince}
                    </div> 
                </div>

                <NextMilestone />
            </div> 
        </div>
    )
}

export default Tracker
