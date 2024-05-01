import React, { useEffect } from 'react'
import { Navbar, Log, Hero, Features } from './components'
import { Cards } from './constants'

const App = () => {
  useEffect(() => {
    const observe = new IntersectionObserver(elements => {
      elements.forEach(el => {
        if (el.isIntersecting) {
          el.target.classList.add('show')
        } else {
          el.target.classList.remove('show')
        }
      })
    })

    const cardElements = document.querySelectorAll('.cardEffect');
    cardElements.forEach(el => observe.observe(el))
  }, [])

  return (
    <div className='bg-blue-gradient'>
      <Navbar />
      <Hero />
      <div className='w-full h-auto' id='features'>
        <h1 className='text-center font-bold font-poppins text-2xl md:text-4xl pb-7'>المميزات التي يوفرها النظام</h1>
        <div className='grid mx-4 sm:mx-[5rem] place-items-center gap-5 md:grid-cols-3'>

          {Cards.map((el, index) => (
            <Features title={el.title} image={el.image} />
          ))}
        </div>
      </div>
      <Log />
    </div>
  )
}
export default App