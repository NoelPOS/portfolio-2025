'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import conserveLogo from '@/public/assets/conserve-logo.png'
import weatherApp from '@/public/assets/weatherapp.png'
import auvanLogo from '@/public/assets/auVanLogo.png'
import chatAppLogo from '@/public/assets/chatAppLogo.png'
import vetMimiLogo from '@/public/assets/vetMiMiBlogLogo.png'
import chatGPTApp from '@/public/assets/gptCloneLogo.png'

const projects = [
  {
    id: 'conserveapp',
    title: 'Conserve App',
    description:
      'My first hackathon team project where we built a complete app from scratch.',
    image: conserveLogo,
    link: 'https://conserve-landing-page.vercel.app/',
  },
  {
    id: 'auvan',
    title: 'AU Van',
    description:
      'An online booking system for Assumption University van reservations.',
    image: auvanLogo,
    link: 'https://au-van-booking-system.vercel.app/',
  },
  {
    id: 'chatapp',
    title: 'Chat App',
    description:
      'A real-time messaging app with user status and JWT authentication.',
    image: chatAppLogo,
    link: 'https://chatapp-2np7.onrender.com/',
  },
  {
    id: 'vetmimiblog',
    title: 'Vet MiMi-Blog',
    description:
      'A blog platform for sharing veterinary insights with a responsive design and admin controls.',
    image: vetMimiLogo,
    link: 'https://vetmimi-blog.onrender.com/',
  },
  {
    id: 'chatgptapp',
    title: 'Full-Stack ChatGPT App',
    description:
      'A ChatGPT clone built with React, Express, MongoDB, and Google Gemini API.',
    image: chatGPTApp,
    link: 'gptclone-686m.onrender.com',
  },
  {
    id: 'weatherapp',
    title: 'Weathering App',
    description:
      'Using Open Weather Map Api, I created the weather app including the forecast for five days ahead using html, css and javascript...',
    image: weatherApp,
    link: 'https://weather-app-eta-nine-25.vercel.app/',
  },
]

export default function Portfolio() {
  return (
    <motion.section
      id='portfolio'
      className='py-32 px-[9%] dark:bg-[#1f242d] transition-colors duration-300'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        className='text-4xl font-bold text-center mb-16'
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        My Latest <span className='text-[#b9e164]'>Projects</span>
      </motion.h2>
      <motion.div
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            className='relative overflow-hidden rounded-2xl shadow-lg group'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
          >
            <Image
              src={project.image}
              width={300}
              height={300}
              alt={project.title}
              className='w-full h-full object-cover transition duration-300 group-hover:scale-110'
            />
            <motion.div
              className='absolute inset-0 bg-gradient-to-b from-transparent to-[#b9e164] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
            >
              <h4 className='text-3xl font-bold mb-2'>{project.title}</h4>
              <p className='text-lg font-semibold mb-4 px-4 text-center'>
                {project.description}
              </p>
              <div className='flex space-x-4'>
                <Link
                  href={`/projects/${project.id}`}
                  className='w-12 h-12 flex items-center justify-center bg-white rounded-full'
                >
                  <i className='bx bx-info-circle text-2xl text-[#323946]'></i>
                </Link>
                <Link
                  href={project.link}
                  target='_blank'
                  className='w-12 h-12 flex items-center justify-center bg-white rounded-full'
                >
                  <i className='bx bx-link-external text-2xl text-[#323946]'></i>
                </Link>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
