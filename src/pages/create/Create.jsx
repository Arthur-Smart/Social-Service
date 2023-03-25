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
    const [phone, setPhone] = useState('')
    const [image, setImage] = useState(null)
    const [isNegotiable, setIsNegotiable] = useState(false)

    const handleCheckboxChange = (e) => {
        setIsNegotiable(e.target.checked)
    }

    const handleCreate = async() => {
        const serviceData = {
            title, price, category, location, description, shortDescription, isNegotiable, phone
        };

        if(image){
        const data = new FormData();
        data.append("file", image);
        data.append("upload_preset", "uploads");

         try {
              const uploadFile = await axios.post("https://api.cloudinary.com/v1_1/dc86lmshz/image/upload", data);
              const { url } = uploadFile.data;
              serviceData.image = url
         } catch (err) {
              console.log(err)
         }
       }    

       try {
          const res = await axios.post('http://localhost:8800/api/service/', serviceData ,{withCredentials:true})
          console.log(res)
          setTitle('')
          setCategory('')
          setDescription('')
          setLocation('')
          setPrice('')
          setDescription('')
          setShortDescription('')
     } catch (err) {
        console.log(err)
     }  
 }

    

    

  return (
    <div className='create flex flex-col items-center justify-center'>
        <div className='container mt-10 mb-3 flex items-center'>
            <p className='font-medium text-xl text-zinc-500'>Post a new skill engagement</p>
            <p className='font-medium text-xl text-zinc-500 ml-4 text-indigo-700 cursor-pointer underline'><i class="fa-solid fa-chevron-left"></i> Post job instead</p>
        </div>
        <div className='container bg-gray-100 flex flex-col items-center justify-center py-4'>
            <div className='title-price-inputs flex items-center justify-between px-3 pb-2'>
                <input value={title} onChange={(e) => setTitle(e.target.value)} className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500' type='text' placeholder='Type title'/>
                <input value={price} onChange={(e) => setPrice(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='number' placeholder='Enter price'/>
            </div>
            <div className='phone-isnegotiable-inputs flex items-center justify-between px-3 pb-2'>
                <input  onChange={(e) => setPhone(e.target.value)} className='py-2 px-2  outline-1  outline-amber-100 text-zinc-500 phone-isnegotiable-inputs-input' type='text' placeholder='WhatApp business number'/>
                <div className='flex items-center is-negotiable'>
                <input value={setIsNegotiable}  className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500'
                        onChange={handleCheckboxChange}
                        type='checkbox'
                        checked={isNegotiable}
                        placeholder='Enter bugeted amout'/>
                    <p className='text-zinc-500 text-lg ml-2'>Price is negotiable</p>
                </div>
            </div>
            <div className='skill-category px-3'>
                <select value={category} onChange={(e) => setCategory(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 mb-2 text-zinc-500'>
                    <option>Select skill category</option>
                    <option value='capentry'>Capentry</option>
                    <option value='masonary'>Masonary</option>
                    <option value='plumbing'>Plumbing</option>
                    <option value='shaving'>Shaving & Salon</option>
                    <option value='pendicure'>Nail technician</option>
                    <option value='survey'>Survey services</option>
                    <option value='graphic designing'>Graphic designing</option>
                    <option value='mobile apps'>Mobile apps</option>
                    <option value='photography'>Photography</option>
                    <option value='videography'>Videography</option>
                    <option value='finance'>Finance and Auditing</option>
                    <option value='advocate'>Advocate</option>
                    <option>Others</option>
                </select>
            </div>
            <div className='description px-3 pb-2'>
                <textarea value={shortDescription} onChange={(e) => setShortDescription(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' placeholder='Write skill description'></textarea>
            </div>
            <div className='short-description px-3 pb-2'>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' placeholder='Short description e.g. It will tale 10 days to complete'></textarea>
            </div>
            <div className='location-image flex items-center justify-between px-3 pb-2'>
                <input value={location} onChange={(e) => setLocation(e.target.value)} className='py-2 px-2  outline-1 outline-amber-100 text-zinc-500' type='text' placeholder='Enter location'/>
                <input onChange={(e) => setImage(e.target.files[0])} className='py-2 px-2  outline-1 bg-white border-2 border-amber-100 text-zinc-500' type='file'/>
            </div>
            <button onClick={() => handleCreate()} className='self-start ml-3 bg-amber-500 py-3 px-7 rounded-full font-medium text-white'>Publish</button>
        </div>
    </div>
  )
}

export default Create