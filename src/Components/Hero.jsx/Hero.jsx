import React from 'react'
import header from '../../images/header.png'
import './Hero.css'
function Hero() {
  return (
    <>
       <div className="hero pt-40 mb-16" id='hero'>
            <div className="hero-content flex items-center justify-around px-20 gap-4">
                <div className="image w-1/2">
                    <img src={header} className='h-96' alt="headerPhoto" />
                </div>
                <div className="info-text  w-1/2 space-y-3">
                    <span className='text-3xl font-semibold'>Multipurpose Landing Template</span>
                    <h1 className='text-5xl font-bold text-blue-900'>Beatifully <br/> Simple, Code.</h1>
                    <p className='text-gray-900 w-96'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae earum facere sapiente impedit ipsam perferendis, pariatur facilis sed doloribus harum illo?</p>
                    <button className='text-l bg-red-500 hover:bg-red-400 rounded-xl p-2 px-10 font-bold  text-white transition'>Learn More</button>
                </div>
              </div>
        </div>
    </>
  )
}

export default Hero