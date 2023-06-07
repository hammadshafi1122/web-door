import React from 'react'
import 'swiper/swiper.min.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Slideinner from '../Slideinner/Slideinner';

function Slider() {
  return (
    <div className='bg-blue-500 text-white rounded-xl border-2 border-blue-200 p-[2rem] h-[32rem] mx-[1.3rem] w-auto lg:w-[56.89rem] lg:h-[22rem] lg:mx-[8.9rem]'>
          <Swiper 
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
          <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
        <SwiperSlide>
        <Slideinner/>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider