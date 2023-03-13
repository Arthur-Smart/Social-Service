import React from 'react'
import './register.css'

function Register() {
  return (
    <div className='register flex flex-col items-center justify-center'>
        <div className='register-wrapper bg-white flex flex-col items-center justify-center rounded-md'>
            <div>
                <p>Join SkillsHub</p>
            </div>
            <div className='w-full px-2 py-3'>
                <div className='w-full bg-blue-600 py-3 px-2 rounded-full'>
                    <p>Join using facebook</p>
                </div>

                <div className='border-gray-200 google-btn w-full mt-2 py-4 px-2 rounded-full'>
                    <p>Join using Google</p>
                </div>
            </div>

            <div className=' flex items-center justify-between w-full px-2'>
                <div className='join-line border-gray-200'></div>
                    <p>OR</p>
                <div className='join-line border-gray-200'></div>
            </div>
            <div className='flex flex-col items-center w-full px-2'>
                <input className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='text' placeholder='Enter name'/>
                <input className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='email' placeholder='Enter Email'/>
                <input className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='password' placeholder='Enter password'/>
            </div>
            <div className='px-2 py-3 w-full'>
                <button className='py-3 px-2 rounded-full bg-amber-500 w-full text-white'>Join</button>
            </div>
        </div>
    </div>
  )
}

export default Register