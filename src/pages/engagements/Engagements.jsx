import React from 'react'
import EngagementCard from '../../components/engagementcard/EngagementCard'
import './engagements.css'

function Engagements() {
  return (
    <div className='engagements flex flex-col items-center justify-center'>
        <div className='container mt-10'>
         <select className='py-2 px-16 outline-0 border-2'>
            <option >Filter</option>
            <option value='latest'>Latest</option>
            <option value='latest'>DESC</option>
            <option value='latest'>ASC</option>
         </select>

         <select className='py-2 ml-3 px-16 outline-0 border-2'>
            <option >Range</option>
            <option value='latest'>0-50</option>
            <option value='latest'>50-200</option>
            <option value='latest'>200-1000</option>
            <option value='latest'>Above 1000</option>
         </select>        
        </div>
        <div className='container mt-4'>
            <p className='font-bold text-xl text-zinc-500'>286,817 services available</p>
        </div>
        <div className='container mt-3 flex flex-wrap  items-center justify-center gap-4'>
            <EngagementCard/>
            <EngagementCard/>
            <EngagementCard/>
            <EngagementCard/>
            <EngagementCard/>
            <EngagementCard/>
            <EngagementCard/>
            <EngagementCard/>
        </div>
    </div>
  )
}

export default Engagements