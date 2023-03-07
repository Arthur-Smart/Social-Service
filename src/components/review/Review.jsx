import React from 'react'
import './review.css'

function Review() {
  return (
    <div className='review flex items-center border-2 p-2 rounded-md mt-2'>
      <img className='engagement-p-pic' src={require('../../assets/mainbg.jpg')}/>
      <div className='ml-2 bg-gray-100 p-2 rounded-md'>
        <p className='font-bold text-zinc-700'>Mary Mwende</p>
        <p className='text-zinc-600'>The solution I got from Him was amaizing. The work was well done and I rank him as the best. </p>
        <p className='text-zinc-600'>1 day ago</p>
      </div>
    </div>
  )
}

export default Review