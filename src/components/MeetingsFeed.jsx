import React from 'react'
import MeetingCard from '../components/MeetingCard'

function MeetingsFeed() {
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
        <div className='relative flex flex-col gap-5'>
            {posts.map((post, i) => {
                return (
                    <MeetingCard 
                        title={post.title}
                        key={i}
                        desc={post.desc}
                        location={post.location}
                    />
                )
            })}
        </div>
    )
}

export default MeetingsFeed
