import React from 'react'
import './howtoengage.css'

function HowToEngage() {
  return (
    <div className='engagement flex items-center justify-center pt-10 pb-10'>
        <div className='container main-e-wrapper'>
            <div className='engagement-wrapper'>
            <p className='text-3xl font-bold text-zinc-600'>How to create a job skill engagement</p>
            <p className='text-zinc-500'>Follow the three processes below to get started</p>
             <div className='flex flex-col items-start p-2 single-tab-engagement rounded-md mt-4'>
                <div>
                    <img className='engagement-img' src={require('../../assets/account.png')} alt='skills hub'/>
                </div>
                <div>
                  <p className='text-xl font-medium text-zinc-600'>Create your own account(It's free)</p>
                  <p className='text-zinc-500'>An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.</p>
                </div>
             </div>

             <div className='flex flex-col items-start p-2 single-tab-engagement rounded-md mt-4'>
                <div>
                    <img className='engagement-img' src={require('../../assets/explore.png')} alt='skills hub'/>
                </div>
                <div>
                  <p className='text-xl font-medium text-zinc-600'>Explore skill or job</p>
                  <p className='text-zinc-500'>An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.</p>
                </div>
             </div> 

             <div className='flex flex-col items-start p-2 single-tab-engagement rounded-md mt-4'>
                <div>
                    <img className='engagement-img' src={require('../../assets/motivation.png')} alt='skills hub'/>
                </div>
                <div>
                  <p className='text-xl font-medium text-zinc-600'>Start a job skill engagement</p>
                  <p className='text-zinc-500'>An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.</p>
                </div>
             </div> 

             <div>
                <button className='py-3 px-5 rounded-full get-started-btn text-white cursor-pointer mt-3'>Get started</button>
             </div>
            </div>
        </div>
    </div>
  )
}

export default HowToEngage