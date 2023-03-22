import React, {useState} from 'react'
import axios from "axios"
import './register.css'

function Register({setOpenRegModel}) {
    const [user, setUser] = useState({
        name:"",
        email:"",
        passowrd:""
    });

    const handleChange = (e) =>{
        setUser((prev) =>{
            return { ...prev, [e.target.name]: e.target.value}
        })
    }

    const handleRegister = async () => {
        try {
            const res = await axios.post('http://localhost:8800/api/auth/register', user)
            console.log(res)
            setOpenRegModel(false)
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='register flex flex-col items-center justify-center'>
        <div className='register-wrapper bg-white flex flex-col items-center justify-center rounded-md'>
            <div>
                <p className='font-bold text-xl text-zinc-500 py-2'>Join SkillsHub</p>
            </div>
            <div className='separator bg-zinc-300'></div>
            <div className='w-full flex flex-col items-center justify-center px-2 py-3'>
                <p className='text-xl text-zinc-400 '>Upload profile picture</p>
                <div className='user-image'>
                    <img src={require('../../assets/mainbg.jpg')} alt=''/>
                    <div className='upload-Image cursor-pointer'>
                        <p><i class="fa-solid fa-photo-film fa-bounce"></i></p>
                    </div>
                </div>
            </div>

            
            <div className='flex flex-col items-center w-full px-2'>
                <input autoComplete='off' name="name" onChange={handleChange} className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='text' placeholder='Enter name'/>
                <input autoComplete='off' name="email" onChange={handleChange} className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='email' placeholder='Enter Email'/>
                <input autoComplete='off' name="password" onChange={handleChange} className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='password' placeholder='Enter password'/>
            </div>
            <div className='px-2 py-3 w-full'>
                <button onClick={() =>handleRegister()} className='py-3 px-2 rounded-full bg-amber-500 w-full text-white'>Join</button>
            </div>
          <p className='text-center mb-5'>Already have an account? <br />Please click <span className='text-blue-900 underline cursor-pointer'>here</span> to sign in</p>
        </div>
    </div>
  )
}

export default Register