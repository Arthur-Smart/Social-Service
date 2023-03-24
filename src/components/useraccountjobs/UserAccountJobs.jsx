import React from 'react'
import './useraccountjobs.css'

function UserAccountJobs() {
  return (
    <div className='user-account-jobs flex flex-col border-zinc-200'>
        <div className='u-a-j-top px-2 py-1 flex items-center justify-between'>
            <p className='font-medium text-amber-500'>Software Developer</p>
            <p className='cursor-pointer text-zinc-400'><i class="fa-solid fa-trash"></i></p>
        </div>
        <div className='u-a-j-middle p-2'>
            <p>Go Make Something Awesome
Font Awesome is the internet's icon library and toolkit used by millions of designers, developers, and content creators.

Made with  and  in Bentonville, Boston, Chicago, Grand Rapids, Joplin, Kansas City, Seattle, Tampa, and Vergennes.
</p>
        </div>
        <div className='u-a-j-bottom flex items-center justify-between py-1 px-2'>
            <p className='text-zinc-400'><i class="fa-solid fa-file-waveform text-amber-500"></i> {"[120 Application]"}</p>
        </div>
    </div>
  )
}

export default UserAccountJobs