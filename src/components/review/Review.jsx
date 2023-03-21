import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './review.css'

function Review({review}) {
  const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
        axios(`http://localhost:8800/api/reviews/${serviceId}`).then((res) => {
            return res.data;
      })
  });

  return (
    <div className='review flex items-center border-2 p-2 rounded-md mt-2'>
      <img className='engagement-p-pic' src={require('../../assets/mainbg.jpg')}/>
      <div className='ml-2 bg-gray-100 p-2 rounded-md'>
        <p className='font-bold text-zinc-700'>Mary Mwende</p>
        <p className='text-zinc-600'>{review?.description}</p>
        <p className='text-zinc-600'>{review?.createdAt}</p>
      </div>
    </div>
  )
}

export default Review