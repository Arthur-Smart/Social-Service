import React from 'react'
import About from '../../components/about/About'
import HomeHero from '../../components/homehero/HomeHero'
import PostedJobs from '../../components/postedjobs/PostedJobs'
import Slide from '../../components/slider/Slide'
import SliderTech from '../../components/slidertech/SliderTech'
import './home.css'

function Home() {
  return (
    <div className='home'>
        <HomeHero/>
        <Slide/>
        <SliderTech/>
        <PostedJobs/>
        <About/>
    </div>
  )
}

export default Home