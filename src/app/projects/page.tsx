import React from 'react'
import Navbar from '@/components/Navbar'
import SpacingLayout from '@/components/SpacingLayout'
import Paragraph from '@/components/Paragraph'

export default function ProjectsPage() {
  return (
    <div className='w-full'>
        <Navbar isActive="projects"/>
        <SpacingLayout>
          <Paragraph title="To-do List">Project Description</Paragraph>
        </SpacingLayout>
        <SpacingLayout>
          <Paragraph title="Premier Football League">Project Description</Paragraph>
        </SpacingLayout>
        <SpacingLayout>
          <Paragraph title="Weather App">Project Description</Paragraph>
        </SpacingLayout>
    </div>
  )
}
