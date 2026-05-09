import Navbar from "@/components/Navbar";
import SocialMediaContainer from "@/components/SocialMediaContainer";
import Profile from "../img/profile.jpg";
import Banner from "../img/BANNER.001.png";
import Image from "next/image";

export default function HomePage() {
  return (
    <div className="antialiased relative">
      <Image
        className="fixed w-full h-dvh top-0 inset-s-0 inset-end-0 bg-transparent -z-10 pointer-events-none"
        src={Banner}
        alt="Background Banner"
        priority
      />

      <div className="fixed w-full top-0 inset-s-0 inset-end-0 bg-transparent pointer-events-none z-40">
        <main className="relative h-dvh flex items-center justify-center overflow-hidden">
          <h1 className="absolute top-0 text-5xl sm:text-7xl md:text-[275px] text-nowrap font-bold text-center leading-none tracking-tighter px-4 select-none pointer-events-none">
            Creativity is Power
          </h1>

          <div className="relative z-50 pointer-events-auto w-full">
            <Navbar isActive="home" />
          </div>
        </main>
      </div>

      <div className="relative w-full">
        <div className="h-dvh pointer-events-none"></div>

        <div className="relative z-40 bg-[#121212] min-h-dvh px-6 md:px-0 flex justify-center items-center flex-col xl:flex-row xl:justify-between xl:items-start xl:gap-40 xl:px-10">
          <div className="mt-12 max-w-md md:max-w-2xl lg:max-w-4xl xl:max-w-none xl:w-1/2">
            <h1 className="text-5xl xl:text-[9vw] leading-none tracking-tighter font-bold uppercase">
              INDIVIDUALISM
            </h1>
            <h1 className="text-5xl ading-none tracking-tighter font-bold mb-12 uppercase">
              I'm a Multi-hypenate Director
            </h1>

            <div className="space-y-6">
              <ul className="list-inside list-disc space-y-2 text-sm uppercase tracking-widest text-white/80 mb-12">
                <li>Ly Dollar Chuon | Founder of WAAI & Creative Director</li>
                <li>
                  Tech Stack: Next.js, TypeScript, Tailwind, ShadCN/Radix UI,
                  Firebase{" "}
                </li>
                <li>
                  Creative Stack: Cinematic 4K Workflow, Music Production,
                  Photography, Videography
                </li>
              </ul>

              <p className="text-lg text-left">
                MADE BY DOLLAR explores how younger generations can be
                self~sufficient, hard~working, and resilient to conforming. As a
                movement, we are the 1.62 COLLECTIVE. We express ourselves
                through mixed media, merging digital and analog life.
              </p>
              <h2 className="text-3xl font-bold">| Ly Dollar Chuon</h2>
              <p className="text-lg text-left">
                I like to set high stakes in my early career even if it means
                lacking sleep. I am a student in Cambodia who has deep interest
                in coding solutions, composing songs, and creating cinematic
                content. I build tools only for the 1.62% who refuse to use
                their scores to determine their success.
              </p>

              <div className="flex gap-6 mt-8 font-mono text-[10px] tracking-[0.2em] uppercase">
                <a
                  href="https://github.com/DollieNOMONEY/dollies-portfolio"
                  className="text-white/40 hover:text-red-600 transition-colors border-b border-white/10 pb-1"
                >
                  [ View Source ]
                </a>
                <a
                  href="/info/CV_DOLLARCHUON _SOFTWAREDEVELOPER.pdf"
                  className="text-white/40 hover:text-red-600 transition-colors border-b border-white/10 pb-1"
                >
                  [ Interested in Code? ]
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-md xl:max-w-none xl:w-1/2 mt-12">
            <Image
              src={Profile}
              alt="Profile"
              className="block w-full grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        <div className="w-full min-h-dvh bg-neutral-950 relative z-40">
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
