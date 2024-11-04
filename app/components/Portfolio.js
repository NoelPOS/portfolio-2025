import Image from 'next/image'
import Link from 'next/link'
import conserveLogo from '@/public/assets/conserve-logo.png'
import weatherApp from '@/public/assets/weatherapp.png'
import newsApp from '@/public/assets/newsapp.png'
import comingSoon from '@/public/assets/newsapp.png'

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
    id: 'weatherapp',
    title: 'Weathering App',
    description:
      'Using Open Weather Map Api, I created the weather app including the forecast for five days ahead using html, css and javascript...',
    image: weatherApp,
    link: 'https://weather-app-eta-nine-25.vercel.app/',
  },
  {
    id: 'newsapp',
    title: 'Newsify App',
    description:
      "Using NewsApi, I created news watching app that allows users to search for any latest news. Unfortunately, it comes with pricing so I couldn't host it online",
    image: newsApp,
    link: 'https://github.com/NoelPOS/Newsify-App',
  },
  {
    id: 'comingsoon',
    title: 'Coming Soon...',
    description: '',
    image: comingSoon,
    link: '#',
  },
  {
    id: 'comingsoon',
    title: 'Coming Soon...',
    description: '',
    image: comingSoon,
    link: '#',
  },
  {
    id: 'comingsoon',
    title: 'Coming Soon...',
    description: '',
    image: comingSoon,
    link: '#',
  },
]

export default function Portfolio() {
  return (
    <section
      id='portfolio'
      className='py-32 px-[9%]  dark:bg-[#1f242d] transition-colors duration-300'
    >
      <h2 className='text-4xl font-bold text-center mb-16'>
        My Latest <span className='text-[#b9e164]'>Projects</span>
      </h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {projects.map((project) => (
          <div
            key={project.id}
            className='relative overflow-hidden rounded-2xl shadow-lg group'
          >
            <Image
              src={project.image}
              width={300}
              height={300}
              alt={project.title}
              className='w-full h-full object-cover transition duration-300 group-hover:scale-110'
            />
            <div className='absolute inset-0 bg-gradient-to-b from-transparent to-[#b9e164] flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
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
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
