import React from 'react'

type ProjectProps = {
    title: string
    description: string
    link: string
    technology: string[]
}


export default function ProjectPreview({title, description, link, technology}: ProjectProps) {
  return (
    <div className='basis-[calc(50%-0.5rem)]'>
        <h2 className='text-2xl font-bold mb-1'>
            <a className='
            underline hover:text-neutral-500 hover:cursor-pointer'
            href={link}
            target="_blank"
            >{title}</a></h2>
        <video
        src="/vid/rielportfolio.mp4"
        autoPlay
        loop
        muted
        playsInline
        />
        <p className='text-md xl:text-lg mb-6 h-28 mt-2'>{description}</p>
        <div className="flex gap-2 flex-wrap mb-24">
            {technology.map((tech, index) => (
                <p
                key={index}
                className="bg-[rgba(79,130,189,0.7)] text-white rounded-full py-2 px-4 font-bold text-sm"
                >
                {tech}
                </p>
            ))}
        </div>
    </div>
  )
}
