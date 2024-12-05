import React from 'react'
import './login.css'
import Inputs from '../components/Inputs'
import Buttons from '../components/Button'
const Login = () => {
    return (
        <div>
            <div className="FullScreenBg h-screen w-full ">
                <div className='h-full w-full bg-black/50 flex justify-center items-center'>
                    <div className="h-[75%] w-[75%] bg-transparent border-4 border-white rounded-xl flex">
                        <div className="leftContent h-full w-[55%] bg-black/50 rounded-tl-xl rounded-bl-xl ">
                            {/* Login Form*/}
                            <div className='formLogin w-full h-full flex flex-col justify-center items-center'>
                            <p className='text-4xl pb-5  bg-gradient-to-r from-red-500 to-orange-500  bg-clip-text text-transparent'>Welcome to Food Recipes</p>
                            <div className='w-[80%]'>
                            <form action="">
                                <Inputs/>
                                <Inputs textType='password' placeText='please enter your password'/>
                                <Buttons/>
                            </form>
                            </div>
                            </div>
                        </div>
                        <div className="LoginBg h-full w-[45%] rounded-tr-xl rounded-br-xl">
                            <div className="LoginText bg-black/50 h-full w-full text-center flex flex-col justify-center items-center px-1" >
                                <h1 className=' font-bold font-Diplomzta text-2xl pb-3 bg-gradient-to-r from-red-500 to-orange-500  bg-clip-text text-transparent'>Welcome Back To Food Store</h1>
                                <p className='text-white font-serif text-xl font-bold'>Discover all the Recipes in the world here</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
