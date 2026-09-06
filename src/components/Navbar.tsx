import Link from 'next/link'

type NavbarProps = {
    readonly  isActive: string
}

export default function Navbar({isActive}: NavbarProps) {
  return (
    <nav className="bg-transparent flex flex-col md:flex-row pt-6 pb-6 justify-center items-center gap-4 md:gap-16 text-xl text-black absolute z-50 w-full">
        <div className='flex flex-col md:flex-row w-full justify-between items-center gap-4'>
            <div className="ml-0 md:ml-10 text-sm md:text-xl text-center md:text-left">
                <Link href="/" className="text-[#9c0003]">
                    MADE BY DOLLAR
                </Link>
            </div>

            <div className='flex flex-wrap justify-center gap-6 md:gap-10 mr-0 md:mr-10 pointer-events-auto px-4'>
                <Link href="/projects/001-cant-help-but-get-away-from-you">
                Projects
                </Link>
                <Link href="/#contact">
                Inquire
                </Link>
            </div>
        </div>
        {/* <div sassName="flex flex-wrap items-center justify-around h-16">
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