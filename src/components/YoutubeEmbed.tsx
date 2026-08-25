export default function YouTubeEmbed({ videoId }: { readonly videoId: string }) {
  return (
    <div className="z-20 relative w-full overflow-hidden pt-[56.25%]">
      <iframe
        className="absolute top-0 left-0 h-full w-full"
        src={`https://www.youtube-nocookie.com/embed/${videoId}?autoplay=0&modestbranding=1&rel=0`}
        title="Music VIdeo"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}