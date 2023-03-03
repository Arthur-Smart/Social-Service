import React from 'react'
import './skillcard.css'

function SkillCard({item}) {
  return (
    <div className='skillcard'>
        <img src={item.img}/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
  )
}

export default SkillCard