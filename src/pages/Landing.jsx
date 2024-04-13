import React, { useEffect, useState } from 'react'
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import Background from '../components/Background';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Landing() {
    const [promptState, setPromptState] = useState("login");
    const {loggedIn} = useAuth();

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn){
            navigate("/home");
        }
    }, [loggedIn]);
    return (
        <div className='h-screen relative py-14'>
            <Background />
            <div className='relative grid grid-cols-1 h-3/4 md:grid-cols-2 gap-8 pt-32 p-8'>
                <div className='flex flex-col gap-3 m-auto justify-center xl:items-end'>
                    <h1 className='text-center font-serif text-5xl bg-zinc-900 xl:w-3/4 text-white rounded-md p-6'>
                        Sober Sponsor
                    </h1>

                    <p className='text-center bg-white rounded-md px-10 py-8 xl:w-3/4'>
                        Sober Sponsor is a revolutionary web application designed to provide vital support for individuals striving to maintain sobriety. With a user-friendly interface and an array of helpful features, Sober Sponsor empowers users on their journey towards recovery. Our platform fosters a supportive community where members can connect with dedicated sponsors, access valuable resources, and track their progress with personalized tools. Whether you're navigating the early stages of sobriety or seeking ongoing encouragement, Sober Sponsor is here to help you every step of the way. Join us and embark on a path towards a healthier, happier life free from addiction.
                    </p>

                </div>

                {promptState == "login" &&
                    <LoginForm setPromptState={setPromptState} /> 
                }

                
                {promptState == "register" &&
                    <RegisterForm setPromptState={setPromptState} /> 
                }

            </div>
        </div>
    )
}

export default Landing
