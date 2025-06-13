import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconName } from '@fortawesome/fontawesome-svg-core'
import Link from 'next/link'

type SocialLinkProps = {
    iconName: IconName
    title: string
    link: string
    handle: string
}

export default function SocialLink({iconName, title, link, handle}: SocialLinkProps) {
  return (
    <div className='flex gap-12 mb-2'>
        <div className='flex gap-2 w-25'>
        <FontAwesomeIcon icon={['fab', iconName]} className="w-6 h-6" />
        <p>{title}</p>
        </div>
        <div className='flex gap-2'>
        <Link
            className='hover:underline'
            target='_blank'
            href={link}>
            <b>{handle}</b>
        </Link>
        <FontAwesomeIcon icon={['fas', 'arrow-right']} className="-rotate-45 w-5 h-5" />
        </div>
    </div>
  )
}
