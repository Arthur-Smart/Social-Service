import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import './message.css'

function Message() {
    let msg = 'Permissions and ownership: Permissions and ownership issues on the server can also cause a 500 error. Ensure that the files and directories that Django needs to access have the correct permissions and ownership.'
    return (
    
        <div className='message flex items-center justify-between bg-white px-2 py-4 cursor-pointer'>
            <div className='msg-owner'>
                <p className='text-zinc-500'>John Kamau</p>
            </div>
            <div className='msg-desc'>
                <p className='text-zinc-500'>{msg.substring(0, 80)}...</p>
            </div>
            <div className='msg-time-btn flex items-center justify-end msg-active'>
                <p className='text-zinc-500'>1 day ago </p>
                <div className='ml-2 msg-msg-icon'>
                    <p className='text-green-500'><i class="fa-solid fa-circle-check msg-icon"></i></p>
                </div>
            </div>
        </div>
    
  )
}

export default Message