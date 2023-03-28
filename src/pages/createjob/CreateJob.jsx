import React, {useState} from 'react'
import './createjob.css'
import axios from 'axios'
import {Link} from 'react-router-dom'

function CreateJob() {
    const [skill, setSkill] = useState('')
    //const [isChecked, setIsChecked] = useState(false)

    const [skills, setSkills] = useState([]);
    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState()
    const [isNegotiable, setIsNegotiable] = useState(false)
    const [location, setLocation] = useState('')
    const [freelance, setFreelance] = useState(false)
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('0758869958')

    const handleAddSkill = (e) => {
        setSkills((prev) => [...prev, skill])
    }

    const handleCreate = async() => {
        const res = await axios.post('http://localhost:8800/api/jobs/', {
            skills, title, budget, isNegotiable, location, freelance, description, phone
        },{withCredentials:true}); 

        console.log(res)
    }

    const handleCheckboxChange = (e) =>{
        setFreelance(e.target.checked)
    }
    const handleCheckboxChangeNegotiate = (e) =>{
        setIsNegotiable(e.target.checked)
    }

    

    console.log(freelance)

      return (
       <div className='create-job flex flex-col items-center justify-center '>
        <div className='container mt-10 mb-3 flex items-center'>
            <p className='font-medium text-xl text-zinc-500  '> Post job</p>
            <Link to='/create'><p className='font-medium text-xl  ml-4 text-indigo-600 cursor-pointer underline'>Post a new skill engagement <i class="fa-solid fa-chevron-right"></i></p></Link>
        </div>
        <div className='container bg-gray-100 py-2'>
            <div className='c-job-title-budget flex items-center justify-between px-3 pb-2'>
                 <input className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' onChange={(e) => setTitle(e.target.value)} placeholder='Type title'/>
                <input  className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='number' onChange={(e) => setBudget(e.target.value)} placeholder='Enter bugeted amount'/>
            </div>
            <div className='location-phone flex items-center gap-6 px-3 pb-2'>
                 <input className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' onChange={(e) => setLocation(e.target.value)} placeholder='Type Location'/>
                 <input className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' onChange={(e) => setPhone(e.target.value)} placeholder='Enter Whatsapp Number'/>
            </div>
            <div className='c-job-description px-3 pb-2'>
                <textarea className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' onChange={(e) => setDescription(e.target.value)} placeholder='Job description'></textarea>
            </div>
            <div className='add-skill px-3'>
                <p>Specify mandatory skill requirements</p>
                <div className='title-add flex items-center justify-between'>
                    <input onChange={(e) => setSkill(e.target.value)}
                        className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500'
                        type='text'
                        placeholder='Type skill requirement'/>
                    <button onClick={() => handleAddSkill()}  className='py-2 px-4 bg-amber-500 outline-amber-100'>Add</button>
                </div>
                <div className='skills mt-4 flex gap-2'>
                   {skills.map((s) => (
                        <p className='skill-text rounded-full border-2 border-amber-500 py-3 px-5'>{s}</p>
                   ))} 
                </div>
            </div>
            <div className='flex  items-center freelance-negotiable px-3'>
                <div className='negotiable flex items-center'>
                     <input  className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500'
                        onChange={handleCheckboxChangeNegotiate}
                        type='checkbox'
                        checked={isNegotiable}
                        placeholder='Enter bugeted amout'/>
                    <p className='text-zinc-500 text-lg ml-2'>Price is negotiable</p>
                </div>
                <div className='fleelance flex items-center'>
                     <input  className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500'
                        onChange={handleCheckboxChange}
                        type='checkbox'
                        checked={freelance}
                        placeholder='Enter bugeted amout'/>
                    <p className='text-zinc-500 text-lg ml-2'>Can freelance</p>
                </div>
                   
                 </div>
        </div>
        <div className='container py-2'>
            <button onClick={() => handleCreate()} className='bg-indigo-800 py-2 px-4 rounded-full text-white hover:bg-indigo-700'>Publish</button>
        </div>
    </div>
  )
}

export default CreateJob