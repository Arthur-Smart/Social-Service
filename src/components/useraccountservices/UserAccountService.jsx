import React from 'react'
import './useraccountservices.css'
import axios from "axios"

function UserAccountService({item, setAuthError}) {
  
  const handleDelete = async () => {
   try {
    await axios.delete(`https://serviceapi.onrender.com/api/service/delete/${item?._id}`)
    window.location.reload()
    } catch (err) {
      setAuthError(err.response?.data)
    }
    
  }
  return (
    <div className='user-account-services flex flex-col border-zinc-200'>
        <div className='u-a-top px-2 py-1 flex items-center justify-between'>
            <p className='font-medium text-amber-500'>{item?.title}</p>
            <p onClick={() => handleDelete()} className='cursor-pointer text-zinc-400'><i class="fa-solid fa-trash"></i></p>
        </div>
        <div className='u-a-middle'>
            <img src={item?.image} alt='Skills hub'/>
        </div>
        {/*<div className='u-a-bottom flex items-center justify-between py-1 px-2'>
            <p className='text-zinc-400'><i class="fa-solid fa-heart text-amber-500"></i> {"[200 loves]"}</p>
            <p className='text-zinc-400'><i class="fa-solid fa-comments text-amber-500"></i> {"[200 Reviews]"}</p>
        </div>*/}
    </div>
  )
}

export default UserAccountService