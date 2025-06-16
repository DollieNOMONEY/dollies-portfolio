import React from 'react'

export default function SpacingLayout({children}: {children: React.ReactNode}) {
  return (
    <div className='mt-16 w-full'> 
        <div className='flex justify-center'>
          <div className='mx-auto w-[95%] md:w-2/3 lg:w-1/2'>
            {children}
          </div>
        </div>
    </div>
  )
}
