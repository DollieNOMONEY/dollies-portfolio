"use client";
import Link from "next/link";
import { useState, useEffect, useMemo } from "react";
import Image from "next/image";

interface ProjectMedia {
  type: string;
  url: string;
}

interface ProjectProps {
  readonly title: string;
  readonly description: string;
  readonly link: string;
  readonly banner?: string;
  readonly media?: ProjectMedia[];
}

export default function ProjectPreview({
  title,
  description,
  link,
  banner,
  media = [],
}: ProjectProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // CONTEXT: random
  const shuffledMedia = useMemo(() => {
    if (!mounted) return []; // CONTEXT: don't shuffle on the server
    return [...media].sort(() => 0.5 - Math.random()).slice(0, 4);
  }, [media, mounted]);

  // CONTEXT: fallback; use placeholders if no media exists
  const displayItems =
    mounted && shuffledMedia.length > 0 ? shuffledMedia : [1, 2, 3, 4];

  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Link
      href={link}
      className="relative overflow-hidden group block flex-col md:flex-row border-t p-8 gap-10 items-end transition-all duration-500 hover:bg-[#161212] hover:border-red-950 cursor-pointer"
    >
      {banner && (
        <div
          className={`absolute inset-0 z-0 transition-opacity duration-1000 ease-in-out pointer-events-none
          ${isLoaded ? "opacity-0 group-hover:opacity-10" : "opacity-0"}`}
        >
          <Image
            src={banner}
            alt="banner"
            fill
            priority
            className="object-cover grayscale"
            onLoad={() => setIsLoaded(true)}
          />
        </div>
      )}

      <div className="flex flex-col z-10 md:flex-row gap-10 items-center w-full">
        <div className="w-full md:w-[30%] flex flex-col justify-center">
          <h2 className="text-lg font-semibold tracking-tight text-white group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-xs text-neutral-500 mt-3 leading-relaxed group-hover:text-neutral-400 transition-colors">
            {description}
          </p>
        </div>

        <div className="w-full md:w-[70%] flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
          {displayItems.map((item, i) => {
            let itemContent: React.ReactNode;

            if (typeof item === "object") {
              if (item.type === "image") {
                itemContent = (
                  <div className="relative w-full h-full overflow-hidden">
                    <Image
                      src={item.url}
                      alt="preview"
                      fill
                      sizes="(max-width: 768px) 100vw, 25vw"
                      className="object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  </div>
                );
              } else {
                itemContent = (
                  <span className="text-red-900/40 text-[10px] font-mono">
                    FILE_MV
                  </span>
                );
              }
            } else {
              itemContent = (
                <span className="text-neutral-700 text-xs font-mono">
                  ASSET_{item}
                </span>
              );
            }

            return (
              <div
                key={i}
                className="min-w-full md:min-w-0 aspect-square bg-neutral-900/50 rounded-sm snap-center border border-neutral-800 group-hover:border-red-900/30 flex items-center justify-center shrink-0 transition-all duration-500 overflow-hidden"
              >
                {itemContent}
              </div>
            );
          })}
        </div>
      </div>
    </Link>
  );
}
