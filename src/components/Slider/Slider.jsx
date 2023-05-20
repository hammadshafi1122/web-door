import React from 'react'
import 'swiper/swiper.min.css'; // Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from "swiper";
import Slideinner from '../Slideinner/Slideinner';

function Slider() {
  return (
    <div className='bg-blue-500 text-white rounded-xl border-2 border-blue-200 p-[2rem] h-[32rem] mx-[1.3rem] w-auto lg:w-[50rem] lg:h-[20rem] lg:mx-[13rem]'>
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
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Slider