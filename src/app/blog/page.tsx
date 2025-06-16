import React from 'react'
import Navbar from '@/components/Navbar'
import SpacingLayout from '@/components/SpacingLayout'
import Paragraph from '@/components/Paragraph'

export default function BlogPage() {
  return (
    <div className='w-full'>
     <Navbar isActive="blog"/>
     <SpacingLayout>
        <Paragraph title="Blog">
          Coming Soon!
        </Paragraph>
     </SpacingLayout>
    </div>
  )
}
