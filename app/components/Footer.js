'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <motion.footer
      className='flex flex-col sm:flex-row items-center justify-between py-6 px-[9%] bg-[#1f242d]'
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.p
        className='text-sm text-gray-400 mb-4 sm:mb-0'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        &copy; {new Date().getFullYear()} Noel Paing Oak Soe. All rights
        reserved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        <Link
          href='#home'
          className='inline-flex items-center justify-center p-2 bg-[#b9e164] rounded-lg transition duration-300 hover:shadow-lg'
        >
          <motion.i
            className='bx bx-up-arrow-alt text-2xl text-[#323946]'
            whileHover={{ y: -5 }}
            transition={{ type: 'spring', stiffness: 400, damping: 10 }}
          ></motion.i>
        </Link>
      </motion.div>
    </motion.footer>
  )
}
