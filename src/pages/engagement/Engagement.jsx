import React, {useState} from 'react'
import Review from '../../components/review/Review'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './engagement.css'
import { useParams } from 'react-router-dom'
import Reviews from '../../components/reviews/Reviews'
import {Link} from 'react-router-dom'

function Engagement() {
  const [show, setShow] = useState(false)
 
  const {id} = useParams();
 
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['service'],
    queryFn: () =>
      axios(`http://localhost:8800/api/service/single/${id}`).then((res) => {
        return res.data;
      })
  })

  const { isLoading:isLoadingUser, error:errorUser, data:dataUser} = useQuery({
    queryKey: ['user'],
    queryFn: () =>
      axios(`http://localhost:8800/api/user/${data.userId}`).then((res) => {
        return res.data;
      })
  })

  const ownerEmail = dataUser?.email
  const handleEmail = () => {
    window.location.href = `mailto:${ownerEmail}`
  }

  const phone = '+254742068914'
  
  return (
    <div className='engagement flex flex-col items-center justify-center'>
        <div className='container m-eng-wrapper'></div>
       {isLoading ? "Loading" : error ? "Something went long" : <div className='container container-wrapper flex justify-between  mt-10'>
            <div className='engagement-left'>
              <div className='engagement-desc'>
                  <p className='font-bold text-xl text-zinc-500'>{data?.title}</p>
                  {isLoadingUser ? 'Loading' : errorUser ? 'Something went wrong' : (<div className='flex items-center mt-2 border-2 p-2'>
                    <img className='engagement-p-pic' src={dataUser?.userImage} />
                    <p className='font-bold text-black ml-2 font-bold text-lg'>{dataUser?.names}</p>
                    <div className='flex items-center ml-2'>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' >(5)</p>
                    </div>
                    <Link to={`/engagements?userId=${data?.userId}`}><button className='py-1 px-2 bg-red-500 ml-2 rounded-md text-white'>All my <span className='font-bold'>engagements</span></button></Link>
                  </div>)}
                  <img className='engagement-s-img mt-5' src={data?.image} alt='skills hub'/>
                  <p className='text-zinc-500 text-xl font-bold'>Engagement description</p>
                  <p>{data?.shortDescription}</p>
              </div>
              <div className='engagement-about'>
                <p className='text-zinc-500 text-xl font-bold'>About me</p>
                <p>{data?.description}</p>
                {/*<div className='flex flex-wrap items-center '>
                <p className='text-zinc-500 text-xl font-bold'>Skills</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7'>Python</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>JavaScript</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>Java</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>Golang</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>PHP</p>
                </div>*/}
              </div>
              {<Reviews serviceId={id}/>}
            </div>
            <div className='engagement-right justify-center flex '>
                  <div className='engagement-info border-2 p-2'>
                   <div className='flex items-center justify-between py-4 px-2 bg-gray-100'>
                      <p className='font-bold text-xl text-zinc-500'>Kes {data?.price} <span className='font-normal text-base'> {data?.isNegotiable ? "Negotiable" : "Fixed pricing"}</span></p>
                      <p>For the project</p>
                   </div>
                   <div className='flex items-center justify-between py-4 px-2 bg-gray-100 mt-2'>
                    <p className='font-bold text-xl text-zinc-500' >Location</p>
                    <p>{data?.location}</p>
                   </div>
                   <p className='text-zinc-500'>Such a project will take approximately 2 months to complete</p>
                  <button onClick={() => setShow(!show)} className='engagement-btn-btn py-3 text-white'>Contact Me</button>
                  {show && (
                      <div className='bg-gray-100 mt-2 p-2 contact-me flex items-center justify-between show'>
                    <a href={`tel:${phone}`}><p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-solid fa-phone-volume"></i></p></a>
                    <p onClick={() => handleEmail()} className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-regular fa-envelope"></i></p>
                    <a href={`whatsapp.com/send?phone=${phone}`}><p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-brands fa-square-whatsapp"></i></p></a>
                  </div>
                  )}                  
                  </div>
            </div>
        </div>}
    </div>
  )
}

export default Engagement