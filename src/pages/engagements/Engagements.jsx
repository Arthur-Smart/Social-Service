import React, {useState, useEffect} from 'react'
import EngagementCard from '../../components/engagementcard/EngagementCard'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import {useLocation} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import './engagements.css'

function Engagements() {

  const {search} = useLocation()
  const [title, setTitle] = useState('')
  const navigate = useNavigate()

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['services'],
    queryFn: () =>
      axios(`http://localhost:8800/api/service${search}`).then((res) => {
        return res.data;
      })
  })

  const handleSearch = () =>{
    if(title !== '' ){
      navigate(`?search=${title}`)
      setTitle('')        
    } else{
       alert('Please enter a title')
    }
  }

  useEffect(() => {
  refetch();
  },[title])

 
  console.log(data)
  return (
    <div className='engagements flex flex-col items-center justify-center'>
        <div className='container length-wrapper mt-7'>
            <p className='font-bold text-xl text-zinc-500'>{data?.length} services available</p>
        </div>
        <div className='container bg-indigo-600 filters-wrapper mt-2'>
         <div className='quick-search  flex items-center justify--between'>
          <input value={title} onChange={(e) => setTitle(e.target.value)} className='outline-0 py-3 px-3' type='text' placeholder='Quick search...'/>
          <button onClick={() => handleSearch()} className='py-2 px-3'><p className='text-white'><i class="fa-solid fa-magnifying-glass fa-beat-fade"></i></p></button>
         </div>   
        </div>
        
        <div className='container e-main-wrapper mt-3 flex flex-wrap  items-center justify-center gap-4'>
            {
              isLoading ? "loading" : error ? "Something went wrong" : 
              data.map((service) => <EngagementCard key={service._id} item={service}/>)
            }

            
        </div>
    </div>
  )
}

export default Engagements