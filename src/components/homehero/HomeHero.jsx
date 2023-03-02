import React from 'react'
import './homehero.css'

function HomeHero() {
  return (
    <div className='homehero flex items-center justify-center'>
        <div className='container'>
            <div className='homehero-wrapper'>
                <p className='text-6xl text-amber-500 font-black mb-3'>SkillsHub.</p>
                <p className='text-5xl font-bold text-white'>Simplify the process of finding skilled professionals for any job in your location. </p>
                <div className='flex flex-col mt-4'>
                    <input className='skill-s-input mb-2 px-2 py-3 outline-0' type='text' placeholder='Search a skill'/>
                    <input className='skill-s-input mb-25 px-2 py-3 outline-0' type='Type Location' placeholder='Location'/>
                    <button className='flex  bg-amber-500 self-start search-btn bg-red-500 mt-2 py-3 px-10 rounded-full text-center'>Search</button>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default HomeHero