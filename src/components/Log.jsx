import React, { useState } from 'react'
import { books } from '../assets'

const Login = ({ status, onClose }) => {
    if (!status) return null
    return (
        <div className='z-10 bg-gray-gradient backdrop-blur-md grid place-content-center w-full h-screen inset-0 absolute rounded-md'>
            <form action="" className='flex-auto flex-col w-96 p-4 border text-white items-center justify-center'>
                <p className='text-end text-xl cursor-pointer hover:text-red-500 p-1'
                    onClick={onClose}
                >X</p>

                <span className='flex justify-center items-center gap-3'>
                    <img src={books} alt="logo" className='w-[40px]' />
                    <h1 className='font-serif text-4xl'>RMS</h1>
                </span>

                <div className='mt-8'>
                    <label htmlFor="Email" className='block'>Email</label>
                    <input type="email" id='Email' className='border text-black w-full focus:outline-none focus:border-green-200 px-2 py-1 rounded-sm' placeholder='Enter email' required />
                </div>
                <div className='mt-3'>
                    <label htmlFor="password" className='block'>Password</label>
                    <input type="password" id='password' className='border text-black text-base w-full focus:outline-none focus:border-green-200 px-2 py-1 rounded-sm' placeholder='Enter password' required />
                </div>

                <div className='mt-3 flex justify-between'>
                    <div>
                        <input type="checkbox" className='me-2' />
                        <span>Remember me</span>
                    </div>
                    <a href="#" className='text-blue-400 underline'>Forgot password?</a>
                </div>

                <button type='submit' className='mt-6 border py-3 border-indigo-800 px-5 w-full bg-indigo-700 text-white font-serif font-semibold hover:bg-dimWhite hover:text-indigo-800'>Login</button>
                <p className='text-center mt-3'>You don't have one <a href="#" className='underline text-blue-400'>Create Account !</a></p>
            </form>
        </div>
    )
}

export default Login