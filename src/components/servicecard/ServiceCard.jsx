import React from 'react'
import './servicecard.css'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

function ServiceCard({item}) {
  const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['userJobOwner'],
        queryFn: () =>
        axios(`https://serviceapi.onrender.com/api/user/${item?.userId}`).then((res) => {
            return res.data;
      })
  });

  return (
    <Link to={`/engagement/${item?._id}`}>
          <div className='service-card border-gray-200 s-card-border cursor-pointer'>
          <img className='service-img' src={item?.image} alt='skills hub'/>
          {/*isLoading ? 'Loading...' : error ? 'Something went wrong' :(
             <div className='name-profile flex items-center p-2'>
              {data?.userImage ? <img className='service-owner-pic' src={data?.userImage} alt='skills hub'/> : <img className='service-owner-pic' src={require('../../assets/avatar.jpg')} alt='Skills hub'/>}
              <p className='ml-2 text-zinc-500'>{data?.name}</p>
          </div>
          )*/}
         
          <div className='name-profile px-2'>
              <p className='ml-2 text-zinc-800 text-xl font-bold'>{item?.title}</p>
              <p className='ml-2 text-zinc-500'>{item?.shortDescription.substring(0,80)}...</p>
          </div>
          <div className='price-tab bg-amber-500'>
              <p className='text-white'>Kes {item?.price}</p>
          </div>
      </div>     
    </Link>
  )
}

export default ServiceCard