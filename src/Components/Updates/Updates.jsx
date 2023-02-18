import React from 'react'
import '../Pircing/Pricing.css'
import img1 from  '../../images/blog-card-1.png'
import img2 from  '../../images/blog-card-2.png'
import img3 from  '../../images/blog-card-3.png'
function Updates() {
  return (
    <>
    <div className="pricing mb-20" >
        <div className="content">
            <h1 className='text-2xl text-center font-normal text-black'>Recent Updates</h1>
            <p className='text-center text-blue-900 text-4xl pt-4 font-extrabold'>Featured Stories</p>
        </div>
        <div className="all-boxes grid grid-cols-3 gap-16 px-20 mt-20 mx-auto">
            
            <div className="box flex flex-col space-y-4 px-10 text-center items-center hover:shadow-lg hover:shadow-blue-200 transition duration-300 bg-gray-100 rounded-3xl h-97  w-80 pt-16 pb-12  ">
                <img  className='w-52' src={img1} alt="" />
                <h2 className='text-xl text-blue-900 font-bold'>Remote Working</h2>
                <p className='font-medium'>Making it easier to connect with every client worldwide</p>
                <button className='pt-8 font-bold text-blue-900'>Read More</button>
              
            </div>


            <div className="box flex flex-col space-y-4 items-center hover:shadow-lg  hover:shadow-blue-200 transition duration-300 scale-110 bg-gray-100 rounded-3xl h-100 w-80 px-10 text-center  pt-10 pb-10">
                <img className='w-52' src={img2} alt="" />
                <h2 className='text-xl text-blue-900 font-bold'>Google Ranking</h2>
                <p className='text-gray-400'>Keywords</p>
                <p className='font-medium text-sm'>We've ranking number one on Google for multiple keywords.Read about our SEO strategies</p>
                <button className='text-l bg-blue-900 hover:bg-blue-400 rounded-xl p-2 px-10 font-bold  text-white transition'>Read More</button>

            </div>

            <div className="box flex flex-col space-y-4 px-10 text-center items-center hover:shadow-lg hover:shadow-blue-200 transition duration-300 bg-gray-100 rounded-3xl h-97  w-80 pt-16 pb-12  ">
                <img  className='w-40' src={img3} alt="" />
                <h2 className='text-xl text-blue-900 font-bold'>Remote Working</h2>
                <p className='font-medium'>We've made our client support services easy to access</p>
                <button className='pt-8 font-bold text-blue-900'>Read More</button>
              
            </div>
        </div>
    </div>

</>
  )
}

export default Updates