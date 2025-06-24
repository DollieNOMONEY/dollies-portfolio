import React from 'react'
import Navbar from '@/components/Navbar'
import SpacingLayout from '@/components/SpacingLayout'
import Paragraph from '@/components/Paragraph'
import ProjectPreview from '@/components/ProjectPreview'
export default function ProjectsPage() {
  return (
    <div className='w-full'>
        <Navbar isActive="projects"/>
        <SpacingLayout>
          <h1 className='text-lg font-bold mb-12 tracking-wider'>FULL-STACK</h1>
          
          <div className='flex flex-col xl:flex-row flex-wrap gap-4 justify-center'>
            <ProjectPreview 
              title="Premier Football League"
              description=""
              link=""
              technology={["Laravel", "Tailwind", "HTML", "CSS", "Javascript"]}
            />
          </div>

          <h1 className='text-lg font-bold mb-12 tracking-wider'>FRONT-END</h1>

          <div className='flex flex-col xl:flex-row flex-wrap gap-4'>
            <ProjectPreview 
              title="Portfolio for &quot;Riel&quot;"
              description="A portfolio web application for a Software Agency."
              link="https://riel-web.vercel.app/"
              technology={["NextJS", "Tailwind", "React", "Typescript", "HTML", "CSS", "Vercel"]}
            />

            <ProjectPreview 
              title="To-Do List"
              description="Web app for organizing your life. Add, edit, complete, and delete tasks in real time. Tasks are saved in local storage so it stays unflawed after refreshing the page."
              link=""
              technology={["HTML", "CSS", "Javascript", "Local Storage", "Github Pages"]}
            />

            <ProjectPreview 
              title="This Website"
              description="A static multi-page personal portfolio web app built with Next.js. Uses file-based routing to navigate between pages and quick styling to deliver a fast, yet responsive user experience."
              link=""
              technology={["NextJS", "Tailwind", "React", "Typescript", "HTML", "CSS", "Vercel"]}
            />

            <ProjectPreview 
              title="Weather App"
              description=""
              link=""
              technology={["HTML", "CSS", "Javascript"]}
            />
          </div>

         
        </SpacingLayout>
    </div>
  )
}
