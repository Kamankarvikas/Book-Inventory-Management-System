import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function Bookget() {
  const [APIData, setAPIData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [deleteId, setDeleteId] = useState(null);
  const [showDeleteMessage, setShowDeleteMessage] = useState(false);

  useEffect(() => {
    axios.get(`https://6610db130640280f219d7fe2.mockapi.io/book`)
      .then((response) => {
        setAPIData(response.data);
      });
  }, []);

  const handleDeleteConfirmation = (id) => {
    setShowModal(true);
    setDeleteId(id);
  }

  const handleDelete = () => {
    axios.delete(`https://6610db130640280f219d7fe2.mockapi.io/book/${deleteId}`)
      .then(() => {
        getData();
        setShowModal(false);
        setShowDeleteMessage(true); 
        setTimeout(() => {
          setShowDeleteMessage(false); 
        }, 2000);
      });
  };

  const getData = () => {
    axios.get(`https://6610db130640280f219d7fe2.mockapi.io/book`)
      .then((getData) => {
        setAPIData(getData.data);
      });
  };

  return (
    <div>
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
          <div className="p-4 bg-white rounded-md shadow-md">
            <p className="mb-2 text-center">Are you sure you want to delete this book?</p>
            <div className="flex justify-center">
              <button onClick={handleDelete} className="px-4 py-2 mr-2 text-white bg-red-500 rounded-md">Yes</button>
              <button onClick={() => setShowModal(false)} className="px-4 py-2 text-gray-700 bg-gray-300 rounded-md">Cancel</button>
            </div>
          </div>
        </div>
      )}

      {/* {showDeleteMessage && (
        <div className="absolute top-0 left-0 right-0 p-2 text-center text-white bg-green-500">
          Book deleted successfully!
        </div>
      )} */}
      {showDeleteMessage && (
  <div className="fixed p-2 text-center text-white transform -translate-x-1/2 -translate-y-1/2 bg-green-500 top-1/2 left-1/2">
    Book deleted successfully!
  </div>
)}


      <h1 className="mt-6 mb-4 text-2xl font-semibold text-custom-color font-custom">Available Books</h1>

      <div className="flex justify-end mb-4">
        <Link to='/bookcreate' className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add Book+</Link>
      </div>

      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">Serial No.</th>
            <th className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">Book Name</th>
            <th className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">Book Author</th>
            <th className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">Book Publisher</th>
            <th className="px-6 py-3 text-xs font-bold text-center text-gray-500 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {APIData.map((book, index) => (
            <tr key={book.id}>
              <td className="px-6 py-4 whitespace-nowrap font-custom">{index + 1}</td>
              <td className="px-6 py-4 whitespace-nowrap font-custom">{book.name}</td>
              <td className="px-6 py-4 whitespace-nowrap font-custom">{book.authorName}</td>
              <td className="px-6 py-4 whitespace-nowrap font-custom">{book.publisher}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <Link to={`/book/${book.id}`} className="text-white bg-green-500 hover:bg-green-600 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2">View</Link>
                <Link to={`/update/${book.id}`} className="text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Update</Link>
                <button onClick={() => handleDeleteConfirmation(book.id)} className="text-white bg-red-500 hover:bg-red-600 focus:outline-none focus:ring-4 focus:ring-red-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
