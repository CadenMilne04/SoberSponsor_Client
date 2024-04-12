import Background from "../components/Background"
import React from 'react'
import { useAuth } from "../contexts/AuthContext";

function Profile() {
    const {logout} = useAuth();


    return (
        <div className="relative h-screen">
            <Background />

            <div className="relative flex flex-row gap-3 p-3 justify-end">
                <button className="bg-red-600 hover:bg-red-700 text-white p-1 rounded-md font-serif text-xl text-white w-fit " onClick={logout}>Sign Out</button>
            </div>
        </div>
    )
}

export default Profile
