import React from 'react'

export default function SpacingLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='mt-12 w-full'> 
        <div className='flex justify-center'>
          <div className='mx-auto px-6 md:w-2/3 lg:w-1/2'>
            {children}
          </div>
        </div>
    </div>
  )
}
