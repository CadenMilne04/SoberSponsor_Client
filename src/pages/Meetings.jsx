import React from 'react'
import Background from '../components/Background'
import MeetingCard from '../components/MeetingCard'

function Meetings() {
    const posts = [
        {
            title: "Oakland Meeting",
            desc: "AA Meeting",
            location: "3390 Fifth Avenue"
        },
        {
            title: "Oakland Meeting",
            desc: "AA Meeting",
            location: "3390 Fifth Avenue"
        },
        {
            title: "Oakland Meeting",
            desc: "AA Meeting",
            location: "3390 Fifth Avenue"
        },
    ]
    return (
        <div className='relative h-fit py-14 flex justify-center'>
            <Background />
            
            <div className='relative flex flex-col gap-5'>
                {posts.map((post, i) => {
                    return (
                        <MeetingCard 
                            title={post.title}
                            desc={post.desc}
                            location={post.location}
                        />
                    )
                })}
            </div>
        </div>
    )
}

export default Meetings
