'use client'

import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import conserveLogo from '@/public/assets/conserve-logo.png'
import weatherApp from '@/public/assets/weatherapp.png'
import chatGPTApp from '@/public/assets/gptCloneLogo.png'
import auvanLogo from '@/public/assets/auVanLogo.png'
import chatAppLogo from '@/public/assets/chatAppLogo.png'
import vetMimiLogo from '@/public/assets/vetMiMiBlogLogo.png'

const projects = {
  conserveapp: {
    title: 'Conserve App',
    description:
      'A user-friendly app designed to help individuals track and reduce their carbon footprint, developed during the TriValley Summer Long Hackathon.',
    image: conserveLogo,
    link: 'https://conserve-landing-page.vercel.app/',
    details: `The Conserve App was inspired by our experiences in a sustainability course. Realizing that many existing carbon tracking apps were overly complex, we developed CONSERVE as an accessible tool for daily, user-friendly carbon emission tracking.`,
    features: [
      'Daily Carbon Emission Tracking',
      'User Authentication and Profile Management',
      'Daily Surveys and Notifications',
      'Insights and Achievement Badges',
      'Personalized Streak Tracking',
    ],
    technologies: [
      'React Native',
      'Expo',
      'Express.js',
      'Node.js',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    challenges: [
      'Learning mobile development with React Native',
      'Overcoming server deployment challenges',
      'Finding accurate data for carbon emission calculations',
    ],
    outcome: `This project enhanced our understanding of mobile app development, team collaboration, and sustainability. We gained valuable insights into building impactful applications with real-world relevance.`,
  },
  weatherapp: {
    title: 'Weathering App',
    description: 'A sleek weather application providing real-time forecasts.',
    image: weatherApp,
    link: 'https://weather-app-eta-nine-25.vercel.app/',
    details: `The Weathering App offers users a comprehensive view of current weather conditions 
      and future forecasts for any location worldwide.`,
    features: [
      'Real-time Weather Data',
      'Five-Day Forecast',
      'Location-based Weather',
      'Weather Maps',
      'Severe Weather Alerts',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'OpenWeatherMap API',
      'Geolocation API',
      'Responsive Web Design',
    ],
    challenges: [
      'Parsing complex API data',
      'Implementing error handling for API requests',
      'Optimizing performance for mobile devices',
    ],
    outcome: `This project significantly improved my skills in working with third-party APIs 
      and creating intuitive user interfaces. It also taught me the importance of 
      error handling and providing a seamless user experience.`,
  },
  chatgptapp: {
    title: 'Full-Stack ChatGPT App',
    description:
      'Built a ChatGPT clone app using React, Express, MongoDB, and Google Gemini API.',
    image: chatGPTApp,
    link: 'https://gptclone-686m.onrender.com',
    details: `This project was developed as a full-stack application integrating Google Gemini API 
      to create a ChatGPT-like AI chatbot. It includes user authentication, real-time chat, 
      and image upload features, and is hosted on a VPS server.`,
    features: [
      'Real-time AI Chat',
      'Image Upload and Optimization',
      'User Authentication with Clerk',
      'Persistent Chat Storage',
      'Secure API Requests',
    ],
    technologies: [
      'React 19',
      'Express',
      'MongoDB',
      'Google Gemini API',
      'Clerk',
      'ImageKit',
    ],
    challenges: [
      'Real-time chat streaming',
      'Integrating Google Gemini API for chat AI',
      'Optimizing for large datasets in MongoDB',
    ],
    outcome: `This project enhanced my skills in integrating third-party AI APIs, working with 
      full-stack frameworks, and managing real-time communication in web applications.`,
  },
  auvan: {
    title: 'AU Van',
    description: 'Online booking system for Assumption University vans.',
    image: auvanLogo,
    link: 'https://au-van-booking-system.vercel.app',
    details: `AU Van is a booking platform created to streamline van reservations for Assumption University students and staff.`,
    features: [
      'User/Admin Interfaces',
      'Booking Management',
      'Secure Login',
      'Reservation History',
    ],
    technologies: ['Next.js', 'MongoDB', 'NextAuth', 'Vercel'],
    challenges: [
      'Implementing secure user authentication',
      'Designing efficient booking logic',
      'Managing user roles and permissions',
    ],
    outcome: `Developing AU Van improved my ability to build user-centric applications with secure data management and efficient booking flows.`,
  },
  chatapp: {
    title: 'Chat App',
    description: 'Real-time chat app with user status.',
    image: chatAppLogo,
    link: 'https://chatapp-2np7.onrender.com',
    details: `This Chat App supports live messaging with user status tracking, enhancing real-time communication.`,
    features: [
      'JWT Authentication',
      'Live Messaging',
      'User Presence Status',
      'Global State Management',
    ],
    technologies: ['MERN Stack', 'Socket.io', 'Tailwind CSS'],
    challenges: [
      'Implementing real-time messaging efficiently',
      'Securing user data',
      'Handling global state with Zustand and React Context',
    ],
    outcome: `This project improved my real-time communication skills and my ability to manage user authentication and state across the app.`,
  },
  vetmimiblog: {
    title: 'Vet MiMi-Blog',
    description: 'Responsive blog platform with admin controls.',
    image: vetMimiLogo,
    link: 'https://vetmimi-blog.onrender.com',
    details: `Vet MiMi-Blog is a blog platform for sharing veterinary insights, equipped with admin controls and a responsive design.`,
    features: [
      'Post Management',
      'CRUD Operations',
      'Dark Mode',
      'Search Functionality',
    ],
    technologies: ['MERN Stack', 'Tailwind CSS', 'Render'],
    challenges: [
      'Creating a scalable admin panel',
      'Implementing search and filter functions',
      'Ensuring responsive design',
    ],
    outcome: `Developing Vet MiMi-Blog refined my skills in CRUD operations, responsive design, and the setup of admin controls.`,
  },
}

export default function ProjectPage({ params }) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const project = projects[params.id]

  if (!project) {
    notFound()
  }

  if (!mounted) {
    return null
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className='min-h-screen py-16 px-4 sm:px-6 lg:px-8 dark:bg-[#1f242d] transition-colors duration-300'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.h1
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className='text-3xl sm:text-4xl font-bold mb-8 text-center'
        >
          {project.title}
        </motion.h1>
        <div className='flex flex-col lg:flex-row gap-8'>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className='lg:w-1/2'
          >
            <Image
              src={project.image}
              width={400}
              height={300}
              alt={project.title}
              className='rounded-lg shadow-lg w-full h-auto object-cover'
            />
            <div className='mt-8 text-center'>
              <Link
                href={project.link}
                target='_blank'
                className='inline-block px-6 py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300 transform hover:scale-105'
              >
                View Project
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className='lg:w-1/2'
          >
            <p className='text-xl mb-6 font-semibold'>{project.description}</p>
            <div className='prose dark:prose-invert max-w-none'>
              <p>{project.details}</p>
              <h3 className='text-2xl font-bold mt-6 mb-4'>Key Features</h3>
              <ul>
                {project.features.map((feature, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  >
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <h3 className='text-2xl font-bold mt-6 mb-4'>
                Technologies Used
              </h3>
              <div className='flex flex-wrap gap-2'>
                {project.technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                    className='bg-[#b9e164] text-[#323946] px-3 py-1 rounded-full text-sm'
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
              <h3 className='text-2xl font-bold mt-6 mb-4'>
                Challenges Overcome
              </h3>
              <ul>
                {project.challenges.map((challenge, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  >
                    {challenge}
                  </motion.li>
                ))}
              </ul>
              <h3 className='text-2xl font-bold mt-6 mb-4'>Outcome</h3>
              <p>{project.outcome}</p>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          className='mt-12 text-center'
        >
          <Link href='/#portfolio' className='text-[#b9e164] hover:underline'>
            ← Back to Portfolio
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
