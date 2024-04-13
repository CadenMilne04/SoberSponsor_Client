import React from 'react'
import Background from '../components/Background'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import NextMilestone from '../components/NextMilestone';

function Tracker() {
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
        <div className='relative h-screen py-14 mt-20 flex justify-center'>
            <Background />
            
            <div className='relative flex flex-col bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>
                <div className='bg-gray-300 rounded-full font-light p-3'>
                    Sober for:
                </div>

                <div className='flex flex-row  gap-5'>
                    <div className='bg-gray-300 rounded-full font-light w-1/2 p-3'>
                        Calories Saved:  
                    </div> 

                    <div className='bg-gray-300 rounded-full font-light w-1/2 p-3'>
                        Dollars Saved:
                    </div> 
                </div>

                <NextMilestone data={data}/>
            </div> 
        </div>
    )
}

export default Tracker
