import React,{useState} from 'react'
import axios from "axios"
import {Link} from 'react-router-dom'
import './login.css'

function Login({setOpenLoginModel}) {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(null)

    const handleLogin = async () =>{
        try {
            const res = await axios.post('http://localhost:8800/api/auth/login', {
                name , password
            },{withCredentials:true});
            console.log(res.data)
            localStorage.setItem("currentUser", JSON.stringify(res.data));
        } catch (err) {
            setError(err)
            console.log(err)
        }
        setOpenLoginModel(false)
        console.log(JSON.parse(localStorage.getItem('currentUser')))
    }
  return (
    <div className='login flex flex-col items-center justify-center'>
        <p><i class="fa-regular fa-rectangle-xmark"></i></p>
        <div className='login-wrapper bg-white flex flex-col items-center justify-center rounded-md'>
            <div>
                <p className='font-bold text-xl text-zinc-500 py-2'>Join SkillsHub</p>
            </div>
           
            <div className=' flex items-center justify-between w-full px-2'>
                <div className='join-line border-gray-200'></div>
                    {/*<p>Fill</p>*/}
                <div className='join-line border-gray-200'></div>
            </div>
            <div className='flex flex-col items-center w-full px-2'>
                <input className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Username'/>
                <input className='j-inputs border-2 rounded-full outline-0 py-3 px-2 w-full mt-4' type='password' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Enter password'/>
            </div>
            <div className='px-2 py-3 w-full'>
                <button onClick={() => handleLogin()} className='py-3 px-2 rounded-full bg-amber-500 w-full text-white'>Login</button>
            </div>
            <p className='text-center mb-5'>Don't have an account? <br />Please click <Link to='/register'><span className='text-blue-900 underline cursor-pointer'>join</span></Link> to create an account</p>
            <p className='my-2 text-indigo-600 underline cursor-pointer' >Forgot password</p>
        </div>
    </div>
  )
}

export default Login