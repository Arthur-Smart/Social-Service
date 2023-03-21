import React, {useState} from 'react'
import Review from '../review/Review'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"

function Reviews({serviceId}) {
     const [changeText, setChangeText] = useState(false)
     const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
        axios(`http://localhost:8800/api/reviews/${serviceId}`).then((res) => {
            return res.data;
      })
  })
  return (
   <div className='reviews'>
              <div className='flex items-center justify-between mt-2 '>
                  <p className='text-zinc-500 text-xl font-bold'>Reviews</p>
                  <button onClick={() => setChangeText(!changeText)} className={changeText ? ' border-2 py-3 px-6 rounded-full review-btn text-white' : ' border-2 py-3 px-6 rounded-full hover:bg-amber-600 hover:border-amber-600 hover:text-white' }>{changeText ? 'Send Review' : 'Give Review'}</button>
              </div>
              {changeText && (
              <div className='flex flex-col items-center justify-between my-2'>
               <input className='review-input outline-0' type='text' placeholder='Write a review...'/>
                  <select className='mt-4 review-input outline-0 text-zinc-500 mb-4'>
                    <option>--Give a star rating--</option>
                    <option value='1'>1</option>
                    <option value='2'>2</option>
                    <option value='3'>3</option>
                    <option value='4'>4</option>
                  </select>                  
              </div> 
               )}
               {isLoading ? "Loading" : error ? "Something went wrong" : data.map((review) => <Review key={review._id} review={review}/>)}             
                
              </div>
  )
}

export default Reviews