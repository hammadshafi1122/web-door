import React from 'react'
import sect1 from '../../images/sect1.png'
function Sect1() {
  return (
    <div className='space-y-3 md:flex lg:mx-[5rem] lg:my-[2rem] lg:justify-around'>
        <div className='p-[2rem] sm:px-[3rem]'>
            <img className='md:w-[20rem] md:h-[20rem]' src={sect1} alt="" />
        </div>
        <div className='p-[1rem] space-y-4 sm:py-[2rem] sm:space-y-6 sm:my-[1rem] md:mx-[1.5rem] md:w-[20rem] md:h-[30rem] lg:mx-[1.2rem]'>
        <div><p className='font-bold text-xl mx-[1rem] sm:text-3xl sm:mx-[6rem] md:mx-[0.1rem] md:my-[1rem] '>Virtual Healthcare for you</p></div>
        <div className='sm:mx-[1.5rem] md:mx-[0.1rem]'> consectetur adipisicing 
          elit. Repellat maiores inci
          dunt quod officia. Nisi con
          distinctio  fugit, ea neque a
          i ratione eaque placeat.</div>
        <div>
          <button className='border-2 text-white bg-blue-500 rounded-full p-[0.5rem] mx-[6rem] sm:mx-[14.5rem] md:mx-[2rem] hover:bg-blue-500 hover:text-black'>Consult today</button>
        </div>
        </div>
        
    </div>
  )
}

export default Sect1