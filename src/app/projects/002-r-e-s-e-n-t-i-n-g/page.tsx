"use client"
import { useState, useRef } from 'react'
import { bodoniModa, bellota } from '@/app/fonts';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YoutubeEmbed';
import PinterestEmbed from '@/components/PinterestEmbed';
import Navbar from '@/components/Navbar';
import SoundCloudEmbed from '@/components/SoundCloudEmbed';
import SlideContainer from '@/app/reusable-components/SlideContainer';
import Paragraph from '@/app/reusable-components/Text/Paragraph';
import Heading from '@/app/reusable-components/Text/Heading';


export default function page() {

  const [textPosition, setTextPosition] = useState({ top: '50%', left: '50%' });
  const textReference = useRef<HTMLButtonElement>(null);
  const imageReference = useRef<HTMLImageElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  const handleClick = () => {
    if (textReference.current && imageReference.current) {
      if (isClicked) return;
      if (timesClicked >= 1) return;

      const imgWidth = imageReference.current.offsetWidth;
      const imgHeight = imageReference.current.offsetHeight;

      const buffer = 50; 
      const randomX = Math.random() * (imgWidth - buffer);
      const randomY = Math.random() * (imgHeight - buffer);
      
      setTextPosition({
        top: `${randomY}px`,
        left: `${randomX}px`
      });
      
      setIsClicked(true);
      
      setTimeout(() => {
        setTimesClicked((currentCount) => currentCount + 1);
        setIsClicked(false);
      }, 2000);

    }
  }

  return (
    <div className='bg-[#F6F1EB] w-full relative'>
      <Navbar isActive=''/>

      <SlideContainer className="relative w-full overflow-hidden">
        <div className='mt-30 2xl:mt-60'/>

        <div className='absolute inset-0 w-full h-full z-10'>
          <Image 
            className='w-full h-full object-cover select-none pointer-events-none object-[center_25%]' 
            src="/assets/ep2/Hero.png" 
            alt="Banner" 
            fill
            priority
          />
        </div>
        
        <p className={`${bodoniModa.className} text-4xl sm:text-6xl lg:text-8xl z-20 text-center absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 whitespace-nowrap select-none tracking-widest opacity-40 text-[#F6F1EB]`}>r e s e n t i n g</p>

        <div className='mt-30 2xl:mb-30'/>
        <Heading className='z-20 text-center relative -bottom-5 sm:-bottom-14 lg:-bottom-24 xl:-bottom-28 text-[#F6F1EB] select-none text-clip overflow-hidden whitespace-nowrap'>i'm obsessed</Heading>
        
      </SlideContainer>

      <SlideContainer className='bg-[#F6F1EB] text-[#C32734]'>
        <div className='mt-30 2xl:mt-40'/>
        <div className='flex gap-1 w-full mb-1'>
          <div> <Image src="/assets/ep2/Media1.png" alt="Media 1" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media2.png" alt="Media 2" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media3.png" alt="Media 3" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media4.png" alt="Media 4" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
        </div>
        <div className='flex gap-1 w-full mb-1'>
          <div> <Image src="/assets/ep2/Media5.png" alt="Media 5" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media6.png" alt="Media 6" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media7.png" alt="Media 7" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media8.png" alt="Media 8" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
        </div>
        <div className='flex gap-1 w-full mb-1'>
          <div> <Image src="/assets/ep2/Media9.png" alt="Media 9" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media10.png" alt="Media 10" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media11.png" alt="Media 11" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
          <div> <Image src="/assets/ep2/Media12.png" alt="Media 12" width={1500} height={1500} className='border-2 border-[#C32734] aspect-3/4 object-cover'/> </div>
        </div>

        <YouTubeEmbed videoId="md-xWxGdI9s" />

        <div className="flex justify-around items-center w-full">
          {/* max-w-5xl mx-auto my-8 */}
          <div className="relative z-30 border-2 border-[#C32734] bg-[#63020a] p-6 rounded-none mx-auto my-8 text-[#f5f4ec] w-1/2 h-43" >
            <p className="text-xs uppercase tracking-widest text-[#f5f4ec] mb-2">Pinterest Inspiration</p>
              <h3 className="text-xl font-bold mb-4">Moodboard</h3>
              <a 
                href="https://www.pinterest.com/madebydollar/tfdc-series/series-002/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-block bg-[#C32734] text-[#f5f4ec] px-4 py-2 font-bold hover:bg-[#3d0207] transition-colors"
              >
                View Pin &rarr;
            </a>
          </div>
          <SoundCloudEmbed className='border-2 border-[#C32734] w-1/2' trackUrl="https://soundcloud.com/madebydollar/r-e-s-e-n-t-i-ng"/>
        </div>

        <div className="flex justify-around items-center w-full gap-1 relative">
          <div><Image src="/assets/ep2/cover.jpg" alt="Media 9" width={1500} height={1500} className='border-2 border-[#C32734] aspect-square object-square'/></div>
          <div className='relative mx-auto overflow-hidden z-20'>
            <Image src="/assets/ep2/blurredposter.png" alt="Media 9" width={1500} height={1500} className='pointer-events-none border-2 border-[#C32734] aspect-square object-cover'/>
            <button 
              className={`${bellota.className} text-white text-2xl z-30 hover:underline hover:cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2`}
              type="button"
              ref={textReference} 
              style={{ top: textPosition.top, left: textPosition.left }}
              onClick={handleClick}>
                {isClicked ? "HEY. Stop harassing me! Click nicely one more time." : "Click for Lyrics"}
            </button>  
          </div>
        </div>
      </SlideContainer>

    </div>
  )
}