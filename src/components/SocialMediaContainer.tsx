import React from "react";
import SocialLink from "./SocialLink";

export default function SocialMediaContainer() {
  return (
    <div className="flex">
      <div className="">
        
        <p className="mb-3">VISUALS</p>
        <SocialLink
          iconName="instagram"
          title="Instagram"
          link="https://www.instagram.com/created.bydollar/"
          handle="@created.bydollar"
        />
        <SocialLink
          iconName="tiktok"
          title="Tiktok"
          link="https://www.tiktok.com/@made.by.dollar"
          handle="@made.by.dollar"
        />
        <SocialLink
          iconName="youtube"
          title="Youtube"
          link="https://www.youtube.com/channel/UCkaUAKnLRHA99fn1Quedtug"
          handle="@made.bydollar"
        />
        <SocialLink
          iconName="soundcloud"
          title="Soundcloud"
          link="https://soundcloud.com/madebydollar"
          handle="@madebydollar"
        />

        <div className="mb-24" />
      </div>
    </div>
  );
}
