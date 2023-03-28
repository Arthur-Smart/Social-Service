import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div className='footer flex flex-col items-center justify-center py-10'>
        <div className='line'></div>
        <div className='container footer-wrapper-m flex flex-col items-center justify-center'>
          <img className='flag' src={require('../../assets/flag.png')} alt='skill hub'/>
          <p className='text-zinc-500 mb-2 text-lg'>A solution for kenyans</p>
          <div className='footer-search-button items-center  flex'>
              <input className='location-s-input border-2 mb-25 px-2 py-3 outline-0 ' type='Type Location' placeholder='Search'/>
              <button className='flex  text-white  border-2  bg-red-500 py-3 px-10  '>Search</button>
           </div>
        </div>
        <div className='container footer-b-wrapper flex items-center justify-between'>
            <div className='footer-left flex items-center'>
                <p className='text-zinc-400 text-4xl font-bold'>SkillsHub</p>
                <p className='ml-3 text-zinc-400'>Developed with love by Arthur &copy;2023</p>
            </div>
            <div className='foooter-right flex items-center'>
                <p className='text-zinc-400 text-3xl'><i class="fa-brands fa-square-facebook"></i></p>
                <p className='text-zinc-400 text-3xl ml-4' ><i class="fa-brands fa-square-instagram"></i></p>
                <p className='text-zinc-400 text-3xl ml-4' ><i class="fa-brands fa-linkedin"></i></p>
                <p className='text-zinc-400 text-3xl ml-4' ><i class="fa-brands fa-square-whatsapp"></i></p>

                <p className='ml-10 text-zinc-500 text-xl'><i className="fa-solid fa-globe ml-2"></i> Kenya</p>
            </div>
        </div>
    </div>
  )
}

export default Footer