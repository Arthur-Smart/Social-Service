import React from 'react'
import './servicecard.css'

function ServiceCard({item}) {
  return (
    <div className='service-card border-2 cursor-pointer'>
        <img className='service-img' src={item.img} alt='skills hub'/>
        <div className='name-profile flex items-center p-2'>
            <img className='service-owner-pic' src={item.profilePic} alt='skills hub'/>
            <p className='ml-2 text-zinc-500'>{item.author}</p>
        </div>
        <div className='name-profile px-2'>
            <p className='ml-2 text-zinc-800 text-xl font-bold'>{item.title}</p>
            <p className='ml-2 text-zinc-500'>I design cool graphic solutions from logos, brochure, magazines...</p>
        </div>
        <div className='price-tab bg-amber-500'>
            <p className='text-white'>Kes 2000</p>
        </div>
    </div>
  )
}

export default ServiceCard