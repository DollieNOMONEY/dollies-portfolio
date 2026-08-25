interface SoundCloudEmbedProps {
  trackUrl: string;
  height?: string | number;
}

export default function SoundCloudEmbed({ trackUrl, height = 166 }: SoundCloudEmbedProps) {
  const encodedUrl = encodeURIComponent(trackUrl);
  
  const embedSrc = `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23000000&auto_play=false&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false`;

  return (
    <div className="relative z-30 w-full max-w-xl mx-auto my-4">
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