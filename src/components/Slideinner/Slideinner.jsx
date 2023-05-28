import React from 'react'
import Image1 from '../../images/image1.png'

function Slideinner() {
  return (
    <div className='space-y-10 lg:w-full lg:space-y-0'>
        <div className='space-y-2 '>
          <div className='px-[-1rem]'><span className='font-bold text-[0.9rem] sm:mx-[5rem] sm:text-2xl md:mx-[9rem] lg:mx-[10rem]'>What our customers are saying </span></div>
          <div><hr className='w-[16rem] h-1 mx-auto my-4 bg-gray-100 border-0 rounded md:my-10 dark:bg-white' /></div>
        </div>

        <div className='space-y-5 sm:space-y-14 lg:space-y-0  lg:flex'>
            <div className='flex space-x-4 sm:mx-[5rem] lg:space-x-7  lg:w-[50rem]  lg:my-[-1rem] lg:mx-[1rem]'>
                <div ><img className='rounded-full lg:my-[1rem] lg:w-[10rem] lg:h-[10rem]' src={Image1} alt="" /></div>
                <div className='my-[1rem] space-y-2'>
                    <div><span className='font-bold'>Edward Newgotae</span>
                    </div>
                    <div><span>Founder Circle</span></div>
                </div>
            </div>
        <div className='lg:w-[50rem]'>
          "Lorem, ipsum dolor sit amet conse
          ctetur adipisicing elit. Ipsa fug
          iat maxime rerum velit, voluptatem
          , atque numquam quo autem voluptati
          bus excepturi non delectus! Sit obc
          aecati accusantium dolorum aperiam erro
          r necessitatibus repudiandae"
        </div>

        </div>
    </div>
  )
}

export default Slideinner