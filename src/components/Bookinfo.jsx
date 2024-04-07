import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

export default function Bookinfo() {
  const { id } = useParams();
  const [book, setBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`https://6610db130640280f219d7fe2.mockapi.io/book/${id}`)
      .then(response => {
        setBook(response.data);
      })
      .catch(error => {
        console.error('Error fetching book:', error);
      });
  }, [id]);

  const cancel = () => {
    navigate("/");
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      {book ? (
        <div className="overflow-hidden bg-white rounded-md shadow-md">
          <div className="p-6">
            <h2 className="mb-2 text-xl font-semibold">{book.name}</h2>
            <p className="mb-2 text-gray-600"><strong>Author Name:</strong> {book.authorName}</p>
            <p className="mb-2 text-gray-600"><strong>Published Date:</strong> {book.publishDate}</p>
            <p className="mb-2 text-gray-600"><strong>Publisher Name:</strong> {book.publisher}</p>
            <p className="mb-2 text-gray-600"><strong>Book Price:</strong> {book.price}</p>
            <p className="mb-2 text-gray-600"><strong>Book Language:</strong> {book.language}</p>
            <p className="mb-4 text-gray-600"><strong>Description:</strong> {book.description}</p>
            <button
              type="button"
              onClick={cancel}
              className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
            >
              Close
            </button>
          </div>
        </div>
      ) : (
        <div className="text-center">Loading...</div>
      )}
    </div>
  );
}


