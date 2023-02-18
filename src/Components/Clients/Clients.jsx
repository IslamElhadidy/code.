import React from 'react'
import Slider from './Slider'
import './Slider.css'
function Clients() {
  return (
    <>
        <div className="clients py-20" id='clients'>
            <h4 className='text-center text-2xl'>Our Clients</h4>
            <h1 className='text-center pb-10 pt-1 text-5xl text-blue-900 font-extrabold'>Client Showcase</h1>
            <div className="content-client flex justify-center items-center">
                <Slider />
            </div>
        </div>
    </>
  )
}

export default Clients