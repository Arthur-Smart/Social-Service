import React, {useState, useRef, useEffect} from 'react'
import { servicesData } from '../../data';
import 'react-alice-carousel/lib/alice-carousel.css';
import AliceCarousel from 'react-alice-carousel';
import './servicecarousel.css'
import ServiceCard from '../servicecard/ServiceCard';

function ServicesCarousel() {

 const data = servicesData;
 const items = data.map((item) => (
  <ServiceCard key={item.id} item={item} />  
 ))

    const responsive = {
        0:{
            items:2
        },
        512:{
            items:3
        }
    }
  return (
    <div className='slide flex flex-col items-center justify-center py-10'>
        <div className='container'>
            <p className='text-3xl font-bold text-zinc-600'>Find Your Next Skilled Partner for Success</p>
            <p className='text-zinc-500'>Discover the Satisfying and Fulfilling Experience of Finding Amazing Skills in Kenya and Your Location</p>
        </div>        
        <div className='container flex items-center flex-col mt-5'>
       
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
        <div className='container flex items-start'>
          <button className='border-2 border-indigo-800 hover:bg-indigo-800 hover:text-white py-3 px-10 rounded-full '>More</button>
        </div>
    </div>
  )
}

export default ServicesCarousel;