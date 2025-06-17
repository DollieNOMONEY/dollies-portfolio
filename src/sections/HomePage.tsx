import React from 'react'

import Navbar from '@/components/Navbar'
import HorizontalLine from '@/components/HorizontalLine'
import Paragraph from '@/components/Paragraph'
import SocialMediaContainer from '@/components/SocialMediaContainer'
import Laptop from '../img/laptop.jpg'
import SpacingLayout from '@/components/SpacingLayout'
import ContactButton from '@/components/ContactButton'

import Link from 'next/link'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className='w-full'>
      <Navbar isActive="home"/>
      <div
        className='w-full bg-white py-4'>
        <div className="px-12 md:px-0 flex justify-center items-center flex-col xl:flex-row xl:gap-32">
          <div className="max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-md w-full">
            <h1 className='text-7xl font-bold mb-6'>Dollar</h1>
            <p className='text-xl'>
            I am a <b>web developer</b> who spends their days in building <b>high quality, responsive websites</b>. With a ton of experience in <b>front-end</b> and <b>back-end</b> development, I can quickly and effciently transform ideas into <b>top-tier websites</b>.
            My proficiency with modern technologies and frameworks enables me to deliver <b>user-friendly</b>, <b>visually appealing</b> websites focused on fulfilling clients' need and customization.
            </p>
            <br/>
            <p className='text-xl'>
            I am passionate about writing clean, maintainable code and optimizing performance for a future-proof seamless user experience. Whether I'm building a simple landing page or a complex web application,
            I bring <b>creativity, technical skill, and attention to detail</b> to every project.
            </p>
          </div>
          <div className="max-w-md">
            <div className='mt-12 xl:mt-32'/>
            <Image
                src={Laptop}
                alt="Setup"
                className='block rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl w-full'
              />
          </div>
        </div>
      </div>

      <div
        className='w-full mt-8'>
          <div className="flex justify-center gap-40 items-center w-full px-12">
            <div className='max-w-5xl mb-14'>
              <Paragraph>
                I am available for freelance work for front-end, back-end, or full-stack projects. 
                If you are interested in collaborating, please <Link className='font-bold hover:underline text-blue-600' href="mailto:softwaredevelopment.dollie@gmail.com?subject=Web%20Project%20Work!&body=Hi%20Dollar%2C%20I'm%20interested%20in%20a%20web%20development%20project.">email me</Link> and we'll discuss 
                your project!
              </Paragraph>
            </div>
          </div>
      </div>

      <div
        className='w-full bg-neutral-100'>
          <div className="flex justify-center items-center px-12">
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
                  title="Projects"
                  children="While I began my journey focusing on front-end development using core technologies like HTML, CSS, and JavaScript, I quickly realized the power of modern frameworks and full-stack development. This growth has helped me build more scalable, maintainable, and dynamic web applications."  
                />

              <Paragraph title="Writing">
                I never thought documenting my journey as a web developer would be crucial for a great learning experience until today. I may occassionally blog, since it a powerful tool for me to document my web developing
                journey. <Link className='font-bold hover:underline text-blue-600' href="/blogs">Click me</Link> to check out my blogs.
              </Paragraph>
            </div>
          </div>
      </div>

       <div
        className='w-full bg-white flex justify-center'>
          <div className="flex justify-center items-center px-12">
            <div className="max-w-5xl w-full mt-18 px-12">
              <h1 className='text-center text-4xl sm:text-8xl font-bold mb-6'>Wanna connect?</h1>
              <h1 className='text-[20rem] text-center '>👇</h1>
            </div>
          </div>
        </div>

      <div
        className='w-full bg-white'>
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