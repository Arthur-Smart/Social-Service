import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import moment from "moment"
import './review.css'

function Review({review}) {
  const user = JSON.parse(localStorage.getItem('currentUser'))
  const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['userReviews'],
        queryFn: () =>
        axios(`http://localhost:8800/api/user/${review.userId}`).then((res) => {
            return res.data;
      })
  });

  return (
    <div className='review flex items-center w-full border-2 p-2 rounded-md mt-2'>
      <img className='engagement-p-pic' src={data?.userImage} alt='Skills hub'/>
      <div className='ml-2 bg-gray-100 flex p-2 rounded-md'>
        <div>
          <p className='font-bold text-zinc-700'>{data?.name}</p>
          <p className='text-zinc-600'>{review?.description}</p>
          <p className='text-zinc-600'>{moment(review?.createdAt).fromNow()}</p>
        </div>  
          {user?._id === review?.userId && (<p className='ml-5'><i class="fa-solid fa-trash"></i></p>)}     
            
      </div>
    </div>
  )
}

export default Review