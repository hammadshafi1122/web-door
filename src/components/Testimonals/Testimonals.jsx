import React from 'react'
function Testimonals(props)
{
  return (
    <div className='bg-slate-200 rounded-md space-y-3  w-auto  mx-[1.2rem] sm:w-[18rem] md:mx-[2rem] '>
        <div>
        </div>
        <div className='font-bold '><img className='rounded-md' src={props.Img} alt="" /></div>
        <div className='p-[1rem] space-y-3'>

        <div><span className='font-bold'>{props.name}</span></div>
        <div>sicing elit. Iste, ad animi 
            molestias voluptatem st
            aque.</div>
            <div><span className='text-blue-600'>Read More</span></div>
            </div>

    </div>


  )
}

export default Testimonals