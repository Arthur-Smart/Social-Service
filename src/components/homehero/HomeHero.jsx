import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import './homehero.css'

function HomeHero() {
  const [title, setTitle] = useState('')
  const [location, setLocation] = useState('')
  const navigate = useNavigate()

  const handleSearch = () =>{
    if(title !== '' && location !== ''){
      navigate(`engagements?search=${title}&location=${location}`)        
    } else{
       alert('Please enter a title and a location')
    }
  }

  return (
    <div className='homehero flex items-center justify-center'>
        <div className='container main-wrapper'>
            <div className='homehero-wrapper'>
                <p className='text-6xl text-amber-500 font-black mb-3 font-animate text-h-logo'>SkillsHub.</p>
                <p className='text-4xl hero-text-m  text-white'>Simplify the process of finding skilled <span className='professional text-6xl'>professionals</span> for any <span className='professional text-6xl'>job</span> in your location. </p>
                <div className='flex  flex-col mt-4'>
                    <input onChange={(e) => setTitle(e.target.value)} value={title} className='skill-s-input mb-2 px-2 py-3 outline-0 rounded-md' type='text' placeholder='Search a skill'/>
                    <div className='location-button-2 items-center  justify-between  flex'>
                        <input onChange={(e) => setLocation(e.target.value)} value={location} className='location-s-input mb-25 px-2 py-3 outline-0 ' type='Type Location' placeholder='Location'/>
                        <button onClick={() => handleSearch()} className='text-white self-start search-q-btn bg-red-500 py-3 px-10  text-center'>Search</button>
                    </div>
                    <div className='flex flex-wrap gap-2 items-center mt-2'>
                      <p className='text-white  py-2 px-3 rounded-full border-2' >Graphic designer</p>
                      <p className='text-white py-2 px-3 rounded-full border-2' >Plumber</p>
                      <p className='text-white py-2 px-3 rounded-full border-2' >Software developer</p>
                      <p className='text-white py-2 px-3 rounded-full border-2' >House builder</p>
                    </div>
                </div>
            </div>
           
        </div>
    </div>
  )
}

export default HomeHero