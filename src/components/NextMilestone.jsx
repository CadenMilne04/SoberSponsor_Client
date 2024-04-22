import React, { useEffect, useState } from 'react'
import { Pie } from 'react-chartjs-2'
import { useAuth } from '../contexts/AuthContext';

function NextMilestone() {
    const { quitDate } = useAuth();

    useEffect(() => {
        updateGraph();
    }, []);

    const [remainingDays, setRemainingDays] = useState(0);
    const [daysComplete, setDaysComplete] = useState(0);
    const [nextMilestone, setNextMilestone] = useState(0);

    const data = {
      labels: ['Days Remaining', 'Days Complete'],
      datasets: [
        {
          data: [remainingDays, daysComplete,],
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

    function updateGraph(){
            let timeDiff = Date.now() - Date.parse(quitDate);

            let seconds = Math.floor(timeDiff / 1000);
            let minutes = Math.floor(seconds / 60);
            let hours = Math.floor(minutes / 60);
            let days = Math.floor(hours / 24);

            setDaysComplete(days % 50);
            setRemainingDays(50 - (days % 50));

            setNextMilestone(days % 50 + 50 - (days % 50));
    }
    return (
        <div className='flex flex-col justify-center bg-gray-300 rounded-3xl font-light p-3'>
            <p className='m-auto'>Next Milestone: {nextMilestone} days</p>
            <div className='w-1/2 m-auto my-0 min-w-[120px]'>
                <Pie 
                    data={data}
                />
            </div>
        </div>
    )
}

export default NextMilestone
