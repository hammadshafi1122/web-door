import React from 'react'
function Testimonals(props)
{
  return (
    <div className='bg-slate-200 rounded-md space-y-3 mx-[1.2rem] sm:w-[18rem] md:mx-[2rem]  lg:h-[24.5rem]'>
        <div>
        </div>
        <div className='font-bold '><img className='rounded-md md:my-[-0.6rem]' src={props.Img} alt="" /></div>
        <div className='p-[1rem] space-y-3 md:space-y-4'>

        <div><span className='font-bold'>{props.name}</span></div>
        <div>sicing elit. Iste, ad animi 
            molestias voluptatem st
            aque.</div>
            <div><span className='bg-blue-600 text-white hover:bg-blue-500 hover:text-black px-[0.4rem] rounded-md cursor-pointer'>Read More</span></div>

            </div>

    </div>


  )
}

export default Testimonals