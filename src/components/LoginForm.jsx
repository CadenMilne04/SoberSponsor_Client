import React, { useEffect, useState } from 'react'
import axios from 'axios';
import  JWTServices from '../services/JWTSevice';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function LoginForm(props) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState(false);

    const { login } = useAuth();

    async function signInUser(){
        try {
            //Construct the request to the backend
            const request = {
                username: username,
                password: password
            }

            //Make the request
            const response = await axios.post("https://sobersponsor-server.onrender.com/api/user/sign-in", request);

            //Isvalid
            setInvalid(false);

            //Check on the request
            JWTServices.setToken(response.data.token);
            const token = JWTServices.getToken();

            console.log(token);

            //Login the context
            login();
        } catch (error) {
            setInvalid(true);
            console.log(error.response.data);
        }
    }

    return (
        <div action="" className='flex flex-col justify-center bg-white rounded-md xl:w-3/5 xl:justify-start xl:ml-0 m-auto gap-3 py-8 px-14'>
            {invalid && <p className='text-red-500'>Invalid username or password.</p>}
            <input value={username} onChange={(e) => {setUsername(e.target.value)}} type="text" placeholder="Username" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input value={password} onChange={(e) => {setPassword(e.target.value)}} type="password" placeholder="Password" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input onClick={signInUser} type="submit" className='cursor-pointer bg-green-600 hover:bg-green-700 shadow-lg m-auto px-7 py-0.5 rounded font-serif text-xl text-white'/>
            
            <p>Don't have an account? <a onClick={() => {props.setPromptState("register")}} className='font-bold cursor-pointer'>Sign up here.</a></p>
        </div>
    )
}

export default LoginForm
