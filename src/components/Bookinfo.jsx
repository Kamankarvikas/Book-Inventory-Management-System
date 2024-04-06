// import React from 'react'

// export default function Bookinfo({book}) {
//     if (!book) {
//         return <div>Loading...</div>;
//       }
//   return (
//     <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
//  <h2 className="mb-4 text-2xl font-semibold">{book.name}</h2>
//       <p><strong>Author:</strong> {book.authorname}</p>
//       <p><strong>Published Date:</strong> {book.publishdate}</p>
//       <p><strong>Publisher:</strong> {book.publisher}</p>
//       <p><strong>Description:</strong> {book.description}</p>
//   </div>
//   )
// }
import React from 'react';
import { useParams } from 'react-router-dom';

export default function Bookinfo({ APIData }) {
  const { id } = useParams();
  const book = APIData.find(book => book.id === id);

  if (!book) {
    return <div>Loading...</div>;
  }

  return (
    <div className="max-w-md p-8 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold">{book.name}</h2>
      <p><strong>Author:</strong> {book.authorname || book.authorName}</p>
      <p><strong>Published Date:</strong> {book.publishdate || book.publishDate}</p>
      <p><strong>Publisher:</strong> {book.publisher}</p>
      <p><strong>Description:</strong> {book.description}</p>
    </div>
  );
}
