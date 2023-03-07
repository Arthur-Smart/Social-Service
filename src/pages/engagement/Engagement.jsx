import React, {useState} from 'react'
import Review from '../../components/review/Review'
import './engagement.css'

function Engagement() {
  const [show, setShow] = useState(false)
  const [changeText, setChangeText] = useState(false)
  return (
    <div className='engagement flex flex-col items-center justify-center'>
        <div className='container'></div>
        <div className='container flex justify-between  mt-10'>
            <div className='engagement-left'>
              <div className='engagement-desc'>
                  <p className='font-bold text-2xl text-zinc-500'>I will design a professional minimalist modern business logo</p>
                  <div className='flex items-center mt-2'>
                    <img className='engagement-p-pic' src={require('../../assets/mainbg.jpg')} />
                    <p className='font-bold text-black ml-2 font-bold text-lg'>Paul Njoroge</p>
                    <div className='flex items-center ml-2'>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' ><i class="fa-solid fa-star"></i></p>
                      <p className='text-amber-500 font-bold' >(5)</p>
                    </div>
                    <button className='py-1 px-2 bg-red-500 ml-2 rounded-md text-white'>All my <span className='font-bold'>engagements</span></button>
                  </div>
                  <img className='engagement-img mt-5' src={require('../../assets/mainbg.jpg')} alt='skills hub'/>
                  <p className='text-zinc-500 text-xl font-bold'>Engagement description</p>
                  <p>First impressions are important. Your logo is on every page of your website, the main element for your branding and the core of your marketing material. It symbolizes everything you stand for.</p>
              </div>
              <div className='engagement-about'>
                <p className='text-zinc-500 text-xl font-bold'>About me</p>
                <p>First impressions are important. Your logo is on every page of your website, the main element for your branding and the core of your marketing material.</p>
                <p className='text-zinc-500 text-xl font-bold'>Skills</p>
                <div className='flex flex-wrap items-center '>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7'>Python</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>JavaScript</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>Java</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>Golang</p>
                  <p className='border-2 border-amber-500 rounded-full py-2 px-7 ml-2'>PHP</p>
                </div>
              </div>
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
                <Review/>
                <Review/>
                <Review/>
                <Review/>
                <Review/>
              </div>
            </div>
            <div className='engagement-right justify-center flex '>
                  <div className='engagement-info border-2 p-2'>
                   <div className='flex items-center justify-between py-4 px-2 bg-gray-100'>
                      <p className='font-bold text-xl text-zinc-500'>Kes, 20000 <span className='font-normal text-base'> (Negotiable)</span></p>
                      <p>For the project</p>
                   </div>
                   <div className='flex items-center justify-between py-4 px-2 bg-gray-100 mt-2'>
                    <p className='font-bold text-xl text-zinc-500' >Location</p>
                    <p>Nakuru-Gatehouse, Kenya</p>
                   </div>
                   <p className='text-zinc-500'>Such a project will take approximately 2 months to complete</p>
                  <button onClick={() => setShow(!show)} className='engagement-btn-btn py-3 text-white'>Contact Me</button>
                  {show && (
                      <div className='bg-gray-100 mt-2 p-2 contact-me flex items-center justify-between show'>
                    <p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-solid fa-phone-volume"></i></p>
                    <p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-regular fa-envelope"></i></p>
                    <p className='text-lg text-zinc-600 cursor-pointer' ><i class="fa-regular fa-comments"></i></p>
                  </div>
                  )}                  
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Engagement