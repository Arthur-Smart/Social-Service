import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './singlejob.css'

function SingleJob({job}) {
    const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['userJobOwner'],
        queryFn: () =>
        axios(`http://localhost:8800/api/user/${job.userId}`).then((res) => {
            return res.data;
      })
  });
  return (
    <div className='singlejob border-gray-200 single-j-border p-2'>
        <div className='flex flex-col '>
            <div className='flex'>
                <img src={data?.userImage} alt = "Skillshub"/>
            <p className='ml-2 text-xl font-medium'>{data?.name}</p>
            </div>            
            <div className='mt-4'>
                <p className='text-lg font-semibold'>{job?.title}</p>
                <p className='text-zinc-900'>{job?.description}</p>
            </div>
            <div className='mt-4 flex items-center justify-between'>
                <p className='text-amber-500 text-lg'><i class="fa-solid fa-location-dot"></i> {job?.location}</p>
               <Link to={`/job/${job?._id}`}> <button className='job-post-btn py-1 px-10 text-white'>More</button></Link>
            </div>
        </div>
    </div>
  )
}

export default SingleJob