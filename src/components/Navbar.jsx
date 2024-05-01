import React, { useState } from 'react'
import { Navlink } from '../constants'
import { menu, close, books } from '../assets'

const Navbar = () => {
    const [toggle, setToggle] = useState(false)

    return (
        <nav className='flex sm:text-xl font-poppins items-center justify-between p-6 mx-auto max-w-[1240px]'>
            <div className='flex items-center gap-3 cursor-pointer'>
                <img src={books} alt="books" className='w-10' />
                <h2 className='font-se font-serif font-bold'>RMS</h2>
            </div>
            <ul className='items-center hidden sm:flex'>
                {Navlink.map((nav) => (
                    <li
                        key={nav.id}
                        className='mx-5 hover:text-white cursor-pointer'
                    >
                        <a href={`#${nav.id}`} className='f text-2xl font-serif'>{`${nav.title}`}</a>
                    </li>
                ))}
            </ul>

            <div className='sm:hidden'>
                <img src={toggle ? close : menu} alt="toggle image"
                    className='w-[28px] h-[28px] cursor-pointer'
                    onClick={() => setToggle(prev => !prev)}
                />

                <div className={`${toggle ? 'flex' : 'hidden'} absolute top-20 mx-2 my-2 right-0 p-6 bg-black-gradient z-10 text-white rounded-xl sidebar`}>
                    <ul className='flex flex-col items-center justify-end'>
                        {Navlink.map((nav, Navlink) => (
                            <li
                                key={nav.id}
                                className={`font-serif cursor-pointer ${Navlink.index === -1 ? 'mb-0' : 'mb-4'}`}
                            >
                                <a href={`#${nav.id}`}>{`${nav.title}`}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar