import Link from 'next/link'

export default function About() {
  return (
    <section
      id='about'
      className='min-h-screen flex items-center justify-center py-32 px-[9%] bg-[#323946]'
    >
      <div className='flex flex-col md:flex-row items-center justify-between gap-16'>
        <div className='md:w-1/2 text-center'>
          <i className='bx bx-info-circle text-[35rem] text-[#b9e164] shadow-lg shadow-[#b9e164] rounded-full'></i>
        </div>
        <div className='md:w-1/2'>
          <h2 className='text-4xl font-bold mb-4'>
            About <span className='text-[#b9e164]'>Me</span>
          </h2>
          <h3 className='text-2xl font-bold mb-4'>Full Stack Web Developer</h3>
          <p className='text-lg mb-8'>
            I use my knowledge to create responsive websites that are useful for
            individuals and organizations. Eager to try out new things whenever
            I get the chance, I'd like to blaze my path of long-lasting coding
            journey with dedication and determination...
          </p>
          <Link
            href='#contact'
            className='inline-block px-8 py-3 bg-[#b9e164] text-[#323946] font-semibold rounded-full shadow-lg hover:shadow-none transition duration-300'
          >
            Contact Me!
          </Link>
        </div>
      </div>
    </section>
  )
}
