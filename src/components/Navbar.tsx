import Link from 'next/link'

type NavbarProps = {
    isActive: string
}

export default function Navbar({isActive}: NavbarProps) {
    // const baseClasses = "font-bold text-black dark:text-white hover:underline"
    
    const linkClass = (page: string) =>
    `font-bold ${
        isActive === page ? 'underline text-[#9c0003]' : 'text-black dark:text-white hover:text-gray-300'
    }`

  return (
    <nav className="bg-transparent flex flex-col md:flex-row pt-6 pb-6 justify-center items-center gap-4 md:gap-16 text-xl text-black relative z-50 w-full">
        <div className='flex flex-col md:flex-row w-full justify-between items-center gap-4'>
            <div className="ml-0 md:ml-10 text-sm md:text-xl text-center md:text-left">
                <Link className={linkClass('home2')}  href="/">
                    MADE BY DOLLAR
                </Link>
            </div>

            <div className='flex flex-wrap justify-center gap-6 md:gap-10 mr-0 md:mr-10 pointer-events-auto px-4'>                
                <Link className={linkClass('home')}  href="/">
                All
                </Link>
                <Link className={linkClass('projects')} href="/projects">
                Projects
                </Link>
                <Link className={linkClass('contact')} href="/contact">
                Contact
                </Link>
                <Link className={linkClass('subscribe')} href="/waitlist">
                Subscribe
                </Link>
            </div>
        </div>
        {/* <div className="flex flex-wrap items-center justify-around h-16">
            <div className="flex flex-wrap flex-row w-full justify-around">
                <div>
                    
                </div>
            </div>
        </div> */}
        {/* <div className="mx-auto px-4 sm:px-6 lg:px-12">
            
        </div> */}
    </nav>
  )
}