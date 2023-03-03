import React from 'react'
import SingleJob from '../singlejob/SingleJob'

function PostedJobs() {
  return (
    <div className='postedjobs flex flex-col items-center justify-between pt-7'>
        <div className='container items-start '>
            <p className=' text-3xl font-bold text-zinc-600'>Are you <span className='text-indigo-800'>skilled?</span> Someone is looking for you</p>
            <p className='text-zinc-500'>Grab a job that you are good in</p>
        </div>
        <div className='container flex flex-wrap gap-3 items-center justify-between mt-4'>
            <SingleJob/>
            <SingleJob/>
            <SingleJob/>
            <SingleJob/>
            <SingleJob/>
            <SingleJob/>
        </div>
        <div className='container items-start'>
            <button className='border-2 border-indigo-800 hover:bg-indigo-800 hover:text-white py-3 px-10 rounded-full my-4'>Explore more</button>
        </div>        
    </div>
  )
}

export default PostedJobs