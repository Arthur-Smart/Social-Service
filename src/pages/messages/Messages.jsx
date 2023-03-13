import React from 'react'
import Message from '../../components/message/Message'
import './messages.css'

function Messaages() {
  return (
    <div className='messages flex flex-col items-center justify-center py-10'>
        <div className='container flex flex-col'>
            <p className='text-amber-500 text-2xl font-medium'>Inbox</p>
            <p className='text-zinc-500'>You have 20 unread messages</p>
        </div>
        <div className='container border-gary-100 flex flex-col items-center justify-center messages-wrapper'>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
            <Message/>
        </div>
    </div>
  )
}

export default Messaages