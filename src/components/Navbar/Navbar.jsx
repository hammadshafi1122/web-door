import React from 'react'

function Navbar() {
  return (
    <div className=' text-black justify-around flex h-[4rem] py-[0.8rem] space-x-2'>
        <div className=" text-blue-600 font-bold py-[0.4rem] sm:text-2xl sm:py-[0.1rem]">  
              <p>Trafalgon</p>

        </div>
        <div className="">
          <ul className='flex  space-x-2 text-xs py-[0rem] sm:space-x-6 sm:text-base lg:space-x-14 lg:text-lg'>
            <li className='cursor-pointer  px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] hover:bg-slate-200 hover:px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] '>Home</li>
            <li className='cursor-pointer  px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] hover:bg-slate-200 hover:px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] '>Doctor</li>
            <li className='cursor-pointer px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] hover:bg-slate-200 hover:px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] '>Apps</li>
            <li className='cursor-pointer  px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] hover:bg-slate-200 hover:px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] '>Testimonals</li>
            <li className='cursor-pointer  px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] hover:bg-slate-200 hover:px-[0.4rem] hover:h-[3rem] hover:my-[-1rem] hover:py-[1rem] '>About</li>
          </ul>

        </div>

      
      </div>
  )
}

export default Navbar