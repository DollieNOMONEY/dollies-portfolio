import React from 'react'
import SocialLink from './SocialLink'

export default function SocialMediaContainer() {
  return (
    <div className='flex'>
        <div className=''> 
          {/* mx-auto */}
            <p className='mb-3 text-xl'>External</p>

            <p className='mb-3'>VISUALS</p>
            <SocialLink
            iconName="instagram"
            title="Instagram"
            link="https://www.instagram.com/madeby_dollar/"
            handle="@madeby＿dollar"
            />

            <SocialLink
            iconName="tiktok"
            title="Tiktok"
            link="https://www.tiktok.com/@madeby.dollar"
            handle="@madeby.dollar"
            />
            
            <SocialLink
            iconName="youtube"
            title="Youtube"
            link="https://www.youtube.com/@madebydollar"
            handle="@madebydollar"
            />

            <SocialLink
            iconName="facebook"
            title="Facebook"
            link="https://www.facebook.com/madebydollar"
            handle="@madebydollar"
            />

            <p className='mb-3'>LOGS</p>
            <SocialLink
            iconName="threads"
            title="Threads"
            link="https://www.threads.com/@madeby_dollar"
            handle="@madeby＿dollar"
            />

            <SocialLink
            iconName="twitter"
            title="Twitter"
            link="https://x.com/madebydollar"
            handle="@madebydollar"
            />

            {/* <SocialLink
            iconName="pinterest"
            title="Pinterst"
            link="https://www.pinterest.com/madebydollar/"
            handle="@madebydollar"
            /> */}

            {/* <SocialLink
            iconName="github"
            title="Github"
            link="https://github.com/DollieNOMONEY"
            handle="@DollieNOMONEY"
            /> */}

            {/* <SocialLink
            iconName="twitter"
            title="Soundcloud"
            link="https://soundcloud.com/madebydollar"
            handle="@madebydollar"
            /> */}

            <div className='mb-24'/>

        </div>
    </div>
  )
}
