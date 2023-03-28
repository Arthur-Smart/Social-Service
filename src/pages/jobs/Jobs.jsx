import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import SingleJob from '../../components/singlejob/SingleJob'
import './jobs.css'

function Jobs() {
     const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['postedJobs'],
        queryFn: () =>
        axios(`http://localhost:8800/api/jobs/`).then((res) => {
            return res.data;
      })
  });
  return (
    <div className='jobs flex flex-col items-center justify-center'>
        <div className='container py-8 filters-wrapper'>
            <p className='text-zinc-500 text-base font-medium'>There are 3500 Available Jobs</p>
            <select  className='py-2 px-16 outline-0 border-2'>
            <option value='latest'>Latest</option>
            <option value='bestselling'>Best Selling</option>
            
         </select>
        </div>
        <div className='container posted-jobs-wrapper flex flex-wrap gap-3 items-center justify-between mt-4'>
            {data?.map((job) =><SingleJob key={job._id} job={job}/>)}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Jobs