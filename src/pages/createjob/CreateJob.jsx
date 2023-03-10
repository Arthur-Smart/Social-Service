import React from 'react'
import './createjob.css'

function CreateJob() {
  return (
    <div className='create-job flex flex-col items-center justify-center'>
        <div className='container mt-10 mb-3 flex items-center'>
            <p className='font-medium text-xl text-zinc-500'>Post a new skill engagement</p>
            <p className='font-medium text-xl text-zinc-500 ml-4 text-indigo-700 cursor-pointer underline'><i class="fa-solid fa-chevron-left"></i> Post job instead</p>
        </div>
        <div className='container'>

        </div>
    </div>
  )
}

export default CreateJob