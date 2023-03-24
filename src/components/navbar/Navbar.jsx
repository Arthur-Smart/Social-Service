import React, {useState} from 'react'
import Login from '../../pages/login/Login'
import Register from '../../pages/register/Register'
import {Link, useNavigation} from 'react-router-dom'
import axios from 'axios'
import './navbar.css'

function Navbar() {
    const [openRegModel, setOpenRegModel] = useState(false)
    const [openLoginModel, setOpenLoginModel] = useState(false)
    const user = JSON.parse(localStorage.getItem("currentUser"));
    const navigate = useNavigation()

    const logoutUser = () => {
        try {
            axios.post('http://localhost:8800/api/auth/logout', {withCredentials:true});
            localStorage.setItem("currentUser", null)
            navigate("/")
        } catch (err) {
            console.log(err)
        }
    }
    
  return (
    <div className='navbar flex items-center justify-center'>
        <div className='container flex items-center justify-between'>
            <div className='left-nav'>
                <Link to='/'><p className='font-bold text-3xl cursor-pointer'>Skills<span className='text-amber-500'>Hub</span></p></Link>
            </div>
            <div className='right-nav flex items-center justify-end'>
               <Link to='/engagements' ><p className='mr-6 text-lg font-medium text-amber-500 cursor-pointer ' >Find a skill</p></Link>
                <p className='mr-6 text-lg font-medium text-amber-500 cursor-pointer ' >Why SkillsHub</p>
                {user  !==null ? (
                    <>
                        <button onClick={() => logoutUser()} className='mr-6 border-amber-500 rounded-full py-2 px-8 border-2 text-lg font-medium'>Logout</button>
                        <button onClick={() => setOpenRegModel(true)} className='bg-black px-8 py-2 border-black border-2 rounded-full text-lg font-medium text-amber-500'>Create post</button>
                    </>
                ) : 
                    (
                         <>
                        <button onClick={() => setOpenLoginModel(true)} className='mr-6 border-amber-500 rounded-full py-2 px-8 border-2 text-lg font-medium'>Login</button>
                        <button onClick={() => setOpenRegModel(true)} className='bg-black px-8 py-2 border-black border-2 rounded-full text-lg font-medium text-amber-500'>Join</button>
                    </>
                    )
                 }
                
                <Link to='account/4'>
                <div className='flex items-center notifications bg-amber-500 ml-6'>
                   {user && <img className='user-nav-pic' src={user?.userImage} alt='Skills hub'/>}
                </div>
                </Link>
            </div>
            
        </div>
        {openRegModel && <Register setOpenRegModel={setOpenRegModel}/>}
        {openLoginModel && <Login setOpenLoginModel={setOpenLoginModel}/>}
        
    </div>
  )
}

export default Navbar