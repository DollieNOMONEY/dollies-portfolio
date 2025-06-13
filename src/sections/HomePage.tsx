import React from 'react'

import Navbar from '@/components/Navbar'
import HorizontalLine from '@/components/HorizontalLine'
import Paragraph from '@/components/Paragraph'
import SocialLink from '@/components/SocialLink'
import Laptop from '../img/laptop.jpg'

import Image from 'next/image'

export default function HeroPage() {
  return (
    <div className='mx-2 w-full'>
      <Navbar isActive="home"/>
      <div className='mt-16 w-full'> 
        <div className='flex justify-center'>
          <div className='mx-auto w-[95%] md:w-2/3 lg:w-1/2'>
            <h1 className='text-7xl font-bold mb-6'>Dollar</h1>
            <div className="flex gap-15 mb-20">
              <div className='mx-auto w-full sm:w-1/2'>
                <p className='text-xl'>
                I am a <b>web developer</b> who spends their days in building <b>high quality, responsive websites</b>. With a ton of experience in <b>front-end</b> and <b>back-end</b> development, I can quickly and effciently transform ideas into <b>top-tier websites</b>.
                My proficiency with modern technologies and frameworks enables me to deliver <b>user-friendly</b>, <b>visually appealing</b> websites focused on fulfilling clients' need and customization.
                </p>
                <p className='text-xl'>
                I am passionate about writing clean, maintainable code and optimizing performance for a future-proof seamless user experience. Whether I'm building a simple landing page or a complex web application,
                I bring <b>creativity, technical skill, and attention to detail</b> to every project.
               </p>
              </div>
              
               <div className='mx-auto w-full sm:w-1/2'>
                <div className='mx-auto'>
                <Image
                  src={Laptop}
                  alt="Setup"
                  className='block rounded-tr-4xl rounded-tl-4xl rounded-bl-4xl w-full'
                />
              </div>
               </div>
            </div>
            <p className='text-xl mb-16'>I am available for freelance work for front-end, back-end, or full-stack projects. If you are interested in collaborating, please email me and we'll discuss your project!</p>
            <HorizontalLine/>
            
            
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
            </Paragraph>

            <Paragraph
              title="Projects"
              children="While I began my journey focusing on front-end development using core technologies like HTML, CSS, and JavaScript, I quickly realized the power of modern frameworks and full-stack development. This growth has helped me build more scalable, maintainable, and dynamic web applications."  
            />

            <Paragraph
              title="Writing"
              children="I never thought documenting my journey as a web developer would be crucial for a great learning experience until today. I may occassionally blog, since it a powerful tool for me to document my web developing journey. Click me to check out my blogs."
            />

            <Paragraph
              title="Connect"
            />
            <div className='flex'>
              <div className='mx-auto'>
                
                <SocialLink
                  iconName="github"
                  title="Github"
                  link="https://github.com/DollieNOMONEY"
                  handle="@DollieNOMONEY"
                />
                
                <SocialLink
                  iconName="instagram"
                  title="Instagram"
                  link="https://www.instagram.com/dollie.cantcode/"
                  handle="@dollie.cantcode"
                />

                <SocialLink
                  iconName="twitter"
                  title="Twitter"
                  link="https://x.com/dollie_cantcode"
                  handle="@dollie.cantcode"
                />

                <div className='mb-24'/>

              </div>
            </div>

            <HorizontalLine/>

          </div>
        </div>
      </div>
    </div>
  )
}

//  sm:mx-12 md:mx-42 xl:mx-64 2xl:mx-100 