import React from 'react'

export default function About() {
  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
    <h1 className="mb-6 text-3xl font-semibold text-center">Book Inventory Management System</h1>
    
    <div className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">Overview</h2>
      <p className="mb-4 text-gray-700">
        Our Book Inventory Management System is a comprehensive solution designed to help businesses and individuals efficiently manage their book inventory. 
        Whether you're a bookstore, library, or avid reader with a large personal collection, our system offers the tools you need to organize, track, and maintain your inventory seamlessly.
      </p>
    </div>

    <div className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">Key Features</h2>
    
        <li className="mb-2 text-gray-700">Effortlessly add, edit, and delete books from your inventory.</li>
        <li className="mb-2 text-gray-700">Integration with external APIs for automatic book data retrieval.</li>
     
    </div>

    <div className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">Future Plans</h2>
      <li className="mb-2 text-gray-700">Search and filter functionality for quick access to specific books.</li>
          <li className="mb-2 text-gray-700">User authentication and authorization to ensure data security.</li>
          <li className="mb-2 text-gray-700">Reporting and analytics tools to gain insights into inventory trends.</li>
    </div>

    <div className="mb-8">
      <h2 className="mb-2 text-xl font-semibold">Contact Us</h2>
      <p className="mb-4 text-gray-700">
        For inquiries, feedback, or collaboration opportunities, please don't hesitate to reach out to us at <a href="mailto:vikaskamankar60@gmail.com" className="text-blue-500 hover:underline">vikaskamankar60@gmail.com</a>.
      </p>
    </div>
  </div>
  )
}
