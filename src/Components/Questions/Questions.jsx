import React from 'react'
import '../Hero.jsx/Hero.css'
import questions from '../../images/contact-header-img.png'
function Questions() {
  return (
    <>
    <div className="hero pt-10 mb-16" id='contact'>
         <div className="hero-content flex items-center justify-around px-20 gap-4">
             <div className="info-text  w-1/2 space-y-3">
                 <span className='text-xl text-black font-semibold'>Contact</span>
                 <h1 className='text-5xl font-bold text-blue-900'>Questions? <br/> Get In Touch.</h1>
                 <p className='text-gray-900 w-96'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Molestiae earum facere sapiente impedit ipsam perferendis, pariatur facilis sed doloribus harum illo?</p>
                 <button className='text-l bg-red-500 hover:bg-red-400 rounded-xl p-2 px-10 font-bold  text-white transition'>Send an Email</button>
             </div>
             <div className="image w-1/2">
                 <img src={questions} className='h-96' alt="headerPhoto" />
             </div>
           </div>
     </div>
 </>
  )
}

export default Questions