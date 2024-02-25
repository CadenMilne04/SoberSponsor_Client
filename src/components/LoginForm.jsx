import React from 'react'

function LoginForm(props) {
  return (
        <form action="" className='flex flex-col justify-center bg-white rounded-md xl:w-3/5 xl:justify-start xl:ml-0 m-auto gap-3 py-8 px-14'>
            <input type="text" placeholder="Username" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input type="password" placeholder="Password" name="" id="" className='bg-zinc-800 rounded p-1 text-white'/>
            <input type="submit" value="Log In" name="" id="" className='bg-green-600 hover:bg-green-700 shadow-lg m-auto px-7 py-0.5 rounded font-serif text-xl text-white'/>
            <p>Don't have an account? <a onClick={() => {props.setPromptState("register")}} className='font-bold cursor-pointer'>Sign up here.</a></p>
        </form>
  )
}

export default LoginForm
