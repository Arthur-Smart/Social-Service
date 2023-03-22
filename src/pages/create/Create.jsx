import React, {useState} from 'react'
import axios from 'axios'
import './create.css'

function Create() {
    const [title, setTitle] = useState('')
    const [price, setPrice] = useState()
    const [category, setCategory] = useState('')
    const [location, setLocation] = useState('')
    const [description, setDescription] = useState('')
    const [shortDescription, setShortDescription] = useState('')
    const [image, setImage] = useState("https://images.unsplash.com/photo-1508002366005-75a695ee2d17?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBibGFjayUyMHdvbWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80")
    const [isNegotiable, setIsNegotiable] = useState(true)

    const handleCreate = async() => {
        const res = await axios.post('http://localhost:8800/api/service/', {
            title, price, category, location, description, shortDescription, image, isNegotiable
        },{withCredentials:true});

          console.log(res);
    }

  

  return (
    <div className='create flex flex-col items-center justify-center'>
        <div className='container mt-10 mb-3 flex items-center'>
            <p className='font-medium text-xl text-zinc-500'>Post a new skill engagement</p>
            <p className='font-medium text-xl text-zinc-500 ml-4 text-indigo-700 cursor-pointer underline'><i class="fa-solid fa-chevron-left"></i> Post job instead</p>
        </div>
        <div className='container bg-gray-100 flex flex-col items-center justify-center py-4'>
            <div className='title-price-inputs flex items-center justify-between px-3 pb-2'>
                <input onChange={(e) => setTitle(e.target.value)} className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' placeholder='Type title'/>
                <input onChange={(e) => setPrice(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='number' placeholder='Enter price'/>
            </div>
            <div className='skill-category px-3'>
                <select onChange={(e) => setCategory(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 mb-2 text-zinc-500'>
                    <option>Select skill category</option>
                    <option>Casual eg capenter | Mason | Cleaner etc</option>
                    <option>IT & Tech</option>
                    <option>Finance & Auditing</option>
                    <option>Advocate</option>
                    <option>Others</option>
                </select>
            </div>
            <div className='description px-3 pb-2'>
                <textarea onChange={(e) => setShortDescription(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' placeholder='Write skill description'></textarea>
            </div>
            <div className='short-description px-3 pb-2'>
                <textarea onChange={(e) => setDescription(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' placeholder='Short description e.g. It will tale 10 days to complete'></textarea>
            </div>
            <div className='location-image flex items-center justify-between px-3 pb-2'>
                <input onChange={(e) => setLocation(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='text' placeholder='Enter location'/>
                <input className='py-2 px-2  outline-1 bg-white border-2 border-amber-100 text-zinc-500' type='file'/>
            </div>
            <button onClick={() => handleCreate()} className='self-start ml-3 bg-amber-500 py-3 px-7 rounded-full font-medium text-white'>Publish</button>
        </div>
    </div>
  )
}

export default Create