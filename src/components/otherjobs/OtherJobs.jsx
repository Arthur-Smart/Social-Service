import React from 'react'
import moment from "moment"
import './otherjobs.css'

function OtherJobs({item}) {
  return (
    <div className='otherjobs rounded-md flex flex-col items-center  cursor-pointer'>
    <div className='flex items-center justify-between p-2 w-full'>
        <p className='text-amber-500 text-lg font-medium'>{item?.title}</p>
        <p className='text-zinc-500'><i class="fa-solid fa-coins"></i> Kes {item?.budget}</p> 
    </div>
    <div className='p-2 text-zinc-500 w-full'>
        <p>{item?.description}</p>
    </div>
    <div className='flex items-center justify-between p-2 w-full'>
        <p className='font-medium'><i class="fa-solid fa-location-dot"></i> {item?.location}</p>
        <p className='text-zinc-500 font-semibold'>Published {moment(item?.createdAt).fromNow()}</p>
    </div>
    </div>
  )
}

export default OtherJobs