'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import {
  ArrowLeft,
  Book,
  Briefcase,
  Code,
  GraduationCap,
  Rocket,
} from 'lucide-react'

export default function AboutPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <motion.div
      className='min-h-screen bg-gradient-to-br from-[#323946] to-[#1f242d] text-white py-20 px-4 sm:px-6 lg:px-8'
      initial='hidden'
      animate='visible'
      variants={containerVariants}
    >
      <div className='max-w-3xl mx-auto lg:max-w-5xl xl:max-w-6xl 2xl:max-w-7xl px-4 sm:px-6 lg:px-8 xl:px-12'>
        <motion.h1
          className='text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl font-bold mb-8 lg:mb-12 text-center'
          variants={itemVariants}
        >
          My <span className='text-[#b9e164]'>Coding Journey</span>
        </motion.h1>

        <motion.section
          className='mb-12 lg:mb-16 bg-[#2a303c] rounded-lg p-6 lg:p-8 xl:p-10 shadow-lg'
          variants={itemVariants}
        >
          <h2 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 lg:mb-6 flex items-center'>
            <GraduationCap className='mr-2 text-[#b9e164] w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            Education
          </h2>
          <p className='mb-2 lg:text-lg'>
            Bachelor of Computer Science, Assumption University of Thailand
          </p>
          <p className='text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400'>
            November 2022 – March 2026
          </p>
          <ul className='list-disc list-inside mt-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            <li>Concentration in Data Science</li>
            <li>Self-studying Software Engineering</li>
            <li>Current GPA: 3.91</li>
          </ul>
        </motion.section>

        <motion.section
          className='mb-12 lg:mb-16 bg-[#2a303c] rounded-lg p-6 lg:p-8 xl:p-10 shadow-lg'
          variants={itemVariants}
        >
          <h2 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 lg:mb-6 flex items-center'>
            <Code className='mr-2 text-[#b9e164] w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            Full Stack Journey
          </h2>
          <p className='mb-4 lg:text-lg'>
            My journey began with HTML, CSS, and JavaScript, and has since
            expanded to include:
          </p>
          <ul className='grid grid-cols-2 gap-2 text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              React & Next.js
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              Node.js & Express
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              MongoDB & MySQL
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              Docker
            </li>
          </ul>
        </motion.section>

        <motion.section
          className='mb-12 lg:mb-16 bg-[#2a303c] rounded-lg p-6 lg:p-8 xl:p-10 shadow-lg'
          variants={itemVariants}
        >
          <h2 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 lg:mb-6 flex items-center'>
            <Book className='mr-2 text-[#b9e164] w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            My Learning Journey
          </h2>
          <p className='mb-4 text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            My path in web development has been a continuous evolution, with
            each step building upon the last:
          </p>
          <ul className='space-y-3 lg:space-y-4 text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            <li className='flex items-start'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2 mt-2'></span>
              <div>
                <strong>Foundations:</strong> Mastered HTML, CSS, and
                JavaScript, laying the groundwork for creating interactive web
                experiences.
              </div>
            </li>
            <li className='flex items-start'>
              <span className='flex-shrink-0 w-2 h-2 bg-[#b9e164] rounded-full mr-2 mt-2'></span>
              <div>
                <strong>Frontend Mastery:</strong> Dove into React and Next.js,
                learning to build responsive and accessible user interfaces with
                modern frameworks.
              </div>
            </li>
            <li className='flex items-start'>
              <span className='flex-shrink-0 w-2 h-2 bg-[#b9e164] rounded-full mr-2 mt-2'></span>
              <div>
                <strong>Backend Integration:</strong> Explored Node.js and
                Express, enabling me to design and implement RESTful APIs and
                connect frontend applications to databases.
              </div>
            </li>
            <li className='flex items-start '>
              <span className='flex-shrink-0 w-2 h-2 bg-[#b9e164] rounded-full mr-2 mt-2 '></span>
              <div>
                <strong>Full Stack Proficiency:</strong> Integrated frontend and
                backend skills to create complete web applications, deploying to
                platforms like Render and Vercel.
              </div>
            </li>
          </ul>
        </motion.section>

        <motion.section
          className='mb-12 lg:mb-16 bg-[#2a303c] rounded-lg p-6 lg:p-8 xl:p-10 shadow-lg'
          variants={itemVariants}
        >
          <h2 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 lg:mb-6 flex items-center'>
            <Rocket className='mr-2 text-[#b9e164] w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            Future Learning Goals
          </h2>
          <ul className='space-y-2 lg:space-y-4 text-base lg:text-lg xl:text-xl 2xl:text-2xl'>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              Practice regularly what I have learned so far to keep them fresh
              in my mind and improve my coding skills further.
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              Learn Software Engineering principles and best practices to build
              scalable and maintainable applications.
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              Learn cloud computing and DevOps to deploy and manage applications
              more efficiently.
            </li>
            <li className='flex items-center'>
              <span className='w-2 h-2 bg-[#b9e164] rounded-full mr-2'></span>
              Explore AI, ML and Data Science to expand my knowledge and skills
              in these fields.
            </li>
          </ul>
        </motion.section>

        <motion.section
          className='mb-12 lg:mb-16 bg-[#2a303c] rounded-lg p-6 lg:p-8 xl:p-10 shadow-lg'
          variants={itemVariants}
        >
          <h2 className='text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl font-semibold mb-4 lg:mb-6 flex items-center'>
            <Briefcase className='mr-2 text-[#b9e164] w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            Work Experience
          </h2>
          <div className='space-y-4'>
            <div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl'>
                Web Migration Assistant
              </h3>
              <p className='text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400'>
                Assumption University of Thailand | June 2024 - Present
              </p>
              <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-1'>
                Assisting in web migration using WordPress, enhancing
                functionality with Block Editor and Beaver Builder.
              </p>
            </div>
            <div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl'>
                Teaching Assistant
              </h3>
              <p className='text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400'>
                Assumption University of Thailand | June 2023 - Present
              </p>
              <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-1'>
                Tutoring students in programming fundamentals, OOP, and data
                structures & algorithms.
              </p>
            </div>
            <div>
              <h3 className='font-semibold lg:text-xl xl:text-2xl 2xl:text-3xl'>
                Internship Trainee
              </h3>
              <p className='text-sm lg:text-base xl:text-lg 2xl:text-xl text-gray-400'>
                Artisan Kitchen Ltd. | July 2024 - Present
              </p>
              <p className='text-base lg:text-lg xl:text-xl 2xl:text-2xl mt-1'>
                Conducting market research and creating reports to support
                marketing strategies.
              </p>
            </div>
          </div>
        </motion.section>

        <motion.div variants={itemVariants} className='text-center'>
          <Link
            href='/'
            className='inline-flex items-center px-6 py-3 lg:px-8 lg:py-4 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300 text-base lg:text-lg xl:text-xl 2xl:text-2xl'
          >
            <ArrowLeft className='mr-2 w-8 h-8 lg:w-10 lg:h-10 xl:w-12 xl:h-12' />
            Back to Home
          </Link>
        </motion.div>
      </div>
    </motion.div>
  )
}
