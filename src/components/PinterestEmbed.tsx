export default function PinterestEmbed({ pinUrl, title }: { readonly pinUrl: string; readonly  title: string }) {
  return (
    <div className="relative z-30 border border-[#bcdb8d]/30 bg-[#113a22] p-6 rounded-none max-w-sm mx-auto my-8 text-[#fdf59d]">
      <p className="text-xs uppercase tracking-widest text-[#bcdb8d] mb-2">Pinterest Inspiration</p>
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      <a 
        href={pinUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-block bg-[#bcdb8d] text-[#174e2e] px-4 py-2 font-bold hover:bg-[#fdf59d] transition-colors"
      >
        View Pin &rarr;
      </a>
    </div>
  );
}