import Navbar from '@/components/Navbar'
import SocialMediaContainer from '@/components/SocialMediaContainer'

export default function ContactPage() {
  return (
    <div className='w-full h-dvh'>
      <Navbar isActive="contact"/>
      <div className='bg-white dark:bg-neutral-950'>
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
  )
}
