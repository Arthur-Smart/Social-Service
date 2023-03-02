import React from 'react'
import './homehero.css'

function HomeHero() {
  return (
    <div className='homehero flex items-center justify-center'>
        <div className='container'>
            <div className='homehero-wrapper'>
                <p className='text-6xl text-amber-500 font-black mb-3 font-animate'>SkillsHub.</p>
                <p className='text-4xl  text-white'>Simplify the process of finding skilled <span className='professional text-6xl'>professionals</span> for any <span className='professional text-6xl'>job</span> in your location. </p>
                <div className='flex flex-col mt-4'>
                    <input className='skill-s-input mb-2 px-2 py-3 outline-0 rounded-md' type='text' placeholder='Search a skill'/>
                    <div className='location-button items-center  flex'>
                        <input className='location-s-input mb-25 px-2 py-3 outline-0 ' type='Type Location' placeholder='Location'/>
                        <button className='flex  text-white bg-amber-500 self-start search-btn bg-red-500 py-3 px-10  text-center'>Search</button>
                    </div>
                    <div className='flex items-center mt-2'>
                      <p className='text-white  py-2 px-3 rounded-full border-2' >Graphic designer</p>
                      <p className='text-white ml-4 py-2 px-3 rounded-full border-2' >Plumber</p>
                      <p className='text-white ml-4 py-2 px-3 rounded-full border-2' >Software developer</p>
                      <p className='text-white ml-4 py-2 px-3 rounded-full border-2' >House builder</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default HomeHero