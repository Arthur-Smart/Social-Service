import React from 'react'
import './engagementcard.css'

function EngagementCard() {
    const desc = 'Welcome to my modern minimalist logo gig! As a professional graphic designer, I have a passion for creating visually stunning designs that effectively represent a brand. With my gig, you can expect to receive a unique and professional logo that is tailored to your specific design needs.'
  return (
    <div className='engagementcard border-2'>
        <img className='engagement-c-img' src={require('../../assets/mainbg.jpg')} alt='Skills hub'/>
        <div className='profile-info flex items-center p-2'>
            <img className='engagement-p-img cursor-pointer' src={require('../../assets/mainbg.jpg')} alt='Skills hub'/>
            <div className='ml-2 '>
                <p className='text-zinc-500 font-medium'>Duncan Njoroge</p>
                <p className='text-amber-500 font-bold text-lg -mt-2 cursor-pointer'>Drawing Artist</p>
            </div>
        </div>
        <div className='p-2'>
            <p className='text-zinc-600'>{desc.substring(0,150)}...</p>
        </div>
        <div className='engagement-c-like-comment flex items-center justify-between p-2'>
            <p className='text-zinc-600 cursor-pointer font-medium' ><i class="fa-regular fa-thumbs-up"></i> 12</p>
            <p className='text-zinc-600 cursor-pointer font-medium' ><i class="fa-regular fa-comment"></i> 102</p>
        </div>
        <div className='price-tab bg-amber-500 flex flex-col'>
            <p className='text-white font-bold'>Kes 2000</p>
            <p className='-mt-2 text-white'>(Price negotiable)</p>
        </div>
    </div>
  )
}

export default EngagementCard