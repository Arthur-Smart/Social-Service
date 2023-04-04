import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import SingleJob from '../../components/singlejob/SingleJob'
import './jobs.css'

function Jobs() {
     const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['postedJobs'],
        queryFn: () =>
        axios(`https://serviceapi.onrender.com/8800/api/jobs/`).then((res) => {
            return res.data;
      })
  });
  return (
    <div className='jobs flex flex-col items-center justify-center'>
        <div className='container py-4 filters-wrapper'>
            <p className='text-zinc-500 text-base font-medium'>There are {data?.length} Available Jobs</p>
        </div>
        <div className='container posted-jobs-wrapper flex flex-wrap gap-3 items-center justify-between mt-10'>
            {data?.map((job) =><SingleJob key={job._id} job={job}/>)}
        </div>
        <div>
        </div>
    </div>
  )
}

export default Jobs