import React from 'react'
import { luxuriousScript } from '@/app/fonts';

interface CardTitleProps {
    readonly children: React.ReactNode,
    readonly className?: string;
}

export default function CardTitle({children, className=""}: CardTitleProps) {
  return (
    <h1 className={`${luxuriousScript.className} text-lg md:text-xl tracking-widest ${className}`}>
        {children}
    </h1>
  )
}