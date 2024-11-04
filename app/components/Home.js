'use client'

import Image from 'next/image'
import Link from 'next/link'
import Profile from '@/public/assets/profile-pic.png'

export default function Home() {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/assets/resume.pdf'
    link.download = 'resume.pdf'
    link.click()
  }

  return (
    <section
      id='home'
      className='min-h-screen flex items-center justify-center py-32 px-[9%]'
    >
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <div className='md:w-1/2'>
          <h3 className='text-3xl font-bold'>Hello! It&apos;s me</h3>
          <h1 className='text-5xl font-bold my-4'>Noel Paing Oak Soe</h1>
          <h3 className='text-3xl font-bold mb-4'>
            I&apos;m a{' '}
            <span className='text-[#b9e164]'>Motivated CS Student</span>
          </h3>
          <p className='text-lg mb-8'>
            I like to think of the world as a combination of complex problems to
            solve and believe that sharpening my logic, ideas and visions is the
            key to achieve the answer!
          </p>
          <div className='flex mb-8'>
            <Link
              href='https://www.facebook.com/noel.p.soe.1'
              target='_blank'
              className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
            >
              <i className='bx bxl-facebook'></i>
            </Link>
            <Link
              href='https://github.com/NoelPOS'
              target='_blank'
              className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
            >
              <i className='bx bxl-github'></i>
            </Link>
            <Link
              href='https://www.instagram.com/noel_pos/'
              target='_blank'
              className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
            >
              <i className='bx bxl-instagram'></i>
            </Link>
            <Link
              href='https://www.linkedin.com/in/noel-paing-oak-soe-b89605217/'
              target='_blank'
              className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
            >
              <i className='bx bxl-linkedin'></i>
            </Link>
          </div>
          <Link
            href='#'
            onClick={handleDownload}
            className='inline-block px-8 py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300'
          >
            Download Resume
          </Link>
        </div>
        <div className='md:w-1/2 mt-8 md:mt-0'>
          <Image
            src={Profile}
            width={500}
            height={500}
            alt='Noel Paing Oak Soe'
            className='rounded-full animate-pulse'
          />
        </div>
      </div>
    </section>
  )
}
