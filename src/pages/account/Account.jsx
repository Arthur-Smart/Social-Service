import React from 'react'
import UserAccountJobs from '../../components/useraccountjobs/UserAccountJobs'
import UserAccountService from '../../components/useraccountservices/UserAccountService'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './account.css'

function Account() {
    const user = JSON.parse(localStorage.getItem("currentUser"))
    const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['serviceaccount'],
    queryFn: () =>
      axios(`http://localhost:8800/api/service?userId=${user?._id}`).then((res) => {
        return res.data;
      })
  });

  const { isLoading:isLoadingJob, error:errorJob, data:dataJob, refetch:reftchJob } = useQuery({
    queryKey: ['jobaccount'],
    queryFn: () =>
      axios(`http://localhost:8800/api/jobs?userId=${user?._id}`).then((res) => {
        return res.data;
      })
     
  });

   reftchJob()

  
  return (
    <div className='user-account flex flex-col items-center justify-center py-10'>
        <div className='account-btns-wrapper pb-5 flex items-center justify-center'>
            <div className='container flex items-center '>
              <button className='account-active-btn py-3 px-4 bg-indigo-600 text-white'>Posted Services</button>  
              <button className='py-3 px-4 bg-indigo-600 text-white ml-3'>Posted Jobs</button>  
              <button className='py-3 px-4 bg-indigo-600 text-white ml-3'>Application</button>  
        </div>
        </div>
        
        <div className='container flex flex-wrap items-center justify-center gap-2 pt-5'>
           {/*{data?.map(item => <UserAccountService item={item}/>)}*/}
            {dataJob?.map(job => <UserAccountJobs job={job} reftchJob={reftchJob}/>)}
            
        </div>
    </div>
  )
}

export default Account