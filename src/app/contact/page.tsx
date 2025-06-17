import React from 'react'

import Navbar from '@/components/Navbar'
import SpacingLayout from '@/components/SpacingLayout'
import Paragraph from '@/components/Paragraph'
import SocialMediaContainer from '@/components/SocialMediaContainer'
import HorizontalLine from '@/components/HorizontalLine'
import ContactButton from '@/components/ContactButton'

export default function ContactPage() {
  return (
    <div className='w-full'>
      <Navbar isActive="contact"/>
      <SpacingLayout>
        <Paragraph title="Connect"></Paragraph>
        <ContactButton/>
        <SocialMediaContainer/>

        <HorizontalLine/>
      </SpacingLayout>
    </div>
  )
}
