import React from 'react'
import { Cards } from '../constants'

const Features = ({ title, image }) => {
    return (
        <div className='flex flex-col w-full sm:w-80 items-center p-4 shadow-xl rounded-md hover:scale-105 cursor-pointer cardEffect border'>
            <h1 className='text-2xl py-6 font-bold font-poppins'>{title}</h1>
            <img src={image} alt={title} className='w-20' />
            <button type='button' className='bg-gray-300 m-auto rounded-md font-serif font-bold my-6 w-[170px] py-3 px-6'>Join Now</button>
        </div>
    )
}

export default Features