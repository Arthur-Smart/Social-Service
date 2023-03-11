import React from 'react'
import './otherjobs.css'

function OtherJobs() {
  return (
    <div className='otherjobs flex flex-col items-center justify-center cursor-pointer'>
    <div className='flex items-center justify-between p-2 w-full'>
        <p className='text-amber-500 text-lg font-medium'>Mobile app development</p>
        <p className='text-zinc-500'><i class="fa-solid fa-coins"></i> Kes 21000</p> 
    </div>
    <div className='p-2 text-zinc-500 w-full'>
        <p>I have a website created in python, Django ( its an api) and I need help adding a payment system. I had hired developer before who ad started implementing the system but he is having a little trouble integrating some of the parts. Upon hire, I will link you to the developer so that he can explain in details, whats needed. I will provide the code that I want adding the payment system upon hire. Thanks.</p>
    </div>
    <div className='flex items-center justify-between p-2 w-full'>
        <p className='font-medium'><i class="fa-solid fa-location-dot"></i> Kiambu</p>
        <p className='text-zinc-500 font-semibold'>Published 2 days ago</p>
    </div>
    </div>
  )
}

export default OtherJobs