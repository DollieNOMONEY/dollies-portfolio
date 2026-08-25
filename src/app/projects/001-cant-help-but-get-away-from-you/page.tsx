"use client"
import { useState, useRef } from 'react'
import { bodoniModa, bellota } from '@/app/fonts';
import Image from 'next/image';
import YouTubeEmbed from '@/components/YoutubeEmbed';
import PinterestEmbed from '@/components/PinterestEmbed';
import Navbar from '@/components/Navbar';
import SoundCloudEmbed from '@/components/SoundCloudEmbed';

export default function page() {

  const [textPosition, setTextPosition] = useState({ top: '50%', left: '50%' });
  const textReference = useRef<HTMLButtonElement>(null);
  const imageReference = useRef<HTMLImageElement>(null);
  const [isClicked, setIsClicked] = useState(false);
  const [timesClicked, setTimesClicked] = useState(0);

  const handleClick = () => {
    if (textReference.current && imageReference.current) {
      if (isClicked) return; // guard clauses
      if (timesClicked >= 1) return;

      const imgWidth = imageReference.current.offsetWidth;
      const imgHeight = imageReference.current.offsetHeight;

      const buffer = 50; 
      const randomX = Math.random() * (imgWidth - buffer);
      const randomY = Math.random() * (imgHeight - buffer);
      // const randomX = Number(Math.random().toFixed(2)) * (innerWidth ?? 0) - 15;
      // const randomY = Number(Math.random().toFixed(2)) * (innerHeight ?? 0) - 15;
      
      setTextPosition({
        top: `${randomY}px`,
        left: `${randomX}px`
      });
      
      setIsClicked(true);

      // console.log(textPosition);
      
      setTimeout(() => {
        setTimesClicked((currentCount) => currentCount + 1);
        setIsClicked(false);
      }, 2000);

    }
  }

  return (
    <div className='bg-[#174e2e] w-full relative'>

      <Navbar isActive=''/>      
      <Image
        className="fixed object-cover w-full h-dvh top-0 inset-s-0 inset-end-0 bg-transparent z-10 pointer-events-none"
        src='/assets/ep1/background.png'
        alt="Background Banner"
        width={2000}
        height={2000}
        priority
      />

      <div className='z-20 relative'>
        <section className="relative h-[60vh] w-full overflow-hidden flex items-center justify-center">
        {/* Clipped background text */}
        <div className="absolute inset-0 flex items-center overflow-hidden pointer-events-none opacity-20">
         <span className={`${bellota.className} tracking-normal absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-[20vw] font-extrabold text-white`}>
          i'm obsessed
        </span>
        </div>

        <div className="z-10 text-center text-white">
          <h2 className="text-5xl font-bold">Can't Help But Get Away From You</h2>
          {/* <p className={`${bellota.className} text-zinc-400 mt-2`}>Made By Dollar</p> */}
        </div>
      </section>
        
        <div className='z-20 relative w-1/2 mx-auto overflow-hidden'>
          <Image
            className="pointer-events-none"
            src='/assets/ep1/poster.png'
            alt="Poster"
            ref={imageReference}
            width={1400}
            height={1400}
            priority
          />
          <button 
            className={`${bellota.className} text-white text-2xl z-30 hover:underline hover:cursor-pointer absolute -translate-x-1/2 -translate-y-1/2`}
            type="button"
            ref={textReference} 
            style={{ top: textPosition.top, left: textPosition.left }}
            onClick={handleClick}>
              {isClicked ? "HEY. Stop harassing me! Click nicely one more time." : "Click for Lyrics"}
          </button>
        </div>
         
      </div>

      <div className="max-w-5xl mx-auto my-8">
        <YouTubeEmbed videoId="LLHDtb864eU" />
        <SoundCloudEmbed trackUrl="https://soundcloud.com/madebydollar/cant-help-but-get-away-from"/>
         <PinterestEmbed pinUrl="https://www.pinterest.com/madebydollar/fck-yeah-series/series-001/"
        title="Moodboard" />
      </div>


    </div>
  )
}