import React from 'react'

import Navbar from '@/components/Navbar'
import Paragraph from '@/components/Paragraph'
import SpacingLayout from '@/components/SpacingLayout'

import Link from 'next/link'

export default function AboutPage() {
  return (
    <div className='w-full'>
      <Navbar isActive="about"/>
      <SpacingLayout>
        <Paragraph title="Who am I?"
        children="Hi! I'm Dollar, I've been coding for nearly a decade and have been focused on web development for the past year. I am passionate about helping businesses and clients in need to drive more traffic to their brand."
        />
        <Paragraph>
          I believe that nowadays, every brand deserves a professional and accessible website. An aesthetically pleasing yet simple website is enough to provide a powerful first impression.
        </Paragraph>
        <Paragraph>
        Currently I'm learning as a Software Developer at <Link target='_blank' className='font-bold underline text-blue-600' href="https://cambodia.itstep.org/">ITStep Cambodia</Link> where I'm learning programming languages such as C++, C#, Javascript, and Typescript, and object-oriented programming.
        While I began with IT and Windows application fundamentals, my focus is now shifting toward full-stack web development, combining front-end and back-end technologies all together to build a complete, scalable web application.
        </Paragraph>
        <Paragraph>
          In my free time, I enjoy thrifting, styling outfits, making music, and freestyling to beats. I'm also into reading, exploring cafes, and being more social in my community. 
          Cafe-hopping and finding unique clothes are definitely my favorite hobbies, they help me stay inspired and creative outside of coding!
        </Paragraph>
      </SpacingLayout>
    </div>
  )
}
