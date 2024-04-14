import React, { useEffect, useState } from 'react'
import axios from "axios";
import Background from '../components/Background'
import JournalEntries from '../components/JournalEntries';
import JournalNewEntry from '../components/JournalNewEntry';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import JWTServices from "../services/JWTSevice";

function Journal() {
    const { loggedIn } = useAuth();

    const [entries, setEntries] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn == false){
            navigate("/");
        }

        getEntries();
    }, []);

    async function getEntries(){
        try {
            const token = JWTServices.getToken();

            const request = {
                token: token,
            }

            const response = await axios.patch("https://sobersponsor-server.onrender.com/api/user/journal/all", request);

            setEntries(response.data.entries);
        } catch (error) {
            console.log(error);
        }

    }




    return (
        <div className='relative h-screen py-14 flex mt-20 justify-center'>
            <Background />

            <div className='relative flex flex-col bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>
                <JournalNewEntry getEntries={getEntries}/>

                <JournalEntries entries={entries}/>
            </div>
        </div>
    )
}

export default Journal
