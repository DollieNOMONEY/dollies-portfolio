import React from 'react'
import { bodoniModa } from '@/app/fonts';

interface HeadingProps {
    readonly children: React.ReactNode,
    readonly className?: string;
}

export default function Heading({children, className=""}: HeadingProps) {
  return (
    <h1 className={`${bodoniModa.className} tracking-wider text-6xl sm:text-[150px] lg:text-[250px] xl:text-[300px] ${className}`}>
        {children}
    </h1>
  )
}
