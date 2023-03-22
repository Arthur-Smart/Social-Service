import React, {useState} from 'react'
import './createjob.css'
import axios from 'axios'

function CreateJob() {
    const [skill, setSkill] = useState('')

    const [skills, setSkills] = useState([]);
    const [title, setTitle] = useState('')
    const [budget, setBudget] = useState()
    const [isNegotiable, setIsNegotiable] = useState(true)
    const [location, setLocation] = useState('')
    const [freelance, setFreelance] = useState(false)
    const [description, setDescription] = useState('')
    const [phone, setPhone] = useState('')

    const handleAddSkill = (e) => {
        setSkills((prev) => [...prev, skill])
    }

    const handleCreate = async() => {
         await axios.post('http://localhost:8800/api/jobs/', {
            skills, title, budget, isNegotiable, location, freelance, description, phone
        },{withCredentials:true}); 
    }

    console.log(skills)

      return (
       <div className='create-job flex flex-col items-center justify-center '>
        <div className='container mt-10 mb-3 flex items-center'>
            <p className='font-medium text-xl text-zinc-500 text-indigo-700 cursor-pointer underline'>Post a new skill engagement <i class="fa-solid fa-chevron-right"></i></p>
            <p className='font-medium text-xl text-zinc-500 ml-4 '> Post job instead</p>
        </div>
        <div className='container bg-gray-100 py-2'>
            <div className='c-job-title-budget flex items-center justify-between px-3 pb-2'>
                 <input className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' placeholder='Type title'/>
                <input  className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='text' placeholder='Enter bugeted amout'/>
            </div>
            <div className='location flex items-center gap-6 px-3 pb-2'>
                 <input className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' placeholder='Type Location'/>
                 <div className='flex items-center countrywide'>
                    <input  className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='checkbox' placeholder='Enter bugeted amout'/>
                    <p className='text-zinc-500 text-lg ml-2'>Countrywide</p>
                 </div>
            </div>
            <div className='c-job-description px-3 pb-2'>
                <textarea className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' placeholder='Job description'></textarea>
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
        </div>
        <div className='container'>
            <button onClick={() => handleCreate()} className='bg-teal-500'>Publish</button>
        </div>
    </div>
  )
}

export default CreateJob