import React from 'react'
import { Pie } from 'react-chartjs-2'

function NextMilestone(props) {
    return (
        <div className='flex flex-col justify-center bg-gray-300 rounded-3xl font-light p-3'>
            <p className='m-auto'>Next Milestone:</p>
            <div className='w-1/2 m-auto'>
                <Pie 
                data={props.data}
                />
            </div>
        </div>
    )
}

export default NextMilestone
