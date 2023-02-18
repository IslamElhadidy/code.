import React from 'react'
import logo from '../../images/logo.png'
import './Navbar.css'
function Navbar() {
  return (
    <>
        <div className="navbar bg-gray-100 shadow fixed w-full z-50">
            <div className=" navbar-content flex  justify-between items-center px-20 mx-auto py-3">
                <div className="image"><img className='h-12' src={logo} alt='logo' /></div>
                
                <div className="links">
                    <ul className='flex gap-5'>
                        <li><a href="#hero" className='text-l font-bold hover:text-blue-900 transition'>Home</a></li>
                        <li><a href="#services" className='text-l font-bold hover:text-blue-900 transition'>Services</a></li>
                        <li><a href="#pricing" className='text-l font-bold hover:text-blue-900 transition'>Pricing</a></li>
                        <li><a href="#clients" className='text-l font-bold hover:text-blue-900 transition'>Clients</a></li>
                        <li><a href="#contact" className='text-l font-bold hover:text-blue-900 transition'>Contacts</a></li>
                    </ul>
                </div>
                <div className="button flex gap-3">
                    <button className='text-l bg-blue-900 hover:bg-blue-700 rounded-xl p-2 font-bold  text-white transition'>Sign In</button>
                    <button className='text-l bg-blue-900 hover:bg-blue-700 rounded-xl p-2 font-bold  text-white transition'>Sign Up</button>
                </div>
            </div>
        </div>
    </>
  )
}

export default Navbar