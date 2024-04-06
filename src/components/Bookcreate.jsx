// import React from 'react'
// import { useState } from 'react'
// import axios from 'axios';
// import { toast, ToastContainer } from 'react-toastify';
// import {useNavigate} from 'react-router-dom'
// import 'react-toastify/dist/ReactToastify.css';
// export default function Bookcreate() {
//     const [name,setname]=useState('');
//     const [authorname,setauthorname]=useState('');
//     const [publishdate,setpublishdate]=useState('');
//     const [publisher,setpublisher]=useState('');
//     const [description,setdescription]=useState('');
//     const navigate=useNavigate();
   
//     const postData = async (event) => {
//         event.preventDefault(); 
    
//         try {
//           const response = await axios.post(`https://6610db130640280f219d7fe2.mockapi.io/book`, {
//             name,
//             authorname,
//             publishdate,
//             publisher,
//             description
//           });
//           toast.success('Book added successfully!', {
//             position: toast.POSITION.TOP_RIGHT
//           });
//           console.log(response.data); 
//           navigate("/");

//         } catch (error) {
//           console.error('Error posting data:', error);
//           toast.error('Error adding the book. Please try again later.', {
//             position: toast.POSITION.TOP_RIGHT
//           });
//         }
//       };
    
//   return (
//     <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg">
//     <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
//     <form  onSubmit={postData}>
//       <div className="mb-4">
//         <label htmlFor="bookName" className="block text-gray-700 font-semibold mb-2">Book Name</label>
//         <input type="text" id="bookName" name="bookName" palceholder='enter a book name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={name} onChange={e => setname(e.target.value)} />
//       </div>
//       <div className="mb-4">
//         <label htmlFor="authorName" className="block text-gray-700 font-semibold mb-2">Author's Name</label>
//         <input type="text" id="authorName" name="authorName" palceholder='enter a Authors name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={authorname} onChange={e=>setauthorname(e.target.value)}/>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="publishedDate" className="block text-gray-700 font-semibold mb-2">Published Date</label>
//         <input type="date" id="publishedDate" name="publishedDate" palceholder='enter a publish name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={publishdate} onChange={e=>setpublishdate(e.target.value)}/>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="publisher" className="block text-gray-700 font-semibold mb-2">Publisher</label>
//         <input type="text" id="publisher" name="publisher" palceholder='enter a publisher name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={publisher} onChange={e=>setpublisher(e.target.value)}/>
//       </div>
//       <div className="mb-4">
//         <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
//         <textarea id="description" name="description" rows="4" palceholder='enter a description Here' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={description} onChange={e=>setdescription(e.target.value)}></textarea>
//       </div>
//       <div className="flex justify-center">
//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
//       </div>
//     </form>
//     <ToastContainer />
//   </div>
//   )
// }


import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

export default function Bookcreate() {
  const [name, setName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [publisher, setPublisher] = useState('');
  const [description, setDescription] = useState('');
  const navigate = useNavigate();

  const postData = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(`https://6610db130640280f219d7fe2.mockapi.io/book`, {
        name,
        authorName,
        publishDate,
        publisher,
        description
      });

      toast.success('Book added successfully!', {
        position: "top-right"
      });
      console.log(response.data);
      navigate("/");

    } catch (error) {
      console.error('Error posting data:', error);
      toast.error('Error adding the book. Please try again later.', {
        position: "top-right"
      });
    }
  };

  return (
    <div className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-lg ">
      <h2 className="text-2xl font-semibold mb-4">Add a New Book</h2>
      <form onSubmit={postData}>
        <div className="mb-4">
          <label htmlFor="bookName" className="block text-gray-700 font-semibold mb-2">Book Name</label>
          <input type="text" id="bookName" name="bookName" placeholder='Enter a book name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={name} onChange={e => setName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="authorName" className="block text-gray-700 font-semibold mb-2">Author's Name</label>
          <input type="text" id="authorName" name="authorName" placeholder='Enter an author name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={authorName} onChange={e => setAuthorName(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="publishedDate" className="block text-gray-700 font-semibold mb-2">Published Date</label>
          <input type="date" id="publishedDate" name="publishedDate" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={publishDate} onChange={e => setPublishDate(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="publisher" className="block text-gray-700 font-semibold mb-2">Publisher</label>
          <input type="text" id="publisher" name="publisher" placeholder='Enter a publisher name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={publisher} onChange={e => setPublisher(e.target.value)} />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-semibold mb-2">Description</label>
          <textarea id="description" name="description" rows="4" placeholder='Enter a description Here' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">Submit</button>
        </div>
      </form>
      <ToastContainer position="top-right" />
    </div>
  )
}
