import React from 'react'
import Review from '../../components/review/Review'
import './engagement.css'

function Engagement() {
  return (
    <div className='engagement flex flex-col items-center justify-center'>
        <div className='container'></div>
        <div className='container flex justify-between  mt-10'>
            <div className='engagement-left'>
              <div className='engagement-desc'>
                  <p className='font-bold text-2xl text-zinc-500'>I will design a professional minimalist modern business logo</p>
                  <div>
                    
                  </div>
                  <img className='engagement-img mt-5' src={require('../../assets/mainbg.jpg')} alt='skills hub'/>
                  <p>First impressions are important. Your logo is on every page of your website, the main element for your branding and the core of your marketing material. It symbolizes everything you stand for.</p>
              </div>
              <div className='engagement-about'>
                <p>About me</p>
                <p>First impressions are important. Your logo is on every page of your website, the main element for your branding and the core of your marketing material.</p>
                <div>
                  <p>Python</p>
                  <p>JavaScript</p>
                  <p>Java</p>
                </div>
              </div>
              <div className='reviews'>
                <Review/>
              </div>
            </div>
            <div className='engagement-rights'>

            </div>
        </div>
    </div>
  )
}

export default Engagement