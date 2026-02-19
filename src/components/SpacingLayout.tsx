import React from 'react'

export default function SpacingLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='mt-12 w-full'> 
        <div className='flex justify-center'>
          <div className='lg:px-0 mx-auto lg:mx-0'>
            {children}
          </div>
        </div>
    </div>
  )
}
