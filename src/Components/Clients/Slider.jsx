import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import './Slider.css'

import { Autoplay, Pagination } from "swiper";
import logo1 from '../../images/logo1.png'
import logo2 from '../../images/logo2.png'
import logo3 from '../../images/logo3.png'
import logo4 from '../../images/logo4.png'


// import required modules


function Slider() {
  return (
    <>
    <Swiper
    autoplay={{
        delay:  1000,
        disableOnInteraction: true,
    }}
    loop={true}
    pagination={{
        clickable: true,
      }}
      
      modules={[Autoplay, Pagination]}
    spaceBetween={200}
    slidesPerView={3}


      className='flex justify-center items-center px-20'


>
            
                <SwiperSlide>
                    
                        <img className='w-full' src={logo1} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    
                            <img    className='w-full' src={logo2} alt="" />
                    
                </SwiperSlide>
                <SwiperSlide>
                    <div className="image">
                            <img   className='w-full' src={logo3} alt="" />
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    
                            <img   className='w-full' src={logo4} alt="" />
                    
                </SwiperSlide>
            
      </Swiper>
    </>
  )
}

export default Slider