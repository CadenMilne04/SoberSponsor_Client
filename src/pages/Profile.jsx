import Background from "../components/Background"
import React, { useEffect, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";
import JWTServices from "../services/JWTSevice";

function Profile() {
    const { logout, login, loggedIn, quitDate, user, location, refreshJWT } = useAuth();

    const [somethingWentWrong, setSomethingWentWrong] = useState(false);

    const [usern, setUsern] = useState("");
    const [password, setPassword] = useState("");
    const [locationn, setLocationn] = useState("");
    const [quitDaten, setQuitDaten] = useState(new Date());

    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn == false){
            navigate("/");
        }

        setUsern(user);
        setLocationn(location);
        setQuitDaten((quitDate));

    }, [loggedIn, user, location, quitDate]);

    function handleEdit(){
        setUsern(user);
        setLocationn(locationn);
        setQuitDaten((quitDaten));
        
        setEditing(!editing);
    }
    
    async function savePassword(){
        try {
            const token = JWTServices.getToken();

            const request = {
                token: token,
                password: password
            }

            const response = await axios.patch("https://sobersponsor-server.onrender.com/api/user/update/password", request);

            alert(response.data.message);

            setSomethingWentWrong(false);
            handleEdit();
        } catch (error) {
            setSomethingWentWrong(true);
        }

    }

    async function saveLocation(){
        try {
            const token = JWTServices.getToken();

            const request = {
                token: token,
                location: locationn
            }

            const response = await axios.patch("https://sobersponsor-server.onrender.com/api/user/update/location", request);


            refreshJWT();
            setSomethingWentWrong(false);
            handleEdit();
        } catch (error) {
            setSomethingWentWrong(true);
        }

    }
    async function saveQuitDate(){
        try {
            const token = JWTServices.getToken();

            const request = {
                token: token,
                date: quitDaten
            }

            const response = await axios.patch("https://sobersponsor-server.onrender.com/api/user/update/quit-date", request);


            refreshJWT();
            setSomethingWentWrong(false);
            handleEdit();
        } catch (error) {
            setSomethingWentWrong(true);
        }

    }


    return (
        <div className="relative flex p-14 h-screen mt-20 justify-center">
            <Background />


            <div className='relative flex flex-col justify-center bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>
                {somethingWentWrong &&
                    <p className='text-red-500'>Something went wrong, pleaase refresh or try again.</p>
                }

                <div className="relative flex flex-row gap-3 justify-end">
                    {editing ? 
                        <button className="bg-orange-600 hover:bg-orange-700 text-white p-1 px-3 rounded-md font-thin text-xl text-white w-fit " 
                            onClick={handleEdit}>
                            Cancel
                        </button>
                        : 
                        <button className="bg-blue-600 hover:bg-blue-700 text-white p-1 px-3 rounded-md font-thin text-xl text-white w-fit " 
                            onClick={handleEdit}>
                            Edit
                        </button>
                    }
                    <button className="bg-red-600 hover:bg-red-700 text-white p-1 px-3 rounded-md font-thin text-xl text-white w-fit " onClick={logout}>Sign Out</button>
                </div>
                
                <div className='flex gap-2 bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div>Username: </div>
                    <input className='w-full bg-gray-100 rounded-full px-5' type="text" 
                        readOnly={true}
                        onChange={(e) => {
                            setUsern(e.target.value);
                        }}
                        value={usern}/>
                </div>

                <div className='flex gap-2 bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div>Password: </div>
                    <input className='w-full bg-gray-100 rounded-full px-5' type="password" 
                        readOnly={!editing}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}/>
                    {editing && 
                        <button onClick={savePassword} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md font-thin text-xl text-white w-fit" >Save</button>
                    }
                </div>

                <div className='flex gap-2 bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div>Location: </div>
                    <input className='w-full bg-gray-100 rounded-full px-5' type="text" 
                        readOnly={!editing}
                        onChange={(e) => {
                            setLocationn(e.target.value);
                        }}
                        value={locationn}/>
                    {editing && 
                        <button  onClick={saveLocation} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md font-thin text-xl text-white w-fit" >Save</button>
                    }
                </div>

                <div className='flex gap-2 w-fit bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div className="w-fit">Sober Date: </div>
                    <DatePicker className="w-full bg-gray-100 rounded-full px-5" readOnly={!editing} selected={Date.parse(quitDaten)} onChange={(date) => {setQuitDaten(date)}}/> 
                    {editing && 
                        <button onClick={saveQuitDate} className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md font-thin text-xl text-white w-fit" >Save</button>
                    }
                </div>

                
            </div>
        </div>
    )
}

export default Profile
