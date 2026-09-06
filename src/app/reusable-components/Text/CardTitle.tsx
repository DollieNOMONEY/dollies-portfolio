import React from 'react'

interface CardTitleProps {
    readonly children: React.ReactNode,
    readonly className?: string;
}

export default function CardTitle({children, className=""}: CardTitleProps) {
  return (
    <h1 className={`text-lg md:text-xl tracking-widest ${className}`}>
        {children}
    </h1>
  )
}