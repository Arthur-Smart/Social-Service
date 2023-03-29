import React from 'react'
import {Link} from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './engagementcard.css'

function EngagementCard({item}) {
 const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['serviceOwner'],
    queryFn: () =>
      axios(`https://talented-pink-buckle.cyclic.app/api/user/${item?.userId}`).then((res) => {
        return res.data;
      })
  });


   const { isLoading:isLoadingReview, error:errorReview, data:dataReview} = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
        axios(`https://talented-pink-buckle.cyclic.app/api/reviews/${item?._id}`).then((res) => {
            return res.data;
      })
  });
  

  return (
   <Link to={`/engagement/${item._id}`}>
   <div className='engagementcard border-2'>
        <img className='engagement-c-img' src={item.image} alt='Skills hub'/>
        {isLoading ? "Loading" : error ? "Something went wrong" : (<div className='profile-info flex items-center p-2'>
            <img className='engagement-p-img cursor-pointer' src={data.userImage} alt='Skills hub'/>
            <div className='ml-2 '>
                <p className='text-zinc-500 font-medium'>{data.name}</p>
                <p className='text-amber-500 font-bold text-lg -mt-2 cursor-pointer'>{item.title.substring(0,21)}...</p>
            </div>
        </div>)}
        <div className='p-2'>
            <p className='text-zinc-600'>{item.description.substring(0,150)}...</p>
        </div>
        <div className='w-full engagement-c-like-comment flex items-center justify-between p-2'>
            <p className='text-zinc-600 cursor-pointer font-medium' ><i class="fa-solid fa-heart"></i> 12</p>
            <p className='text-zinc-600 cursor-pointer font-medium' ><i class="fa-regular fa-comment"></i> {dataReview?.length}</p>
        </div>
        <div className='price-tab bg-amber-500 flex flex-col'>
            <p className='text-white font-bold'>Kes {item.price}</p>
            {item.isNegotiable ?  (<p className='-mt-2 text-white'>(Price negotiable)</p>) : (<p className='-mt-2 text-white'>(Price is fixed)</p>)}
           
        </div>
    </div>
    </Link>
  )
}

export default EngagementCard