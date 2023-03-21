import React from 'react'
import './skillcard.css'
import {Link} from 'react-router-dom'

function SkillCard({item}) {
  return (
    <Link to='/engagements'><div className='skillcard'>
        <img src={item.img} alt='Skills hub'/>
        <span className='desc'>{item.desc}</span>
        <span className='title'>{item.title}</span>
    </div>
    </Link>
  )
}

export default SkillCard