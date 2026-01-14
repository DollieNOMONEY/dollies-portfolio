import React from 'react'

type ParagraphProps = {
    title?: string
    children?: React.ReactNode
}

export default function Paragraph({title, children}: ParagraphProps) {
  return (
    <div>
        <h2 className='text-4xl font-extrabold mb-12 dark:text-gray-300 text-black text-center'>{title}</h2>
        <p className='text-lg xl:text-xl mb-12 dark:text-gray-300 text-black text-center'>{children}</p>
    </div>
  )
}