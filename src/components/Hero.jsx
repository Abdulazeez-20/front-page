import React, { useEffect, useState } from 'react'
import { sliders } from "../assets"
import { Log } from '.'
import SignUp from './SignUP'

const Hero = () => {
    useEffect(() => {
        const observe = new IntersectionObserver(elements => {
            elements.forEach(element => {
                if (element.isIntersecting) {
                    element.target.classList.add('show')
                }
            })
        })
        const textEl = document.querySelectorAll('.textEffect');
        textEl.forEach(el => observe.observe(el));

        const buttonEl = document.querySelectorAll('.buttonEffect')
        buttonEl.forEach(el => observe.observe(el));

        return () => {
            textEl.forEach(el => observe.unobserve(el))
        }
    }, [])

    const [current, setCurrent] = useState(0)

    const prev = () => (
        setCurrent(curr => (curr == 0 ? sliders.length - 1 : curr - 1))
    )

    const next = () => (
        setCurrent(curr => (curr == sliders.length - 1 ? 0 : curr + 1))
    )

    useEffect(() => {
        const autoSlider = setInterval(next, 3000)
        return () => clearInterval(autoSlider)
    }, [])

    const [showLogin, setShowLogin] = useState(false)
    const handleOnclose = () => {
        setShowLogin(false)
    }

    return (
        <div id='hero' className='flex flex-col sm:flex-row sm:justify-between items-center mx-auto max-w-[1240px] w-full h-screen sm:mt-[-35px]'>
            <div className='grid w-full h-2/5 sm:h-screen place-content-center'>
                <h1 className='w-full textEffect px-3 text-[40px] sm:text-[45px] text-end'>بيئة امنة وموثوقة لتسجيل وإدارة ابحاثك بسهوله</h1>
                <button onClick={() => setShowLogin(true)} className='px-2 hover:text-blue-400 font-bold ms-4 py-4 max-w-[160px] text-white rounded-md buttonEffect bg-black-gradient-2'>تسجيل الدخول</button>
                <SignUp status={showLogin} onClose={handleOnclose} />
            </div>
            <div className='w-full relative overflow-hidden flex rounded-md transition-transform ease-in duration-500'>
                {sliders.map((pic, index) => (
                    <img src={pic}
                        key={index}
                        className='sm:max-h-[600px] sm:max-w-[680px] max-w-full max-h-full transition-transform ease-in duration-500 bg-center bg-cover' alt={`image ${index}`}
                        style={{ transform: `translateX(-${current * 100}%)` }} />
                ))}
                <div className='absolute bottom-4 right-0 left-0'>
                    <div className='flex items-center gap-2 justify-center'>
                        {sliders.map((_, indicator) => (
                            <div
                                className={`transition-all w-2 h-2 bg-gray-500 rounded-full ${current == indicator ? 'p-1' : 'bg-opacity-50'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero