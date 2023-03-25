import React, {useState, useRef, useEffect} from 'react'
import { techData } from '../../data';
import SkillCard from '../skillcard/SkillCard';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './slidertech.css'

function SliderTech() {

 const data = techData;
 const items = data.map((item) => (
  <SkillCard key={item.id} item={item} />  
 ))

    const responsive = {
        0:{
            items:1
        },
        512:{
            items:2
        },
        880:{
            items:3
        },
        1020:{
            items:4
        },
        1120:{
            items:5
        }
    }
  return (
    <div className='slide flex flex-col items-center justify-center py-10'>
        <div className='container slider-wrapper'>
            <p className='text-3xl font-bold text-zinc-600'>Technical skills to solve your need</p>
            <p className='text-zinc-500'>From Graphic designing | Web development | Architech | Lawyer | Engineer Etc</p>
        </div>        
        <div className='container caurosel-div flex items-center  flex-col'>
       
             <AliceCarousel 
                mouseTracking
                infinite
                autoPlayInterval={1000}
                animationDuration={1500}
                disableDotsControls={false}
                disableButtonsControls
                responsive={responsive}
                items={items}
              />
        </div>
    </div>
  )
}

export default SliderTech