import React, {useState} from 'react'
import Review from '../review/Review'
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query'
import axios from "axios"

function Reviews({serviceId}) {
     //const [changeText, setChangeText] = useState(false)
     const [description, setDescription] = useState('')
     const queryClient = useQueryClient() 
     
     const { isLoading, error, data, refetch } = useQuery({
        queryKey: ['reviews'],
        queryFn: () =>
        axios(`http://localhost:8800/api/reviews/${serviceId}`).then((res) => {
            return res.data;
      })
  });

  const mutation = useMutation({
    mutationFn: (review) => {
      return axios.post('http://localhost:8800/api/reviews',review, {withCredentials:true})
    },
    onSuccess:() => {
      queryClient.invalidateQueries(["reviews"])
    }
  });

  //const userId = JSON.parse(localStorage.getItem("currentUser"))?._id;

  const handleSubmit = async () => {
    //console.log(userId)
   //const res = await axios.post('http://localhost:8800/api/reviews/', {serviceId, description},
   //{withCredentials:true});
    //console.log(res);
    mutation.mutate({serviceId, description})
  }

  //({userId, serviceId, userReview})
  return (
   <div className='reviews w-full'>
              <div className='flex items-center justify-between mt-2 '>
                  <p className='text-zinc-500 text-xl font-bold'>Reviews</p>
                  <button onClick={() => handleSubmit()} className=' border-2 py-3 px-6 rounded-full hover:bg-amber-600 hover:border-amber-600 hover:text-white' >Send review</button>
              </div>
         
              <div className='flex flex-col items-center justify-between my-2'>
               <input onChange={(e) => setDescription(e.target.value)} className='review-input outline-0' type='text' placeholder='Write a review...'/>              
              </div> 
           
               <div className='w-full'>
               {isLoading ? "Loading" : error ? "Something went wrong" : data.map((review) => <Review key={review._id} review={review}/>)}             

               </div>
                
              </div>
  )
}

export default Reviews