'use client'
import { useState } from 'react'
import Link from 'next/link'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className='fixed top-0 left-0 w-full px-[9%] py-8 flex items-center justify-between bg-[#323946] z-50'>
      <h1 className='text-2xl font-semibold cursor-pointer'>NoelPOS</h1>
      <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
        <Link
          href='#home'
          className='text-lg ml-16 hover:text-[#b9e164] transition duration-300'
        >
          Home
        </Link>
        <Link
          href='#about'
          className='text-lg ml-16 hover:text-[#b9e164] transition duration-300'
        >
          About
        </Link>
        <Link
          href='#portfolio'
          className='text-lg ml-16 hover:text-[#b9e164] transition duration-300'
        >
          Portfolio
        </Link>
        <Link
          href='#contact'
          className='text-lg ml-16 hover:text-[#b9e164] transition duration-300'
        >
          Contact
        </Link>
      </nav>
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className='text-3xl cursor-pointer md:hidden'
      >
        {isMenuOpen ? '✕' : '☰'}
      </button>
    </header>
  )
}
