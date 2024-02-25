import React from 'react'

function RegisterForm(props) {


    return (
        <form action="" className='flex flex-col justify-center bg-white rounded-md xl:w-3/5 xl:justify-start xl:ml-0 m-auto gap-3 py-8 px-14'>
            <p className=''>Create a new Account:</p>
            <input type="text" placeholder="New Username" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input type="password" placeholder="New Password" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input type="password" placeholder="Retype Password" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input type="submit" value="Sign Up" name="" id="" className='bg-green-600 hover:bg-green-700 shadow-lg m-auto px-7 py-0.5 rounded font-serif text-xl text-white'/>
            <p>Already have an account? <a onClick={() => {props.setPromptState("login")}} className='font-bold cursor-pointer'>Log in here.</a></p>
        </form>
    )
}

export default RegisterForm
