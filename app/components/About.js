'use client'

import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

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
      id='about'
      className='min-h-screen flex items-center justify-center py-32 px-[9%] bg-[#323946]'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <div className='flex flex-col md:flex-row items-center justify-between gap-16'>
        <motion.div className='md:w-1/2 text-center' variants={itemVariants}>
          <motion.i
            className='bx bx-info-circle text-[35rem] text-[#b9e164] shadow-lg shadow-[#b9e164] rounded-full'
            whileHover={{ scale: 1.05, rotate: 360 }}
            transition={{ duration: 0.5 }}
          ></motion.i>
        </motion.div>
        <motion.div className='md:w-1/2' variants={containerVariants}>
          <motion.h2
            className='text-4xl font-bold mb-4'
            variants={itemVariants}
          >
            About <span className='text-[#b9e164]'>Me</span>
          </motion.h2>
          <motion.h3
            className='text-2xl font-bold mb-4'
            variants={itemVariants}
          >
            Full Stack Web Developer
          </motion.h3>
          <motion.p className='text-lg mb-8' variants={itemVariants}>
            I use my knowledge to create responsive websites that are useful for
            individuals and organizations. Eager to try out new things whenever
            I get the chance, I&apos;d like to blaze my path of long-lasting
            coding journey with dedication and determination...
          </motion.p>
          <motion.div variants={itemVariants}>
            <Link
              href='#contact'
              className='inline-block px-8 py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300'
            >
              My Coding Journey!
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  )
}
