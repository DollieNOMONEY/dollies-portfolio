import React, { ReactNode } from 'react'

interface Props {
    readonly children: ReactNode
    readonly className?: string
}

export default function SlideContainer({ children, className } : Props) {
  return (
     <div className={`flex flex-col items-center w-full justify-center ${className}`}>
        {children}
    </div>
  )
}
// xl:flex
//         2xl:gap-80 
//         2xl:px-12
//         xl:flex-row