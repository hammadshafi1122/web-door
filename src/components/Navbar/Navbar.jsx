import React, {useState} from 'react'
import {GiHamburgerMenu} from 'react-icons/gi'

function Navbar() {
  const [open,setOpen] = useState(false);
   
  return (
    <div className=' shadow-md  w-full fixed top-0 left-0'>
      <div className='md:flex items-center justify-between bg-white py-4 md:px-10 px-7'>
      <div className='font-bold text-2xl cursor-pointer flex items-center font-[Poppins] 
      text-gray-800'>
        <span className='text-3xl text-indigo-600 mr-1 pt-2 lg:mx-[5.7rem]'>
        <ion-icon name="logo-ionic"></ion-icon>
        </span>
        Traflagon
      </div>
      
      <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
      <GiHamburgerMenu  name={open ? 'close':'menu'} size={20} />
      </div>

      <ul className={` md:flex md:items-center md:pb-0 pb-8 absolute md:static bg-gray-900 text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-8 lg:pt-3 transition-all duration-500 ease-in ${open ? 'top-[4.2rem] ':'top-[-490px]'} lg:mx-[11rem] lg:space-x-12 lg:bg-white lg:text-black`}>
      <li className='cursor-pointer  lg:hover:bg-slate-200 '>Home</li>
            <li className='cursor-pointer   '>Doctor</li>
            <li className='cursor-pointer '>Apps</li>
            <li className='cursor-pointer  '>Testimonals</li>
            <li className='cursor-pointer   '>About</li>
      
      </ul>
      </div>
    </div>
  )
}

export default Navbar