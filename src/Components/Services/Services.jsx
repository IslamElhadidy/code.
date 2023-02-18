import React from 'react'
import strategyone from '../../images/strategy-1.png'
import strategytwo from '../../images/strategy-2.png'
import strategythree from '../../images/strategy-3.png'
import strategyfour from '../../images/strategy-4.png'
import searvicesheaderone from '../../images/services-header.png'
import searvicesheadertwo from '../../images/services-sales-header.png'
import './Services.css'
function Services() {
  return (
    <>
        <div className="services pt-12 pb-20" id='services'>
            <div className="content  flex items-center justify-between flex-wrap mb-10 mt-10 px-20 px-auto">

                <div className="box w-1/4 flex flex-col items-center  space-y-3">
                    <img src={strategyone} alt="" />
                    <h4 className='text-blue-900 font-bold text-xl'>Strategy</h4>
                    <p className='w-56 text-center'>We will work with you to develope tailwind apps</p>
                </div>
                <div className="box w-1/4 flex flex-col items-center  space-y-3   ">
                    <img src={strategytwo} alt="" />
                    <h4 className='text-blue-900 font-bold text-xl'>Automation</h4>
                    <p className='w-56 text-center'>We will work with you to develope tailwind apps</p>
                </div>
                <div className="box w-1/4  flex flex-col items-center  space-y-3">
                    <img src={strategythree} alt="" />
                    <h4 className='text-blue-900 font-bold text-xl'>Deplpoyment</h4>
                    <p className='w-56 text-center'>We will work with you to develope tailwind apps</p>
                </div>
                <div className="box w-1/4 flex flex-col items-center  space-y-3">
                    <img src={strategyfour} alt="" />
                    <h4 className='text-blue-900 font-bold text-xl'>Strategy</h4>
                    <p className='w-56 text-center'>We will work with you to develope tailwind apps</p>
                </div>
            </div>
            <div className="services-two flex  justify-between mb-10 mt-40 px-20 px-auto ">
                <div className="content">
                    <h4 className='text-blue-900 font-medium text-xl'>Our Services</h4>
                    <h2 className='text-5xl font-bold text-blue-900 pb-3'>Solving Problems</h2>
                    <p className='w-96 pb-9 text-blue-900 font'>This is a great section to introduce your <br/> company and showcase your featured services.</p>

                    <div className="buttons flex flex-col items-start gap-3">
                        <button className='text-l bg-blue-900 hover:bg-blue-400 rounded-xl p-2 flex justify-between w-72 px-4 font-medium  text-white transition '>
                            <span>Website Design</span>
                            <span>+</span>
                        </button>
                        <button className='text-l bg-blue-900 hover:bg-blue-400 rounded-xl p-2 flex justify-between w-72 px-4 font-medium  text-white transition '>
                            <span>Application Development</span>
                            <span>+</span>
                        </button>
                    </div>
                </div>
                <div className="image">
                    <img className='h-72' src={searvicesheaderone} alt="" />
                </div>
            </div>
            <div className="services-three flex  justify-between gap-20 mb-0 mt-28 px-20 px-auto ">
                <div className="image">
                    <img className='h-80' src={searvicesheadertwo} alt="" />
                </div>
                <div className="content">
                    <h4 className='text-blue-900 font-medium text-xl'>Our Services</h4>
                    <h2 className='text-5xl font-bold text-blue-900 pb-3'>Sales Growth</h2>
                    <p className='w-96 pb-9 text-blue-900 font'>you can talk about secondary services here, or maybe promote your excellent customer service approach. Always grab your website visitors attention</p>

                    <div className="buttons">
                        <button className='text-l bg-red-900 hover:bg-red-400 rounded-xl p-2 flex justify-between  px-10 font-medium  text-white transition '>
                            <span>View Pricing</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Services