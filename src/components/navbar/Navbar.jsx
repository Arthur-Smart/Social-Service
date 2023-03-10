import React from 'react'
import './navbar.css'

function Navbar() {
  return (
    <div className='navbar flex items-center justify-center'>
        <div className='container flex items-center justify-between'>
            <div className='left-nav'>
                <p className='font-bold text-3xl cursor-pointer'>Skills<span className='text-amber-500'>Hub</span></p>
            </div>
            <div className='right-nav flex items-center justify-end'>
                <p className='mr-6 text-lg font-medium text-amber-500 cursor-pointer ' >Find a skill</p>
                <p className='mr-6 text-lg font-medium text-amber-500 cursor-pointer ' >Why SkillsHub</p>
                <button className='mr-6 border-amber-500 rounded-full py-2 px-8 border-2 text-lg font-medium'>Login</button>
                <button className='bg-black px-8 py-2 border-black border-2 rounded-full text-lg font-medium text-amber-500'>Join</button>
                <div className='flex items-center notifications bg-amber-500 ml-6'>
                    <p className='nav-icons flex items-center justify-center text-white'><i class="fa-regular fa-message"></i></p>
                    <div className='num-of-messages'><p className='text-white font-bold text-center message'>0</p></div>
                </div>
                
            </div>
            
        </div>
    </div>
  )
}

export default Navbar