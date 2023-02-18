import React from 'react'
import './Pricing.css'
function Pricing() {
  return (
    <>
        <div className="pricing mb-20" id='pricing'>
            <div className="content">
                <h1 className='text-4xl text-center font-bold text-blue-900'>Pricing</h1>
                <p className='text-center text-gray-500 pt-4 font-medium'>Offer multiple packages or monthly subscriptions? Why not showcase your <br/> featured price plans here, bold and beautifully.</p>
            </div>
            <div className="all-boxes grid grid-cols-3 gap-16 px-20 mt-20 mx-auto">
                
                <div className="box flex flex-col space-y-4  items-center hover:shadow-lg hover:shadow-blue-200 transition duration-300 bg-gray-200 rounded-3xl h-97  w-80 pt-24  ">
                    
                    <h1 className='text-5xl font-extrabold text-blue-900'>$199</h1>
                    <span className='text-blue-500 font-semibold text-xl'>Basic</span>
                    <p className='text-black font-medium '>Starter plan with all <br /> the basics included</p>
                    <ul className='flex flex-col gap-3 pb-3'>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Core Business System</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Team Management</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Dual Infrastructure</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Customized Features</span>   
                        </li>
                    </ul>
                    <button className='text-l  bg-blue-500 hover:bg-blue-700 rounded-xl p-2 font-bold  text-white transition'>Enquire</button>

                </div>
                <div className="box flex flex-col space-y-4 items-center hover:shadow-lg  hover:shadow-blue-200 transition duration-300 scale-110 bg-gray-200 rounded-3xl h-100 w-80 border-blue-500 border-8  border-dashed pt-10 pb-10">
                <button className='text-l mb-2 bg-blue-300 hover:bg-blue-700 rounded-xl p-1 z-0	 px-5 font-bold  text-white transition'>Popular</button>
                <h1 className='text-5xl font-extrabold text-blue-900'>$499</h1>
                    <span className='text-blue-500 font-semibold text-xl'>Growth</span>
                    <p className='text-black font-medium '>Starter plan with all <br /> the basics included</p>
                    <ul className='flex flex-col gap-3 pb-3'>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Core Business System</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Team Management</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Dual Infrastructure</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Customized Features</span>   
                        </li>
                    </ul>
                    <button className='text-l mb-2 bg-blue-500 hover:bg-blue-700 rounded-xl p-2 font-bold  text-white transition'>Enquire</button>
                </div>
                <div className="box flex flex-col space-y-4  items-center hover:shadow-lg hover:shadow-blue-200 transition duration-300 bg-gray-200 rounded-3xl  h-97  w-80 pt-24">
                    
                    <h1 className='text-5xl font-extrabold text-blue-900'>$1299</h1>
                    <span className='text-blue-500 font-semibold text-xl'>Corporate</span>
                    <p className='text-black font-medium '>Starter plan with all <br /> the basics included</p>
                    <ul className='flex flex-col gap-3 pb-3'>
                        <li className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Core Business System</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Team Management</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Dual Infrastructure</span>
                        </li>
                        <li  className='flex items-center gap-2'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            <span>Customized Features</span>   
                        </li>
                    </ul>
                    <button className='text-l  bg-blue-500 hover:bg-blue-700 rounded-xl p-2 font-bold  text-white transition'>Enquire</button>

                </div>
            </div>
        </div>
    
    </>
  )
}

export default Pricing