import React from 'react'
import {Link} from 'react-router-dom'
import { FaSearch } from 'react-icons/fa';
export default function Header() {
  return (
    <header className='shadow-md bg-slate-200'>
      <div className='flex items-center justify-between max-w-6xl p-3 mx-auto'>
        <Link to='/'>
          <h1 className='flex flex-wrap text-sm font-bold sm:text-xl'>
            <span className='text-slate-500'>Book</span>
            <span className='text-slate-700'>Inventory</span>
          </h1>
        </Link>
        <ul className='flex gap-4'>
          <Link to='/'>
            <li className='hidden sm:inline text-slate-700 hover:underline'>
              Home
            </li>
          </Link>
          <Link to='/about'>
            <li className=' text-slate-700 hover:underline'>
              About
            </li>
          </Link>
          </ul>
      </div>
    </header>
   
  )
}
