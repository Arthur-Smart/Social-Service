import React, {useState} from 'react'
import OtherJobs from '../../components/otherjobs/OtherJobs'
import './jobpage.css'

function JobPage() {
    const [open, setOpen] = useState(false)
  return (
    <div className='jobpage flex flex-col items-center justify-center'>
        <div className='container flex items-center justify-center mt-10'>
            <div className='jobpage-wrapper rounded-lg py-3'>
                <div className='title-project p-3'>
                    <div className='flex items-center justify-between'>
                        <div className='flex items-center'>
                            <img className='j-p-image' src={require('../../assets/mainbg.jpg')} alt='skill hub'/>
                            <p className='ml-2 text-zinc-600 font-semibold'>John Mwaniki</p>
                        </div>
                        <p className='text-indigo-700 text-2xl cursor-pointer' title='Chat with me'><i class="fa-solid fa-comments"></i></p>
                    </div>
                        <p className='text-amber-500 text-lg font-medium mt-4'>Mobile app development</p>
                        <p className='text-zinc-500 font-semibold'>Published 4 minutes ago</p>
                        <p><i class="fa-solid fa-location-dot"></i> Nyeri</p>
                </div>
                <div className='j-p-description p-3'>
                    <p className='text-zinc-500'>I have a website created in python, Django ( its an api) and I need help adding a payment system. I had hired developer before who ad started implementing the system but he is having a little trouble integrating some of the parts. Upon hire, I will link you to the developer so that he can explain in details, whats needed.
                        I will provide the code that I want adding the payment system upon hire. Thanks.</p>
                </div>
                <div className='j-p-skills p-3'>
                    <p className='text-zinc-600 font-semibold'>Skills required</p>
                    <div className='flex items-center gap-2'>
                        <p className='skill-text text-zinc-500 rounded-full border-2 border-amber-500 py-2 px-5'>Python</p>
                        <p className='skill-text text-zinc-500 rounded-full border-2 border-amber-500 py-2 px-5'>JavaScript</p>
                        <p className='skill-text text-zinc-500 rounded-full border-2 border-amber-500 py-2 px-5'>SQL</p>
                    </div>
                </div>

                <div className='j-p-payment p-3'>
                    <p className='font-medium text-zinc-500'>Bugeted payment</p>
                    <p className='text-zinc-500'><i class="fa-solid fa-coins"></i> Kes 20,000</p>
                </div>
                <button onClick={() => setOpen(true)} className='ml-3 apply-btn py-3 px-4 rounded-full text-white'>Apply</button>
            </div>
        </div>

        {/*Same clients job*/}
        <div className='similar-jobs mt-10 flex items-center justify-center py-2'>
            <div className='container'>
                <p className='text-white  text-lg similar-title mt-4'>Other job posting by John Mwaniki | <span className='text-amber-500 font-bold'>20 other jobs</span></p>
                <div className='other-jobs-wrapper flex flex-wrap items-center gap-2 justify-center'>
                    <OtherJobs/>
                    <OtherJobs/>
                    <OtherJobs/>
                </div>
            </div>
        </div>

        {/*Apply module */}
        {open && (
            <div className='apply flex flex-col items-center justify-center'>
            <div className='apply-wrapper rounded-md bg-white p-3 flex flex-col items-center justify-center'>
                <input className='py-2 px-2 border-2 border-indigo-200 outline-0 text-zinc-500 w-full' type='text' placeholder='Enter email'/>
                <input className='py-2 px-2 border-2 border-indigo-200  outline-0 text-zinc-500 w-full mt-2' type='text' placeholder='Enter phone number'/>
                <textarea className='apply-textarea py-2 px-2 border-2 border-indigo-200  outline-0 text-zinc-500 mt-2' placeholder='Write a proposal'></textarea>
                <input type='file' id='upload' style={{display:'none'}}/>
                <div className='w-full items-start flex items-center py-2 justify-between'>
                   <label className='flex-start border-2 text-white cursor-pointer border-amber-100 rounded-full py-2 px-5 mt-2 bg-amber-500' htmlFor='upload'>Upload Resume</label>
                    <button disabled className='item-start  apply-btn py-2 px-4 rounded-full text-white'>Publish</button>
                </div>                
            </div>
            <div className='items-start close-apply-btn'>    
                 <p onClick={() => setOpen(false)} className='text-white text-lg cursor-pointer'><i class="fa-solid fa-rectangle-xmark"></i></p>            
            </div>
        </div>
        ) }
        
    </div>
  )
}

export default JobPage