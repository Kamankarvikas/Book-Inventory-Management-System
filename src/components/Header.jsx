import React from 'react'
import {Link} from 'react-router-dom'
export default function Header() {
  return (
  
     <header className='shadow-md bg-slate-200'>
      <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
        <Link to='/bookcreate'>
          <h1 className='flex flex-wrap text-sm font-bold sm:text-xl'>
          <span className="inline-block bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 cursor-pointer">Create book</span>
          </h1>
        </Link>
        {/* <Link to='/about'>
            <li className=' text-slate-700 hover:underline'>
              About
            </li>
          </Link> */}
        </div>
    </header>
   
  )
}
