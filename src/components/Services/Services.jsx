import React from 'react'
function Services(props) {
    const Icon = props.icon
  return (
    <div className='bg-slate-200 p-[2rem] rounded-xl space-y-3  sm:w-[18rem] md:mx-[2rem]'>
        <div>
            <Icon/>
        </div>
        <div className='font-bold '>{props.name}</div>
        <div>sicing elit. Iste, ad animi 
            molestias voluptatem st
            aque.</div>
    </div>
  )
}

export default Services