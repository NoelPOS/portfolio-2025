'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Profile from '@/public/assets/profile-pic.png'

export default function Home() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = '/assets/Resume-NoelPos.pdf'
    link.download = 'resume.pdf'
    link.click()
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.section
      ref={ref}
      id='home'
      className='min-h-screen flex items-center justify-center py-32 px-[9%]'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='flex flex-col md:flex-row items-center justify-between w-full'>
        <motion.div className='md:w-1/2' variants={containerVariants}>
          <motion.h3 className='text-3xl font-bold' variants={itemVariants}>
            Hello! It&apos;s me
          </motion.h3>
          <motion.h1
            className='text-5xl font-bold my-4'
            variants={itemVariants}
          >
            Noel Paing Oak Soe
          </motion.h1>
          <motion.h3
            className='text-3xl font-bold mb-4'
            variants={itemVariants}
          >
            I&apos;m a{' '}
            <span className='text-[#b9e164]'>Motivated CS Student</span>
          </motion.h3>
          <motion.p className='text-lg mb-8' variants={itemVariants}>
            I like to think of the world as a combination of complex problems to
            solve and believe that sharpening my logic, ideas and visions is the
            key to achieve the answer!
          </motion.p>
          <motion.div className='flex mb-8' variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <Link
                href={`https://www.facebook.com/noel.p.soe.1`}
                target='_blank'
                className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
              >
                <i className={`bx bxl-facebook`}></i>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href={`https://www.github.com/NoelPOS`}
                target='_blank'
                className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
              >
                <i className={`bx bxl-github`}></i>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href={`https://www.instagram.com/noel_pos/`}
                target='_blank'
                className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
              >
                <i className={`bx bxl-instagram`}></i>
              </Link>
            </motion.div>
            <motion.div variants={itemVariants}>
              <Link
                href={`https://www.linkedin.com/in/noelpos`}
                target='_blank'
                className='w-12 h-12 flex items-center justify-center border-2 border-[#b9e164] rounded-full text-2xl text-[#b9e164] mr-6 hover:bg-[#b9e164] hover:text-[#323946] transition duration-300'
              >
                <i className={`bx bxl-linkedin`}></i>
              </Link>
            </motion.div>
          </motion.div>
          <motion.div variants={itemVariants}>
            <Link
              href='#'
              onClick={handleDownload}
              className='inline-block px-8 py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300'
            >
              Download Resume
            </Link>
          </motion.div>
        </motion.div>
        <motion.div
          className='md:w-1/2 mt-8 md:mt-0'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Image
            src={Profile}
            width={500}
            height={500}
            alt='Noel Paing Oak Soe'
            className='rounded-full'
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
