import React from 'react'
import SocialLink from './SocialLink'

export default function SocialMediaContainer() {
  return (
    <div className='flex'>
        <div className='mx-auto'>
            
            <SocialLink
            iconName="github"
            title="Github"
            link="https://github.com/DollieNOMONEY"
            handle="@DollieNOMONEY"
            />
            
            {/* <SocialLink
            iconName="instagram"
            title="Instagram"
            link="https://www.instagram.com/dollie.cantcode/"
            handle="@dollie.cantcode"
            />

            <SocialLink
            iconName="twitter"
            title="Twitter"
            link="https://x.com/dollie_cantcode"
            handle="@dollie.cantcode"
            /> */}

            <div className='mb-24'/>

        </div>
    </div>
  )
}
