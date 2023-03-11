import React from 'react'
import './jobpage.css'

function JobPage() {
  return (
    <div className='jobpage flex items-center justify-center'>
        <div className='container flex items-center justify-center mt-10'>
            <div className='jobpage-wrapper rounded-lg py-3'>
                <div className='title-project p-3'>
                    <div className='flex items-center'>
                        <img className='j-p-image' src={require('../../assets/mainbg.jpg')} alt='skill hub'/>
                        <p className='ml-3 text-zinc-600 font-medium'>John Mwaniki</p>
                    </div>
                        <p className='text-amber-500 text-lg font-medium mt-4'>Mobile app development</p>
                        <p className='text-zinc-500 font-semibold'>Published 4 minutes ago</p>
                        <p>Nyeri</p>
                </div>
                <div className='j-p-description p-3'>
                    <p>I have a website created in python, Django ( its an api) and I need help adding a payment system. I had hired developer before who ad started implementing the system but he is having a little trouble integrating some of the parts. Upon hire, I will link you to the developer so that he can explain in details, whats needed.
                        I will provide the code that I want adding the payment system upon hire. Thanks.</p>
                </div>
                <div className='j-p-skills p-3'>
                    <p>Skills required</p>
                    <div className='flex items-center gap-2'>
                        <p className='skill-text rounded-full border-2 border-amber-500 py-2 px-5'>Python</p>
                        <p className='skill-text rounded-full border-2 border-amber-500 py-2 px-5'>JavaScript</p>
                        <p className='skill-text rounded-full border-2 border-amber-500 py-2 px-5'>SQL</p>
                    </div>
                </div>

                <div className='j-p-payment p-3'>
                    <p>Bugeted payment</p>
                    <p>Kes 20,000</p>
                </div>
                <button className='ml-3'>Apply</button>
            </div>
        </div>
    </div>
  )
}

export default JobPage