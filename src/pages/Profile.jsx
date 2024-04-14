import Background from "../components/Background"
import React, { useEffect, useState } from 'react'
import { useAuth } from "../contexts/AuthContext";
import { useNavigate } from "react-router-dom";

function Profile() {
    const {loggedIn, logout} = useAuth();

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [location, setLocation] = useState("");
    const [soberDate, setSoberDate] = useState("");
    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        if(loggedIn == false){
            navigate("/");
        }
    }, [loggedIn]);

    function handleEdit(){
        setEditing(!editing);
    }


    return (
        <div className="relative flex p-14 h-screen mt-20 justify-center">
            <Background />


            <div className='relative flex flex-col justify-center bg-zinc-900 border-green-500 border-2 rounded-xl p-9 px-32 gap-9 w-2/3 h-fit'>

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
                        readOnly={!editing}
                        onChange={(e) => {
                            setUser(e.target.value);
                        }}
                        value={user}/>
                </div>

                <div className='flex gap-2 bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div>Password: </div>
                    <input className='w-full bg-gray-100 rounded-full px-5' type="password" 
                        readOnly={!editing}
                        onChange={(e) => {
                            setPassword(e.target.value);
                        }}
                        value={password}/>
                </div>

                <div className='flex gap-2 bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div>Location: </div>
                    <input className='w-full bg-gray-100 rounded-full px-5' type="text" 
                        readOnly={!editing}
                        onChange={(e) => {
                            setLocation(e.target.value);
                        }}
                        value={location}/>
                </div>

                <div className='flex gap-2 bg-gray-300 rounded-full font-light text-xl p-3'>
                    <div className="w-1/4">Sober Date: </div>
                    <input className='w-full bg-gray-100 rounded-full px-5' type="text" 
                        readOnly={!editing}
                        onChange={(e) => {
                            setSoberDate(e.target.value);
                        }}
                        value={soberDate}/>
                </div>

                
                {editing && 
                    <button className="bg-green-600 hover:bg-green-700 text-white py-1 px-3 rounded-md font-thin text-xl text-white w-fit " >Save</button>
                }
            </div>
        </div>
    )
}

export default Profile
