import React from 'react'
import axios from "axios"
import './useraccountjobs.css'
import { useMutation,useQueryClient } from '@tanstack/react-query';

function UserAccountJobs({job}) {
  const queryClient = useQueryClient() 

   const handleDelete = async () => {
    await axios.delete(`http://localhost:8800/api/jobs/single/${job?._id}`, {withCredentials:true})
  }
  return (
    <div className='user-account-jobs flex flex-col border-zinc-200'>
        <div className='u-a-j-top px-2 py-1 flex items-center justify-between'>
            <p className='font-medium text-amber-500'>{job?.title}</p>
            <p onClick={() => handleDelete()} className='cursor-pointer text-zinc-400'><i class="fa-solid fa-trash"></i></p>
        </div>
        <div className='u-a-j-middle p-2'>
            <p>{job?.description.substring(0,150)}...</p>
        </div>
        <div className='u-a-j-bottom flex items-center justify-between py-1 px-2'>
            <p className='text-zinc-400'><i class="fa-solid fa-file-waveform text-amber-500"></i> {"[120 Application]"}</p>
        </div>
    </div>
  )
}

export default UserAccountJobs