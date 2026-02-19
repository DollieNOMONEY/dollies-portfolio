import Navbar from '@/components/Navbar'
import SocialMediaContainer from '@/components/SocialMediaContainer'
import Profile from '../img/profile.jpg'
import Banner from '../img/BANNER.001.png'
import Image from 'next/image'

export default function HomePage() {
  return (
    <div className="antialiased relative">

      {/* 1. BACKGROUND LAYER - Stays pinned at the back */}
      <Image 
        className='fixed w-full h-dvh top-0 start-0 end-0 bg-transparent -z-10 pointer-events-none' 
        src={Banner} 
        alt="Background Banner"
        priority
      />

      {/* 2. HERO & NAV LAYER - Handled with pointer-events */}
      <div className='fixed w-full top-0 start-0 end-0 bg-transparent pointer-events-none z-40'>
         <main className="relative h-dvh flex items-center justify-center overflow-hidden">
            {/* The Big Text: select-none and pointer-events-none ensure it doesn't block clicks */}
            <h1 className="absolute top-0 text-5xl sm:text-7xl md:text-[275px] text-nowrap font-bold text-black dark:text-gray-300 text-center leading-none tracking-tighter px-4 select-none pointer-events-none">
              Creativity is Power
            </h1>
            
            {/* The Navbar: z-50 and pointer-events-auto make it the only clickable part of this fixed layer */}
            <div className="relative z-50 pointer-events-auto w-full">
               <Navbar isActive="home"/>
            </div>
          </main>
      </div>

      {/* 3. SCROLLABLE CONTENT LAYER */}
      <div className='relative w-full'>
          
          {/* Spacer: This allows the "Creativity is Power" section to be seen before content slides up */}
          <div className="h-dvh pointer-events-none"></div>

          <div className="relative z-40 bg-white dark:bg-[#121212] min-h-dvh px-6 md:px-0 flex justify-center items-center flex-col xl:flex-row xl:justify-between xl:items-start xl:gap-40 xl:px-10">
            <div className="mt-12 max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-none xl:w-1/2">
              <h1 className='text-5xl xl:text-[9vw] leading-none tracking-tighter font-bold mb-24 text-black dark:text-gray-300 uppercase'>
                INDIVIDUALISM
              </h1>
              
              <div className='space-y-6'>
                <p className='text-lg text-black dark:text-gray-300 text-left'>
                  MADE BY DOLLAR explores how younger generations can be self~sufficient, hard~working, and resilient to social confrontation. As a movement, we are the 1.62 COLLECTIVE. We express ourselves through the Culture of Mixing Digital and Analog life.
                </p>
                <h2 className='text-3xl font-bold text-black dark:text-gray-300'>| Ly Dollar Chuon</h2>
                <p className='text-lg text-black dark:text-gray-300 text-left'>
                  Additionally, I like to set high stakes in my early career even if it means lacking sleep. I am a student in Cambodia who has deep interest in coding solutions, composing sound~tracks, and creating cinematic content. I build tools only for the 1.62% who refuse to use their scores to determine their success.  
                </p>
              </div>
            </div>

            <div className="max-w-md xl:max-w-none xl:w-1/2 mt-12">
              <Image
                  src={Profile}
                  alt="Profile"
                  className='block w-full grayscale hover:grayscale-0 transition-all duration-500'
                />
            </div>
          </div>

          {/* FOOTER */}
          <div className='w-full min-h-dvh bg-white dark:bg-neutral-950 relative z-40'>
            <div className="px-6 pt-12">
              <div className="w-full pb-48">
                <h1 className='text-left text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 uppercase'>
                  director [at] madebydollar.studio
                </h1>
              </div>
              <SocialMediaContainer/>
            </div>
          </div>
      </div>
    </div>
  )
}