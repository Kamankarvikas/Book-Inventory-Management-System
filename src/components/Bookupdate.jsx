import React from 'react'
import { useState,useEffect } from 'react'
import { useParams,useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios  from 'axios';
export default function Bookupdate() {
     const {id} =useParams();
     const navigate=useNavigate();
     const [values,setValues]=useState({
        id:id,
        name:'',
        authorname:'',
        publishDate:'',
        publisher:'',
        description:''
        

     })
     useEffect(()=>{
        axios.get('https://6610db130640280f219d7fe2.mockapi.io/book/'+id)
        .then(res =>{
            setValues({...values,name:res.data.name,authorname:res.data.authorname,publishdate:res.data.publishdate,publisher:res.data.publisher,description:res.data.description})
        })
        .catch(err=>console.log(err))
     },[])
    const handleSubmit = (e) =>{
        e.prevenDefault();
        axios.put('https://6610db130640280f219d7fe2.mockapi.io/book/'+id,values)
        .then(res =>{
        navigate('/');
         })
         .catch(err=>console.log(err))
    }
  return (
      <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg ">
      <h2 className="mb-4 text-2xl font-semibold">update Book</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="bookName" className="block mb-2 font-semibold text-gray-700">Book Name</label>
          <input type="text" id="bookName" name="bookName" placeholder='Enter a book name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.name} onChange={e => setValues({...values,name:e.target.value})} />
        </div>
        <div className="mb-4">
          <label htmlFor="authorName" className="block mb-2 font-semibold text-gray-700">Author's Name</label>
          <input type="text" id="authorName" name="authorName" placeholder='Enter an author name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.authorname} onChange={e => setValues({...values,authorname:e.target.value})} />
        </div>
        <div className="mb-4">
          <label htmlFor="publishedDate" className="block mb-2 font-semibold text-gray-700">Published Date</label>
          <input type="date" id="publishedDate" name="publishedDate" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.publishdate} onChange={e => setValues({...values,publishdate:e.target.value})} />
        </div>
        <div className="mb-4">
          <label htmlFor="publisher" className="block mb-2 font-semibold text-gray-700">Publisher</label>
          <input type="text" id="publisher" name="publisher" placeholder='Enter a publisher name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.publisher} onChange={e => setValues({...values,publisher:e.target.value})} />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">Description</label>
          <textarea id="description" name="description" rows="4" placeholder='Enter a description Here' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.description} onChange={e => setValues({...values,description:e.target.value})}></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600">Update</button>
        </div>
      </form>
      <ToastContainer position="top-right" />
    </div>
  )
}
