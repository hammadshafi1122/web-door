import React from 'react'
import Tee from '../../images/Tee.png'


function Footer() {
  return (
    <div className='bg-blue-600 text-white  h-[40rem] p-[1rem] space-y-10 md:h-[23rem] lg:flex'>
        <div className='space-y-4 lg:my-[5rem] lg:mx-[2rem]'>
    <div className='flex space-x-2'>
        <div ><img className='w-[2rem] h-[2rem] rounded-full' src={Tee} alt="" /></div>
        <div><span className='font-bold'>Traflagar</span></div>
    </div>
    <div className='space-y-4'> <p>Loreem distinctio ex non ipsum 
        officia numquam, voluptatem molliti
        a aliquam quos laborum nobis vo
        serunt doloribus dolorum.</p>
    <p>@Trafalgar PTV LTD 2020. All rights reserved</p> </div>
</div>
<div className='md:flex md:space-x-20 md:mx-[8rem] lg:py-[2rem]'>

        <div className='space-y-3 md:flex '> 
            <ul className='space-y-1'>
                <li className='font-bold'>Company</li>
                <li>About</li>
                <li>Testimonals</li>
                <li>Find a Job</li>
                <li>Apps</li>
            </ul>
        </div>
        <div>
            <ul className='space-y-1'>
                <li className='font-bold'>Region</li>
                <li>Indonessia</li>
                <li>Singapore</li>
                <li>Hong kong</li>
                <li>Canada</li>
            </ul>
        </div>
        <div>   
            <ul className='space-y-1'>
                <li className='font-bold'>Help</li>
                <li>Help Center</li>
                <li>Contact Support</li>
                <li>Instructions</li>
                <li>How it Works</li>
            </ul>
        </div>
        </div>

    </div>
  )
}

export default Footer