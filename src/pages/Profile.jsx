import Background from "../components/Background"
import React from 'react'
import JWTServices from "../services/JWTSevice"
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Profile() {
    const {logout} = useAuth();


    return (
        <div className="relative">
            <Background />

            <div className="relative flex justify-center">
                <button className="bg-zinc-50 m-auto" onClick={logout}>Sign Out</button>
            </div>
        </div>
    )
}

export default Profile
