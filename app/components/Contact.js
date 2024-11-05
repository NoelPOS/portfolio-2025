'use client'
import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    subject: '',
    message: '',
  })

  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.5 })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log(formData)
    setFormData({
      fullname: '',
      email: '',
      phonenumber: '',
      subject: '',
      message: '',
    })
    alert('Message sent successfully!')
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
      id='contact'
      className='py-32 px-[9%] bg-[#323946]'
      initial='hidden'
      animate={isInView ? 'visible' : 'hidden'}
      variants={containerVariants}
    >
      <motion.h2
        className='text-4xl font-bold text-center mb-12'
        variants={itemVariants}
      >
        Contact <span className='text-[#b9e164]'>Me!</span>
      </motion.h2>
      <motion.form
        onSubmit={handleSubmit}
        className='max-w-3xl mx-auto'
        variants={containerVariants}
      >
        <div className='flex flex-wrap -mx-2 mb-4'>
          <motion.div
            className='w-full md:w-1/2 px-2 mb-4'
            variants={itemVariants}
          >
            <input
              type='text'
              name='fullname'
              value={formData.fullname}
              onChange={handleChange}
              placeholder='Full Name'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
              required
            />
          </motion.div>
          <motion.div
            className='w-full md:w-1/2 px-2 mb-4'
            variants={itemVariants}
          >
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
              required
            />
          </motion.div>
        </div>
        <div className='flex flex-wrap -mx-2 mb-4'>
          <motion.div
            className='w-full md:w-1/2 px-2 mb-4'
            variants={itemVariants}
          >
            <input
              type='tel'
              name='phonenumber'
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder='Phone Number'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
            />
          </motion.div>
          <motion.div
            className='w-full md:w-1/2 px-2 mb-4'
            variants={itemVariants}
          >
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Email Subject'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
              required
            />
          </motion.div>
        </div>
        <motion.textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Your Message'
          className='w-full p-4 bg-[#1f242d] rounded-lg text-white mb-4'
          rows='10'
          required
          variants={itemVariants}
        ></motion.textarea>
        <motion.button
          type='submit'
          className='w-full py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-lg shadow-lg hover:shadow-none transition duration-300'
          variants={itemVariants}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </motion.section>
  )
}
