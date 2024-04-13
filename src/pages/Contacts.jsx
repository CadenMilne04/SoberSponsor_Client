import React from 'react'
import Background from '../components/Background'

function Contacts() {
    return (
        <div className='relative h-screen py-14 flex justify-center mt-20'>
            <Background />
            <div className='relative flex flex-col justify-center bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>
                
                <div className='bg-gray-300 rounded-full font-light text-xl p-3'>
                    Suicide & Crisis Lifeline: 988 
                </div>
        
                <div className='bg-gray-300 rounded-full font-light text-xl p-3'>
                    SAMHSA's National Helpline: 1-900-622-HELP (4357)
                </div>
        
                <div className='bg-gray-300 rounded-full font-light text-xl p-3'>
                    DrugAbuse.com: 313-214-3908 
                </div>

                <div className='bg-gray-300 rounded-full font-light text-xl p-3'>
                    Al-Anon: 800-356-9996 
                </div>

                <div className='bg-gray-300 rounded-full font-light text-xl p-3'>
                    Drugfree.org: 855-378-4373
                </div>
            </div>
        </div>
    )
}

export default Contacts
