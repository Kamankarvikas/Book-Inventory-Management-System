import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link} from 'react-router-dom';

export default function Bookget() {
  const [APIData, setAPIData] = useState([]);
  

  useEffect(() => {
    axios.get(`https://6610db130640280f219d7fe2.mockapi.io/book`)
      .then((response) => {
        setAPIData(response.data);
      })
  }, [])
  const handleDelete=(id)=>{
    axios.delete(`https://6610db130640280f219d7fe2.mockapi.io/book/${id}`)
    .then(() => {
       getData();
   })


  }
  const getData = () => {
    axios.get(`https://6610db130640280f219d7fe2.mockapi.io/book`)
        .then((getData) => {
             setAPIData(getData.data);
         })
}


  return (
    <div>
      <h1 className="mb-4 text-2xl font-semibold">List of Books</h1>
      <ul className="ml-6 list-disc">
        {APIData.map((book) => (
          <li key={book.id} className="flex items-center justify-between">
            <Link to={`/book/${book.id}`} className="text-blue-500 hover:underline">
              {book.name}
              
            </Link>
           
            <div className="flex space-x-2">
           
              <Link className="px-2 py-1 text-white bg-green-500 border border-2 border-green-600 rounded " to={`/update/${book.id}`}>Update</Link>
              
              <button className="px-2 py-1 text-white bg-red-500 border border-2 rounded hover:bg-red-600" onClick={() => handleDelete(book.id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
