import React, { useState } from 'react'
import axios from 'axios';
import  JWTServices from '../services/JWTSevice';
import { useAuth } from '../contexts/AuthContext';

function RegisterForm(props) {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [invalid, setInvalid] = useState(false);
    const [invalidMessage, setInvalidMessage] = useState("");

    const {login} = useAuth();
    async function checkInformationThenSignIn(){
        if(password != password2){
            setInvalid(true);
            setInvalidMessage("Passwords do not match");
        }
        else{
            signInUser();
        }
    }

    async function signInUser(){
        try {
            //Construct the request to the backend
            const request = {
                username: username,
                password: password
            }

            //Make the request
            const response = await axios.post("https://sobersponsor-server.onrender.com/api/user/create", request);

            //Is valid
            setInvalid(false);

            //Check on the request
            JWTServices.setToken(response.data.token);
            const token = JWTServices.getToken();

            console.log(token);

            //Login the context
            login();
        } catch (error) {
            setInvalid(true);
            setInvalidMessage("Account already exists");
            console.log(error.response.data);
        }
    }

    return (
        <div className='flex flex-col justify-center bg-white rounded-md xl:w-3/5 xl:justify-start xl:ml-0 m-auto gap-3 py-8 px-14'>
            {invalid && <p className='text-red-500'>{invalidMessage}</p>}
            <p className=''>Create a new Account:</p>
            <input 
                value={username} 
                onChange={(e) => {
                    setUsername(e.target.value)
                    }}
                type="text" placeholder="New Username" className='bg-zinc-800 rounded p-1 text-white'/>
            <input 
                value={password} 
                onChange={(e) => {
                    setPassword(e.target.value)
                    }}
                type="password" placeholder="New Password" className='bg-zinc-800 rounded p-1 text-white'/>
            <input 
                value={password2} 
                onChange={(e) => {
                    setPassword2(e.target.value)
                    }}
                type="password" placeholder="Re-type Password" className='bg-zinc-800 rounded p-1 text-white'/>
            <input onClick={checkInformationThenSignIn} type="submit" className='cursor-pointer bg-green-600 hover:bg-green-700 shadow-lg m-auto px-7 py-0.5 rounded font-serif text-xl text-white'/>

            <p>Already have an account? <a onClick={() => {props.setPromptState("login")}} className='font-bold cursor-pointer'>Log in here.</a></p>
        </div>
    )
}

export default RegisterForm
