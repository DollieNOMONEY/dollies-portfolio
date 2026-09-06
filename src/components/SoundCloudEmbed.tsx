interface SoundCloudEmbedProps {
  readonly className: string
  readonly trackUrl: string;
  readonly height?: string | number;
}

export default function SoundCloudEmbed({ className="", trackUrl, height = 166 }: SoundCloudEmbedProps) {
  const encodedUrl = encodeURIComponent(trackUrl);
  
  const embedSrc = `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
    <div className={`${className} relative z-30 mx-auto my-4`}>
      <iframe
        width="100%"
        height={height}
        allow="autoplay"
        src={embedSrc}
        title="SoundCloud Player"
        className="border-none"
      />
    </div>
  );
}