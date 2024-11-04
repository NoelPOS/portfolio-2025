'use client'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    fullname: '',
    email: '',
    phonenumber: '',
    subject: '',
    message: '',
  })

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log(formData)
    // Reset form after submission
    setFormData({
      fullname: '',
      email: '',
      phonenumber: '',
      subject: '',
      message: '',
    })
    alert('Message sent successfully!')
  }

  return (
    <section id='contact' className='py-32 px-[9%] bg-[#323946]'>
      <h2 className='text-4xl font-bold text-center mb-12'>
        Contact <span className='text-[#b9e164]'>Me!</span>
      </h2>
      <form onSubmit={handleSubmit} className='max-w-3xl mx-auto'>
        <div className='flex flex-wrap -mx-2 mb-4'>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <input
              type='text'
              name='fullname'
              value={formData.fullname}
              onChange={handleChange}
              placeholder='Full Name'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
              required
            />
          </div>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <input
              type='email'
              name='email'
              value={formData.email}
              onChange={handleChange}
              placeholder='Email Address'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
              required
            />
          </div>
        </div>
        <div className='flex flex-wrap -mx-2 mb-4'>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <input
              type='tel'
              name='phonenumber'
              value={formData.phonenumber}
              onChange={handleChange}
              placeholder='Phone Number'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
            />
          </div>
          <div className='w-full md:w-1/2 px-2 mb-4'>
            <input
              type='text'
              name='subject'
              value={formData.subject}
              onChange={handleChange}
              placeholder='Email Subject'
              className='w-full p-4 bg-[#1f242d] rounded-lg text-white'
              required
            />
          </div>
        </div>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          placeholder='Your Message'
          className='w-full p-4 bg-[#1f242d] rounded-lg text-white mb-4'
          rows='10'
          required
        ></textarea>
        <button
          type='submit'
          className='w-full py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-lg shadow-lg hover:shadow-none transition duration-300'
        >
          Send Message
        </button>
      </form>
    </section>
  )
}
