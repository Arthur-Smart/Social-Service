import React from 'react'
import './homehero.css'

function HomeHero() {
  return (
    <div className='homehero flex items-center justify-center'>
        <div className='container'>
            <div className='homehero-left'>
                <p className='text-6xl text-amber-500 font-black mb-3'>SkillsHub.</p>
                <p className='text-5xl font-bold text-white'>Simplify the process of finding skilled professionals for any job in your location. </p>
                <div className='flex flex-col'>
                    <input className='skill-s-input mb-2 px-2 py-3' type='text'/>
                    <input className='skill-s-input mb-2 px-2 py-3' type='Type Location'/>
                    <button className='mt-4'>Search</button>
                </div>
            </div>
            <div className='homehero-right'>

            </div>
        </div>
    </div>
  )
}

export default HomeHero