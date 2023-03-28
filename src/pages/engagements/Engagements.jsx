import React, {useState, useEffect} from 'react'
import EngagementCard from '../../components/engagementcard/EngagementCard'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import {useLocation} from 'react-router-dom'
import './engagements.css'

function Engagements() {

  const {search} = useLocation()
  const [sort, setSort] = useState('price')

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['services'],
    queryFn: () =>
      axios(`http://localhost:8800/api/service${search}`).then((res) => {
        return res.data;
      })
  })

  //useEffect(() => {
    //refetch();
 // },[sort])

 
  console.log(data)
  return (
    <div className='engagements flex flex-col items-center justify-center'>
        <div className='container filters-wrapper mt-10'>
         <select onChange={(e) => setSort(e.target.value)} className='py-2 px-16 outline-0 border-2'>
            <option value='latest'>Latest</option>
            <option value='bestselling'>Best Selling</option>
            
         </select>

         {/*<select className='py-2 ml-3 px-16 outline-0 border-2'>
            <option >Range</option>
            <option value='latest'>0-50</option>
            <option value='latest'>50-200</option>
            <option value='latest'>200-1000</option>
            <option value='latest'>Above 1000</option>
         </select>*/}    
        </div>
        <div className='container length-wrapper mt-4'>
            <p className='font-bold text-xl text-zinc-500'>{data.length} services available</p>
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