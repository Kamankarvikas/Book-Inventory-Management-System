import React from 'react'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';

export default function Bookupdate() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [values, setValues] = useState({
        id: id,
        name: '',
        authorName: '',
        publishDate: '',
        publisher: '',
        price: '',
        language: '',
        description: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        axios.get('https://6610db130640280f219d7fe2.mockapi.io/book/' + id)
            .then(res => {
                setValues({
                    ...values,
                    name: res.data.name,
                    authorName: res.data.authorName,
                    publishDate: res.data.publishDate,
                    publisher: res.data.publisher,
                    price: res.data.price,
                    language: res.data.language,
                    description: res.data.description
                })
            })
            .catch(err => console.log(err))
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.put('https://6610db130640280f219d7fe2.mockapi.io/book/' + id, values)
            .then(res => {
                setShowSuccessMessage(true);
                setTimeout(() => {
                    setShowSuccessMessage(false);
                    navigate('/');
                }, 2000); 
            })
            .catch(err => console.log(err))
    }
    
    const cancel = () => {
        navigate("/");
    };

    return (
        <div className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-lg">
            <h2 className="mb-4 text-2xl font-semibold">Update Book</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label htmlFor="bookName" className="block mb-2 font-semibold text-gray-700">Book Name</label>
                    <input type="text" id="bookName" name="bookName" placeholder='Enter a book name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.name} onChange={e => setValues({...values,name:e.target.value})} />
                </div>
                <div className="mb-4">
                    <label htmlFor="authorName" className="block mb-2 font-semibold text-gray-700">Author's Name</label>
                    <input type="text" id="authorName" name="authorName" placeholder='Enter an author name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.authorName} onChange={e => setValues({...values,authorName:e.target.value})} />
                </div>
                <div className="mb-4">
                    <label htmlFor="publishedDate" className="block mb-2 font-semibold text-gray-700">Published Date</label>
                    <input type="text" id="publishedDate" name="publishedDate" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.publishDate} onChange={e => setValues({...values, publishDate: e.target.value})} />
                </div>
                <div className="mb-4">
                    <label htmlFor="publisher" className="block mb-2 font-semibold text-gray-700">Publisher</label>
                    <input type="text" id="publisher" name="publisher" placeholder='Enter a publisher name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.publisher} onChange={e => setValues({...values,publisher:e.target.value})} />
                </div>
                <div className="mb-4">
                    <label htmlFor="price" className="block mb-2 font-semibold text-gray-700">Price</label>
                    <input type="text" id="price" name="price" placeholder='Enter the price' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.price} onChange={e => setValues({...values,price:e.target.value})}  />
                </div>
                <div className="mb-4">
                    <label htmlFor="language" className="block mb-2 font-semibold text-gray-700">Language</label>
                    <input type="text" id="language" name="language" placeholder='Enter the language' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.language} onChange={e => setValues({...values,language:e.target.value})} />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block mb-2 font-semibold text-gray-700">Description</label>
                    <textarea id="description" name="description" rows="4" placeholder='Enter a description Here' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={values.description} onChange={e => setValues({...values,description:e.target.value})}></textarea>
                </div>
                <div className="flex justify-center space-x-4">
                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Update</button>
                    <button type="button" onClick={cancel} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Cancel</button>
                </div>
            </form>
            {showSuccessMessage && (
                <div className="px-6 py-4 mb-4 text-white bg-green-500 rounded-lg">
                    Book updated successfully!
                </div>
            )}
            <ToastContainer position="top-right" />
        </div>
    )
}
