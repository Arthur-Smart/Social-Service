import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import SingleJob from '../singlejob/SingleJob'
import {Link} from 'react-router-dom'
import './postedjobs.css'

function PostedJobs() {
  const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['postedJobs'],
        queryFn: () =>
        axios(`https://serviceapi.onrender.com/api/jobs/`).then((res) => {
            return res.data;
      })
  });

 const randomData = data?.sort(() => Math.random() - 0.5).slice(0, 6);

  return (
    <div className='postedjobs flex flex-col items-center justify-between pt-7'>
        <div className='container posted-jobs-wrapper items-start '>
            <p className=' text-3xl font-bold text-zinc-600'>Are you <span className='text-indigo-800'>skilled?</span> Someone is looking for you</p>
            <p className='text-zinc-500'>Grab a job that you are good in</p>
        </div>
        <div className='container posted-jobs-wrapper flex flex-wrap gap-3 items-center justify-between mt-4'>
            {randomData?.map((job) =><SingleJob key={job?._id} job={job}/>)}
        </div>
        <div className='container p-b-wrapper items-start'>
            <Link to='/jobs'><button className='border-2 border-indigo-800 hover:bg-indigo-800 hover:text-white py-3 px-10 rounded-full my-4'>Explore more</button></Link>
        </div>        
    </div>
  )
}

export default PostedJobs