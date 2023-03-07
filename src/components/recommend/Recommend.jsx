import React from 'react'
import './recommend.css'

function Recommend() {
  return (
    <div className='recommend flex  items-center justify-center'>
      <div className='container flex-col flex items-center justify-center'>
        <p className='text-white text-4xl text-center'><span className='recommend-title text-amber-500 font-bold text-6xl'>SkillHub</span><br /> The Leading Skill Search for Your Business in Kenya.</p>
        <div className='container mt-4 flex items-center justify-center'>
        
          <button className='border-2 py-2 px-5 rounded-full recommend-btn-1 text-white'>Hire a skill</button>
          <button className='border-2 py-2 px-5 rounded-full recomment-btn-2 ml-2 text-white'>Give reviews</button>
        </div>
      </div>
    </div>
  )
}

export default Recommend