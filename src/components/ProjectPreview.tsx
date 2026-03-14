'use client';
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

// Explicit type definitions to strictly avoid :any
interface ProjectMedia {
  type: string;
  url: string;
}

interface ProjectProps {
  title: string;
  description: string;
  link: string;
  media?: ProjectMedia[];
}

export default function ProjectPreview({ title, description, link, media = [] }: ProjectProps) {
  
  // Randomization Logic
  const shuffledMedia = [...media]
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  // Fallback: Use placeholders if no media exists
  const displayItems: (ProjectMedia | number)[] = shuffledMedia.length > 0 
    ? shuffledMedia 
    : [1, 2, 3, 4];

  return (
    <Link 
      href={link}
      className="group block flex-col md:flex-row border-t border-neutral-800 p-8 gap-10 items-end transition-all duration-500 hover:bg-[#161212] hover:border-red-950 cursor-pointer"
    >
      <div className="flex flex-col md:flex-row gap-10 items-center w-full">
        {/* Left Side */}
        <div className="w-full md:w-[30%] flex flex-col justify-center">
          <h2 className="text-lg font-semibold tracking-tight text-white group-hover:text-red-600 transition-colors duration-300">
            {title}
          </h2>
          <p className="text-xs text-neutral-500 mt-3 leading-relaxed group-hover:text-neutral-400 transition-colors">
            {description}
          </p>
        </div>

        {/* Right Side - Media Peeks */}
        <div className="w-full md:w-[70%] flex md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 snap-x snap-mandatory">
          {displayItems.map((item, i) => {
            
            // --- INDEPENDENT STATEMENT EXTRACTION ---
            // This block replaces the nested ternary for clarity and type safety
            let itemContent: React.ReactNode;

            if (typeof item === 'object') {
              // It is a real media object
              if (item.type === 'image') {
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
                // It is a video/other media
                itemContent = <span className="text-red-900/40 text-[10px] font-mono">FILE_MV</span>;
              }
            } else {
              // It is a fallback number [1, 2, 3, 4]
              itemContent = <span className="text-neutral-700 text-xs font-mono">ASSET_{item}</span>;
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