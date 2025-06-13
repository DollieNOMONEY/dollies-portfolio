import React from 'react'
import Link from 'next/link'

type NavbarProps = {
    isActive: string
}

export default function Navbar({isActive}: NavbarProps) {
    const baseClasses = "font-bold text-black dark:text-white hover:underline"
    
    const linkClass = (page: string) =>
    `font-bold ${
        isActive === page ? 'underline text-blue-600' : 'text-black dark:text-white hover:underline'
    }`

  return (
    <nav className="flex mt-12 justify-center gap-16 text-xl text-black z-20">
        <div className="mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap items-center justify-between h-16">
                <div className="flex flex-wrap flex-row w-full justify-between">
                    <div>
                        <div className="flex items-baseline space-x-15">
                            <Link className={linkClass('home')} href="/">
                            Home
                            </Link>
                            <Link className={linkClass('about')} href="/about">
                            About
                            </Link>
                            <Link className={linkClass('contact')} href="/contact">
                            Hire me
                            </Link>
                            <Link className={linkClass('projects')} href="/projects">
                            Projects
                            </Link>
                            <Link className={linkClass('blog')} href="/blog">
                            Blogs
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
