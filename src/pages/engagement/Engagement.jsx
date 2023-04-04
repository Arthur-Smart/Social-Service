import React, {useState, useEffect} from 'react'
import Review from '../../components/review/Review'
import { useQuery } from '@tanstack/react-query'
import axios from "axios"
import './engagement.css'
import { useParams } from 'react-router-dom'
import Reviews from '../../components/reviews/Reviews'
import {Link} from 'react-router-dom'

function Engagement() {
  const [show, setShow] = useState(false)
  const [dataUser, setDataUser] = useState({})
 
  const {id} = useParams();
  const user = JSON.parse(localStorage.getItem('currentUser'))
  
 

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ['service'],
    queryFn: () =>
      axios(`https://serviceapi.onrender.com/api/service/single/${id}`).then((res) => {
        return res.data;
      })
  })

  useEffect(() => {
  const getData = async ()=> {
    const res = await  axios(`https://serviceapi.onrender.com/api/user/${data?.userId}`)
    setDataUser(res.data)
  }
  getData()
 },[data?.userId])

  //const { isLoading:isLoadingUser, error:errorUser, data:dataUser} = useQuery({
  //  queryKey: ['user'],
  //  queryFn: () =>
  //    axios(`https://serviceapi.onrender.com/api/user/${data?.userId}`).then((res) => {
  //      return res.data;
  //    })
  //})

  const ownerEmail = dataUser?.email
  const handleEmail = () => {
    window.location.href = `mailto:${ownerEmail}`
  }

  
  return (
    <div className='engagement flex flex-col items-center justify-center'>
        <div className='container m-eng-wrapper'></div>
       <div className='container container-wrapper flex justify-between  mt-10'>
            <div className='engagement-left'>
              <div className='engagement-desc'>
                  <p className='font-bold text-xl text-zinc-500'>{data?.title}</p>
                  <div className='flex items-center mt-2 border-2 p-2'>
                    {dataUser?.userImage ? <img className='engagement-p-pic' src={dataUser?.userImage} alt='SkillsHub' /> : <img  className='engagement-p-pic' src={require('../../assets/avatar.jpg')} alt='Skills hub'/>}
                    <p className='font-bold text-black ml-2 font-bold text-lg'>{dataUser?.names}</p>
                    <Link to={`/engagements?userId=${data?.userId}`}><button className='py-1 px-2 bg-red-500 ml-2 rounded-md text-white'>All my <span className='font-bold'>engagements</span></button></Link>
                  </div>
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
                  {show && user !==null ? (
                      <div className='bg-gray-100 mt-2 p-2 contact-me flex items-center justify-between show'>
                    <a href={`tel:${data?.phone}`}><p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-solid fa-phone-volume"></i></p></a>
                    <p onClick={() => handleEmail()} className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-regular fa-envelope"></i></p>
                    <a href={`whatsapp.com/send?phone=${data?.phone}`}><p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-brands fa-square-whatsapp"></i></p></a>
                  </div>
                  ) : show &&  <p>Please login to continue</p>}                  
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Engagement