import Link from 'next/link'

export default function Footer() {
  return (
    <footer className='flex flex-col sm:flex-row items-center justify-between py-6 px-[9%] bg-[#1f242d]'>
      <p className='text-sm text-gray-400 mb-4 sm:mb-0'>
        &copy; {new Date().getFullYear()} Noel Paing Oak Soe. All rights
        reserved.
      </p>
      <div>
        <Link
          href='#home'
          className='inline-flex items-center justify-center p-2 bg-[#b9e164] rounded-lg transition duration-300 hover:shadow-lg'
        >
          <i className='bx bx-up-arrow-alt text-2xl text-[#323946]'></i>
        </Link>
      </div>
    </footer>
  )
}
