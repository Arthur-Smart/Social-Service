import React, {useState} from 'react'
import UserAccountJobs from '../../components/useraccountjobs/UserAccountJobs'
import UserAccountService from '../../components/useraccountservices/UserAccountService'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './account.css'

function Account() {
    const user = JSON.parse(localStorage.getItem("currentUser"))

    const [select, setSelect] = useState(true)
    const [authError, setAuthError] = useState(null)

    const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['serviceaccount'],
    queryFn: () =>
      axios(`https://serviceapi.onrender.com/api/service?userId=${user?._id}`).then((res) => {
        return res.data;
      })
  });

  const { isLoading:isLoadingJob, error:errorJob, data:dataJob, refetch:reftchJob } = useQuery({
    queryKey: ['jobaccount'],
    queryFn: () =>
      axios(`https://serviceapi.onrender.com/api/jobs?userId=${user?._id}`).then((res) => {
        return res.data;
      })
     
  });

   reftchJob()

console.log(select)
  
  return (
    <div className='user-account flex flex-col items-center justify-center py-10'>
        <div className='account-btns-wrapper pb-5 flex  items-center justify-center'>
          <div className='container  flex flex-wrap gap-2 select-btn-navigation items-center '>
                <button onClick={()=>setSelect(true)} className={select ? ' py-3 px-4 bg-amber-600 text-white rounded-full' : 'rounded-full py-3 px-4 bg-indigo-600 text-white'}>Posted Services</button>  
                <button  onClick={()=>setSelect(false)} className={!select ? 'py-3 px-4 bg-amber-600 text-white rounded-full' : 'rounded-full py-3 px-4 bg-indigo-600 text-white '}>Posted Jobs</button>  
                {/*<button  className='py-3 px-4 bg-green-400 text-white rounded-full'>Application</button>*/}
          </div>
        </div>
        
        <div className='container selection-wrapper flex flex-wrap items-center justify-center gap-2 pt-5'>
           
           {select ? (data?.length === 0 ? <p>You have no services created</p> : (data?.map(item => <UserAccountService setAuthError={setAuthError} item={item}/>))) : (dataJob?.length === 0 ? <p>You have no job posts. Post something</p> : (dataJob?.map(job => <UserAccountJobs job={job} reftchJob={reftchJob}/>)))}
            {/*select ? 'services' (data?.map(item => <UserAccountService item={item}/>)) : select ? 'jobs' (dataJob?.map(job => <UserAccountJobs job={job} reftchJob={reftchJob}/>)) : 'yolo'}
           {{data?.map(item => <UserAccountService item={item}/>)}}
            {dataJob?.map(job => <UserAccountJobs job={job} reftchJob={reftchJob}/>)*/}
           
            
        </div>
         {authError && <p className='text-amber-500'>{authError}. Please Login again to continue</p>}
    </div>
  )
}

export default Account