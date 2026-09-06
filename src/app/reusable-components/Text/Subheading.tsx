import React from 'react'

interface SubheadingProps {
    readonly children: React.ReactNode,
    readonly className?: string;
}

export default function Subheading({children, className=""}: SubheadingProps) {
  return (
    <h1 className={`text-lg md:text-xl tracking-tight ${className}`}>
        {children}
    </h1>
  )
}