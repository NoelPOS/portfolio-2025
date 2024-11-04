import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

const projects = {
  conserveapp: {
    title: 'Conserve App',
    description:
      'A food waste reduction solution developed during a 48-hour hackathon.',
    image: '/assets/conserve-logo.png',
    link: 'https://conserve-landing-page.vercel.app/',
    details: `
      The Conserve App was developed during an intense 48-hour hackathon. Our team of four developers 
      worked tirelessly to create a solution that addresses the growing concern of food waste.
    `,
    features: [
      'User Authentication',
      'Food Inventory Management',
      'Expiration Reminders',
      'Recipe Suggestions',
      'Donation Locator',
    ],
    technologies: [
      'React.js',
      'Next.js',
      'Node.js',
      'Express',
      'MongoDB',
      'JWT',
      'Tailwind CSS',
    ],
    challenges: [
      'Integrating real-time notifications',
      'Optimizing database queries',
      'Implementing responsive design',
    ],
    outcome: `
      This project honed my full-stack development skills and taught me valuable lessons 
      about teamwork, time management, and working under pressure. It fueled my passion 
      for creating meaningful, impactful applications.
    `,
  },
  weatherapp: {
    title: 'Weathering App',
    description: 'A sleek weather application providing real-time forecasts.',
    image: '/assets/weatherapp.png',
    link: 'https://weather-app-eta-nine-25.vercel.app/',
    details: `
      The Weathering App offers users a comprehensive view of current weather conditions 
      and future forecasts for any location worldwide.
    `,
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
    outcome: `
      This project significantly improved my skills in working with third-party APIs 
      and creating intuitive user interfaces. It also taught me the importance of 
      error handling and providing a seamless user experience.
    `,
  },
  newsapp: {
    title: 'Newsify App',
    description: 'A dynamic news aggregator with customizable feeds.',
    image: '/assets/newsapp.png',
    link: 'https://github.com/NoelPOS/Newsify-App',
    details: `
      Newsify App revolutionizes how users consume news by providing a customizable 
      platform that aggregates articles from various sources.
    `,
    features: [
      'Keyword-based Search',
      'Category Filtering',
      'Personalized News Feed',
      'Article Bookmarking',
      'Dark Mode',
    ],
    technologies: [
      'HTML5',
      'CSS3',
      'JavaScript (ES6+)',
      'NewsAPI',
      'Local Storage',
      'Responsive Web Design',
    ],
    challenges: [
      'Managing API rate limits',
      'Implementing efficient search algorithms',
      'Creating a responsive layout for various screen sizes',
    ],
    outcome: `
      Developing Newsify enhanced my understanding of working with RESTful APIs, 
      managing application state, and creating responsive designs. It also highlighted 
      the importance of considering API limitations in application architecture.
    `,
  },
  comingsoon: {
    title: 'Coming Soon...',
    description: 'Stay tuned for more exciting projects!',
    image: '/assets/newsapp.png',
    link: '#',
    details: `
      I'm constantly working on new projects and expanding my portfolio. 
      Check back soon for more exciting applications and websites!
    `,
    features: [],
    technologies: [],
    challenges: [],
    outcome: '',
  },
}

export default function ProjectPage({ params }) {
  const project = projects[params.id]

  if (!project) {
    notFound()
  }

  return (
    <div className='min-h-screen py-32 px-[9%] dark:bg-[#1f242d] transition-colors duration-300'>
      <h1 className='text-4xl font-bold mb-8'>{project.title}</h1>
      <div className='flex flex-col lg:flex-row gap-8'>
        <div className='lg:w-1/2'>
          <Image
            src={project.image}
            width={400}
            height={300}
            alt={project.title}
            className='rounded-lg shadow-lg w-full  h-[90%] object-cover'
          />
          <div className='mt-8'>
            <Link
              href={project.link}
              target='_blank'
              className='inline-block px-6 py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300'
            >
              View Project
            </Link>
          </div>
        </div>
        <div className='lg:w-1/2'>
          <p className='text-xl mb-6 font-semibold'>{project.description}</p>
          <div className='prose dark:prose-invert max-w-none'>
            <p>{project.details}</p>
            <h3 className='text-2xl font-bold mt-6 mb-4'>Key Features</h3>
            <ul>
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
            <h3 className='text-2xl font-bold mt-6 mb-4'>Technologies Used</h3>
            <div className='flex flex-wrap gap-2'>
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className='bg-[#b9e164] text-[#323946] px-3 py-1 rounded-full text-sm'
                >
                  {tech}
                </span>
              ))}
            </div>
            <h3 className='text-2xl font-bold mt-6 mb-4'>
              Challenges Overcome
            </h3>
            <ul>
              {project.challenges.map((challenge, index) => (
                <li key={index}>{challenge}</li>
              ))}
            </ul>
            <h3 className='text-2xl font-bold mt-6 mb-4'>Outcome</h3>
            <p>{project.outcome}</p>
          </div>
        </div>
      </div>
      <div className='mt-12'>
        <Link href='/#portfolio' className='text-[#b9e164] hover:underline'>
          ← Back to Portfolio
        </Link>
      </div>
    </div>
  )
}
