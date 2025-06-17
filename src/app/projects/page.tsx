import React from 'react'
import Navbar from '@/components/Navbar'
import SpacingLayout from '@/components/SpacingLayout'
import Paragraph from '@/components/Paragraph'

export default function ProjectsPage() {
  return (
    <div className='w-full'>
        <Navbar isActive="projects"/>
        <SpacingLayout>
          <Paragraph title="To-do List">Work used: HTML, CSS, Javascript</Paragraph>
          <Paragraph title="Premier Football League">Work used: Laravel, Tailwind, HTML, CSS, Javascript</Paragraph>
          <Paragraph title="Weather App">Work used: HTML, CSS, Javascript</Paragraph>
          <Paragraph title="This website">Work used: NextJS, Tailwind, React, Typescript, HTML, CSS</Paragraph>
          <Paragraph title="Note:">Github links, website links will be provided later on.</Paragraph>
        </SpacingLayout>
    </div>
  )
}
