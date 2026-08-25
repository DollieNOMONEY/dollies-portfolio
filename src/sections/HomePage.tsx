import Navbar from "@/components/Navbar";
import SocialMediaContainer from "@/components/SocialMediaContainer";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className=" antialiased relative ">
      <Image
        className="fixed object-contain h-dvh top-0 inset-s-0 inset-end-0 bg-transparent -z-10 pointer-events-none"
        src='/assets/home.png'
        alt="Background Banner"
        width={3000}
        height={3000}
        priority
      />

      <div id="home" className="fixed w-full top-0 inset-s-0 inset-end-0 bg-transparent pointer-events-none z-40">
        <main className="relative h-dvh flex items-center justify-center overflow-hidden">
          <p className="pt-5 text-black absolute top-0 text-nowrap font-bold text-center leading-none tracking-tighter px-4 select-none pointer-events-none">
            " scroll ⬇ "
          </p>

          <div className="relative z-50 pointer-events-auto w-full">
            <Navbar isActive="home" />
          </div>
        </main>
      </div>

      <div className="relative w-full">
        <div className="h-dvh pointer-events-none"></div>

        <div className="relative z-40 bg-[#121212] min-h-dvh px-6 md:px-0 flex justify-center items-center flex-col xl:flex-row xl:justify-between xl:items-start xl:gap-40 xl:px-10">
         
        </div>

        <div id="contact" className="w-full min-h-dvh bg-neutral-950 text-gray-300 relative z-40">
          <div className="px-6 pt-12">
            <div className="w-full pb-48">
              <h1 className="text-left text-3xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 uppercase">
                director [at] madebydollar.studio
              </h1>
            </div>
            <SocialMediaContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
