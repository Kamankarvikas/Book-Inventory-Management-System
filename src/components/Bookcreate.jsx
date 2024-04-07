
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function Bookcreate() {
  const [name, setName] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [publishDate, setPublishDate] = useState('');
  const [publisher, setPublisher] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [language, setLanguage] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const navigate = useNavigate();

  const postData = async (event) => {
    event.preventDefault();
    if (!name || !authorName || !publishDate || !publisher || !description || !price || !language) {
      console.error('Please fill in all fields.');
      return;
    }

    try {
      await axios.post(`https://6610db130640280f219d7fe2.mockapi.io/book`, {
        name,
        authorName,
        publishDate,
        publisher,
        description,
        price,
        language
      });

      setShowSuccessMessage(true);
      setTimeout(() => {
        setShowSuccessMessage(false);
        navigate('/');
      }, 2000);

    } catch (error) {
      console.error('Error posting data:', error);
    }
  };

  const cancel = () => {
    navigate("/");
  };

  return (
    <div className="max-w-3xl p-8 mx-auto mt-8 bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-center">Add New Book</h2>
      <form onSubmit={postData} className="space-y-4">
        <div>
          <label htmlFor="bookName" className="block mb-1 font-semibold text-gray-700">Book Name</label>
          <input type="text" id="bookName" name="bookName" placeholder='Enter a book name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={name} onChange={e => setName(e.target.value)} />
        </div>
        
        <div>
          <label htmlFor="authorName" className="block mb-1 font-semibold text-gray-700">Author's Name</label>
          <input type="text" id="authorName" name="authorName" placeholder='Enter an author name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={authorName} onChange={e => setAuthorName(e.target.value)} />
        </div>
        <div>
          <label htmlFor="publishedDate" className="block mb-1 font-semibold text-gray-700">Published Date</label>
          <input type="date" id="publishedDate" name="publishedDate" className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={publishDate} onChange={e => setPublishDate(e.target.value)} />
        </div>
        <div>
          <label htmlFor="publisher" className="block mb-1 font-semibold text-gray-700">Publisher</label>
          <input type="text" id="publisher" name="publisher" placeholder='Enter a publisher name' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={publisher} onChange={e => setPublisher(e.target.value)} />
        </div>
        <div>
          <label htmlFor="price" className="block mb-1 font-semibold text-gray-700">Price</label>
          <input type="number" id="price" name="price" placeholder='Enter the price' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div>
          <label htmlFor="language" className="block mb-1 font-semibold text-gray-700">Language</label>
          <input type="text" id="language" name="language" placeholder='Enter the language' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={language} onChange={e => setLanguage(e.target.value)} />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1 font-semibold text-gray-700">Description</label>
          <textarea id="description" name="description" rows="4" placeholder='Enter a description Here' className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500" value={description} onChange={e => setDescription(e.target.value)}></textarea>
        </div>
        <div className="flex justify-center">
          <button type="submit" className="px-4 py-2 text-white bg-blue-500 rounded-lg focus:outline-none hover:bg-blue-600">Submit</button>
          <button type="button" onClick={cancel} className="px-4 py-2 ml-4 text-white bg-red-500 rounded-lg focus:outline-none hover:bg-red-600">Cancel</button>
        </div>
      </form>
      {showSuccessMessage && (
        <div className="px-6 py-4 mb-4 text-white bg-green-500 rounded-lg">
          Book created successfully!
        </div>
      )}
    </div>
  );
}
