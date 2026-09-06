import React from 'react'

interface ParagraphProps {
    readonly children: React.ReactNode,
    readonly className?: string;
}

export default function Paragraph({children, className=""}: ParagraphProps) {
  return (
    <h6 className={`tracking-wide ${className}`}>
        {children}
    </h6>
  )
}
