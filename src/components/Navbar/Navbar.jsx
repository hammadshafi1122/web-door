import React from 'react'

function Navbar() {
  return (
    <div className=' text-black justify-around flex h-[4rem] py-[0.8rem] space-x-2'>
        <div className=" text-blue-600 font-bold py-[0.4rem] sm:text-2xl sm:py-[0.1rem]">  
              <p>Trafalgon</p>

        </div>
        <div className="">
          <ul className='flex  space-x-2 py-[0.3rem] sm:space-x-6 lg:space-x-14'>
            <li>Home</li>
            <li>Doctor</li>
            <li>Apps</li>
            <li>Testimonals</li>
            <li>About</li>
          </ul>

        </div>

      
      </div>
  )
}

export default Navbar