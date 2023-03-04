import React from 'react'
import './howtoengage.css'

function HowToEngage() {
  return (
    <div className='engagement flex items-center justify-center'>
        <div className='container'>
            <div className='engagement-left'>
            <p>How to create an engagement</p>
             <div className='flex flex-col items-start p-2 single-tab-engagement rounded-md'>
                <div>
                    <img src={require('../../assets/explore.png')} alt='skills hub'/>
                </div>
                <div>
                  <p className='text-lg font-medium text-zinc-600'>Create your own account(It's free)</p>
                  <p className='text-zinc-500'>An eye-catching title and client-focused overview help us match you to the work you want. Include your work history, your skills, and your photo. Add more, like an introduction video, to create a profile that really stands out.</p>
                </div>
             </div>   
            </div>
            <div className='engagement-right'>

            </div>
        </div>
    </div>
  )
}

export default HowToEngage