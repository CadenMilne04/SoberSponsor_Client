import React, { useEffect, useState } from 'react'
import MeetingCard from '../components/MeetingCard'
import axios from 'axios';

function MeetingsFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
    }, [])

    async function getPosts(){
        try {
            const response = await axios.get("https://sobersponsor-server.onrender.com/api/meeting/all");
            setPosts(response.data.meetings)
        } catch (error) {
            console.log(error);
        }

    }
    return (
        <div className='relative flex flex-col m-0 gap-5'>
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
