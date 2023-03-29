import React, {useState} from 'react'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import {Link, useNavigation} from 'react-router-dom'
import axios from 'axios'
import './navbar.css'

function Navbar() {
    const [open, setOpen] = useState(false)
    const [openRegModel, setOpenRegModel] = useState(false)
    const [openLoginModel, setOpenLoginModel] = useState(false)
    const user = JSON.parse(localStorage.getItem("currentUser"));

    const navigate = useNavigation()
    const openMobileMenu = () => {
        setOpen(!open)
    }


    const logoutUser = () => {
        try {
            axios.post('https://talented-pink-buckle.cyclic.app/api/auth/logout', {withCredentials:true});
            localStorage.setItem("currentUser", null)
            window.location.replace('/')
        } catch (err) {
            console.log(err)
        }
    }
    
  return (
    <div className='navbar flex items-center justify-center'>
        <div className='container main-n-wrapper flex items-center justify-between'>
            <div className='left-nav'>
                <Link to='/'><p className='font-bold text-3xl cursor-pointer'>Skills<span className='text-amber-500'>Hub</span></p></Link>
            </div>
            <div className='right-nav flex items-center justify-end'>
               <Link to='/engagements' ><p className='mr-6 text-lg font-medium text-amber-500 cursor-pointer ' >Find a skill</p></Link>
                <p className='mr-6 text-lg font-medium text-amber-500 cursor-pointer ' >Get a paying task</p>
                {user  !==null ? (
                    <>
                        <button onClick={() => logoutUser()} className='mr-6 border-amber-500 rounded-full py-2 px-8 border-2 text-lg font-medium'>Logout</button>
                        <Link to='/create'><button onClick={() => setOpenRegModel(true)} className='bg-black px-8 py-2 border-black border-2 rounded-full text-lg font-medium text-amber-500'><i class="fa-solid fa-plus"></i></button></Link>
                    </>
                ) : 
                    (
                         <>
                        <Link to='/login'><button  className='mr-6 border-amber-500 rounded-full py-2 px-8 border-2 text-lg font-medium'>Login</button></Link>
                        <Link to='/register'><button  className='bg-black px-8 py-2 border-black border-2 rounded-full text-lg font-medium text-amber-500'>Join</button></Link>
                    </>
                    )
                 }
                {user && 
                <Link to={`/account/${user?._id}`}>
                <div className='flex items-center notifications bg-amber-500 ml-6'>
                   {user?.userImage ? <img className='user-nav-pic' src={user?.userImage} alt='Skills hub'/> : <img className='user-nav-pic' src={require('../../assets/avatar.jpg')} alt='Skills hub'/>}
                </div>
                </Link>       
                }         
            </div>
            <p onClick={() => openMobileMenu()} className='bars flex text-3xl text-zinc-600 cursor-pointer'><i class="fa-solid fa-bars-staggered fa-rotate-180"></i></p>
        </div>
        
        {/*Mobile View */}
        <div className={open ? 'mobile-view show' : 'mobile-view'}>
            <div className='mobile-i-wrapper px-3 py-3'>                
                 <p onClick={() => openMobileMenu()} className='mb-8 cursor-pointer font-bold text-xl text-indigo-500'><i class="fa-solid fa-arrow-right-from-bracket fa-rotate-180"></i></p>
                
                    {user ? (
                    <div className='flex items-center'>
                        <img className='mobile-a-user' src={user?.userImage} alt="Skills hub"/>
                        <div className='ml-1'>
                        <p className='font-bold text-amber-500 text-2xl'>{user?.name}</p>
                        <p className='-mt-2 text-zinc-400 font-semibold'>Account User</p>
                    </div>
                     </div>
                    ) : (<>
                        <Link to='/register'><button  onClick={() => setOpen(false)} className='bg-indigo-700 w-full py-3 -mt-5 px-3 rounded-full mt-6 text-white'>Join Skillshub</button></Link>
                        <Link to='/login'><button onClick={() => setOpen(false)} className='border-amber-500 w-full py-3  px-3 rounded-full mt-6 mobile-login-btn'>Login here</button></Link>
                    </>
                    )}
                    
                
                 <div className='mt-5'>
                    <Link to='/'><p  onClick={() => setOpen(false)} className='mb-2 text-lg font-medium text-zinc-500 cursor-pointer' >Home</p></Link>
                    <Link to='/engagements'><p onClick={() => setOpen(false)}  className='mb-2 text-lg font-medium text-zinc-500 cursor-pointer' >Find a skill</p></Link>
                    <Link to='/jobs'><p onClick={() => setOpen(false)}  className='mb-2 text-lg font-medium text-zinc-500 cursor-pointer' >Find a paying task</p></Link>
                 </div>
                 {user &&  <button onClick={() => logoutUser()} className='bg-amber-500 w-full py-3 px-3 rounded-full mt-6 text-white'>Logout</button>}
            </div>
        </div>
        
    </div>
  )
}

export default Navbar