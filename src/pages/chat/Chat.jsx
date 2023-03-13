import React from 'react'
import './chat.css'

function Chat() {
  return (
    <div className='chat flex flex-col items-center justify-center py-10'>
        <div className='container chat-with'>
           <p className='text-zinc-500 font-medium my-2'>Your are chatting with <span className='text-amber-500'>John Maina</span></p>
        </div>
        <div className='container flex flex-col border-gray-100 chat-wrapper p-2'>
            
            <div className='w-full flex flex-col'>
                <div className='sender py-4 px-4 rounded-full bg-gray-100'>
                 <p>Hey I like your app. I want to hire you</p>
                </div>
                <div className='owner py-4 px-4 rounded-full bg-sky-100'>
                    <p>I am readly available. How would you like me to help you?</p>
                </div>
                <div className='sender py-4 px-4 rounded-full bg-gray-100'>
                    <p>I want an E-commerce website</p>
                </div>
                <div className='owner py-4 px-4 rounded-full bg-sky-100'>
                    <p>Ok. What are you selling</p>
                </div>
                <div className='sender py-4 px-4 rounded-full bg-gray-100'>
                    <p>School uniforms and books</p>
                </div>
                <div className='owner py-4 px-4 rounded-full bg-sky-100'>
                    <p>Alright. I'll do it for you sir</p>
                </div>
                <div className='sender py-4 px-4 rounded-full bg-gray-100'>
                    <p>How mush will it cost</p>
                </div>
                <div className='owner py-4 px-4 rounded-full bg-sky-100'>
                    <p>100,000 Shillings</p>
                </div>
            </div>
         <div>
             <input className='w-full border-amber-500 msg-input outline-0 py-3 px-2 mt-2 rounded-full' type='text' placeholder='Write message...'/>
             <button className='py-3 px-2 bg-amber-500 rounded-full mt-2 msg-send-btn text-white'>Send</button>
        </div>
        </div>
       
    </div>
  )
}

export default Chat