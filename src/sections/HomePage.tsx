import React from 'react'

import Navbar from '@/components/Navbar'
// import HorizontalLine from '@/components/HorizontalLine'
import Paragraph from '@/components/Paragraph'
import SocialMediaContainer from '@/components/SocialMediaContainer'
import Profile from '../img/profile.jpg'
// import SpacingLayout from '@/components/SpacingLayout'
import ContactButton from '@/components/ContactButton'

import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="w-full min-h-screen bg-white dark:bg-[#121212] antialiased overflow-x-hidden">
      <Navbar isActive="home"/>
      
      <div
        className='bg-white dark:bg-[#121212] w-full'>

        <main className="relative h-screen w-[full] flex items-center justify-center overflow-hidden">
          <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold text-gray-300 text-center leading-none tracking-tighter px-4 select-none z-10">
            Creativity is Power
          </h1>
        </main>

        <div className="px-6 md:px-0 flex justify-center items-center flex-col xl:flex-row xl:gap-32">
          <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-md w-full">
            <h1 className='text-5xl font-bold mb-2 text-gray-300'>Dollar</h1>
            <h2 className='text-xl font-bold text-gray-300'>Creative Director</h2>
            <h2 className='text-xl font-bold text-gray-300'>Full-stack Developer</h2>
            <h2 className='text-xl font-bold text-gray-300'>Music Producer / Artist</h2>
            <br></br>
            <h2 className='text-xl mb-8 text-gray-300'>| Ly Dollar Chuon</h2>

           
            
          </div>
          <div className="max-w-md">
            <div className='mt-12 xl:mt-60'/>
            <Image
                src={Profile}
                alt="Setup"
                className='block rounded-full w-full'
              />
          </div>
        </div>
      </div>

      <div
        className='w-full pt-8 bg-white dark:bg-[#121212]'>
          <div className="flex justify-center gap-40 items-center w-full px-6">
            <div className='max-w-5xl mb-14'>
              

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>


              <h1 className='text-5xl font-bold mb-12 text-gray-300 text-center'>Manifesto</h1>
              <p className='text-lg xl:text-xl text-gray-300 text-center'>
              I am a <b>web developer</b> who spends their days in building <b>high quality, responsive websites</b>. With a ton of experience in <b>front-end</b> and <b>back-end</b> development, I can quickly and efficiently transform ideas into <b>top-tier websites</b>.
              My proficiency with modern technologies and frameworks enables me to deliver <b>user-friendly</b>, <b>visually appealing</b> websites focused on fulfilling clients&apos; needs and customization.
              </p>
              <br/>
              <p className='text-lg xl:text-xl text-gray-300 text-center'>
              I am passionate about writing clean, maintainable code and optimizing performance for a future-proof seamless user experience. Whether I&apos;m building a simple landing page or a complex web application,
              I bring <b>creativity, technical skill, and attention to detail</b> to every project.
              </p>
              {/* <Paragraph>
                I am available for freelance work for front-end, back-end, or full-stack projects. 
                If you are interested in collaborating, please <Link className='font-bold hover:underline text-[#9c0003]' href="mailto:softwaredevelopment.dollie@gmail.com?subject=Web%20Project%20Work!&body=Hi%20Dollar%2C%20I'm%20interested%20in%20a%20web%20development%20project.">email me</Link> and we&apos;ll discuss 
                your project!
              </Paragraph> */}
              <Paragraph>
                I am a developer driven by creative vision and technical precision. While I am currently focusing on internal projects and academic milestones, I am always open to discussing future global collaborations for 2027. 
              </Paragraph>
              {/* <Paragraph>
                I am available for freelance work for front-end, back-end, or full-stack projects. 
                If you are interested in collaborating, please <Link className='font-bold hover:underline text-blue-600' href="mailto:softwaredevelopment.dollie@gmail.com?subject=Web%20Project%20Work!&body=Hi%20Dollar%2C%20I'm%20interested%20in%20a%20web%20development%20project.">email me</Link> and we&apos;ll discuss 
                your project!
              </Paragraph> */}

              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>

            </div>
          </div>
      </div>

      {/* <div
        className='w-full bg-neutral-100 dark:bg-black'>
          <div className="flex justify-center items-center px-6">
            <div className="max-w-5xl w-full mt-16">
              <Paragraph title="Technologies">
                I have experience working with a modern web development stack that includes
                <b className="text-red-500"> Next.js</b> and
                <b className="text-red-500"> React</b> for building dynamic user interfaces,
                <b className="text-red-500"> Laravel</b> as a powerful backend framework,
                <b className="text-red-500"> Tailwind CSS</b> and
                <b className="text-red-500"> CSS3</b> for efficient and responsive styling,
                <b className="text-red-500"> HTML5</b> for structuring web content,
                <b className="text-red-500"> JavaScript (ES6+)</b> and
                <b className="text-red-500"> TypeScript</b> for scripting and enhancing code quality,
                and I apply <b className="text-red-500"> responsive design</b> principles to ensure seamless user experiences across all devices. 
                Lastly I use <b className="text-red-500">GIT</b> and <b className="text-red-500">Github</b>.
              </Paragraph>

              <Paragraph
                  title="Projects">
                    While I began my journey focusing on front-end development using core technologies like HTML, CSS, and JavaScript, I quickly realized the power of modern frameworks and full-stack development. This growth has helped me build more scalable, maintainable, and dynamic web applications.
                  </Paragraph>

              <Paragraph title="Writing">
                I never thought documenting my journey as a web developer would be crucial for a great learning experience until today. I may occassionally blog, since it a powerful tool for me to document my web developing
                journey. <Link className='font-bold hover:underline text-blue-600' href="/blog">Click me</Link> to check out my blogs.
              </Paragraph>
            </div>
          </div>
      </div> */}

       <div
        className='w-full bg-white dark:bg-neutral-950 flex justify-center'>
          <div className="flex justify-center items-center px-6">
            <div className="max-w-5xl w-full mt-18 px-6">
              <h1 className='text-center text-4xl sm:text-8xl font-bold mb-6'>Wanna connect?</h1>
              <h1 className='text-[20rem] text-center '>👇</h1>
            </div>
          </div>
        </div>

      <div
        className='w-full bg-white dark:bg-neutral-950'>
          <div className="flex justify-center">
            <div className="max-w-5xl w-full">
              <ContactButton/>
              <SocialMediaContainer/>
            </div>
          </div>
      </div>

    </div>
  )
}

//  sm:mx-12 md:mx-42 xl:mx-64 2xl:mx-100 