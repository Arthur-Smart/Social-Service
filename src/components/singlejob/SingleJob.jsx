import React from 'react'
import './singlejob.css'

function SingleJob() {
  return (
    <div className='singlejob border-2 p-2'>
        <div className='flex flex-col '>
            <div className='flex'>
                <img src={require('../../assets/mainbg.jpg')} alt = "Skillshub"/>
            <p className='ml-2 text-xl font-medium'>Joseph Njoroge</p>
            </div>            
            <div className='mt-4'>
                <p className='text-lg font-semibold'>Content creater</p>
                <p>Hey I am looking for a person who can create a good content for my blog article. The individual must be well experiend. This </p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
                <p className='text-amber-500 text-lg'><i class="fa-solid fa-location-dot"></i> Nairobi</p>
                <button className='job-post-btn py-1 px-10 text-white'>More</button>
            </div>
        </div>
    </div>
  )
}

export default SingleJob