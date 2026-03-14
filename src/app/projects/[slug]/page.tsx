// app/projects/[slug]/page.tsx
"use client";

import { projectData } from '@/lib/projects';
import { notFound } from 'next/navigation';
import { PlayCircle, ArrowUpRight, LayoutGrid, FileText, Maximize, Minimize } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { useState, use } from 'react';
import ReactMarkdown from 'react-markdown';

export default function ProjectDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const project = projectData.find((p) => p.slug === slug);
  
  // State to manage the current active view and layout mode
  const [activeView, setActiveView] = useState<'visual' | 'doc'>('visual');
  const [isFullScreen, setIsFullScreen] = useState(false);

  if (!project) notFound();

  return (
    <div>
      <Navbar isActive="projects"/>

      <main className="w-full bg-[#121212] text-neutral-300 min-h-screen p-8 md:p-20 font-sans selection:bg-red-900 selection:text-white">

        {/* Header */}
        <header className="border-b border-red-950 pb-10 mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div>
            <p className="text-red-700 font-mono text-xs mb-4 tracking-widest uppercase">File_{project.id} // Archived</p>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-white">{project.title}</h1>
          </div>
          {/* <button className="flex items-center gap-2 text-xs border border-neutral-800 hover:border-red-800 px-4 py-2 rounded-full transition-all">
            <PlayCircle size={14} className="text-red-600"/> Play Soundtrack
          </button> */}
        </header>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 transition-all duration-500">
          
          {/* Left Column - Hides when Full Screen is active */}
          {!isFullScreen && (
            <div className="md:col-span-4 space-y-8 text-neutral-300 animate-in fade-in slide-in-from-left-4 duration-500">
              <p className="text-base leading-relaxed opacity-90">
                {project.desc}
              </p>

              <div className="p-6 bg-[#151111] border-l-4 border-red-800 text-lg md:text-xl font-medium leading-snug tracking-wide text-white">
                "{project.quote}"
              </div>
                        
              <div className="space-y-4 pt-8 border-t border-neutral-800">
                <a href={project.insta} target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-between text-base hover:text-red-500 transition-colors group">
                  <span className="tracking-wide">View on Instagram</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
                <a href={project.yt} target="_blank" rel="noopener noreferrer" 
                  className="flex items-center justify-between text-base hover:text-red-500 transition-colors group">
                  <span className="tracking-wide">Watch on YouTube</span>
                  <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          )}

          {/* Right Column - Expands to 12 cols when Full Screen is active */}
          <div className={`${isFullScreen ? 'md:col-span-12' : 'md:col-span-8'} flex flex-col transition-all duration-500`}>
            
            {/* View Toggle & Full Screen Actions */}
            <div className="flex items-center gap-6 mb-8 border-b border-neutral-800/50 pb-4">
              <div className="flex items-center gap-6">
                <button
                  onClick={() => setActiveView('visual')}
                  className={`flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                    activeView === 'visual' 
                      ? 'text-white border-b-2 border-red-800 pb-[17px] -mb-[18px]' 
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <LayoutGrid size={14} /> Visual Board
                </button>
                
                <button
                  onClick={() => setActiveView('doc')}
                  className={`flex items-center gap-2 text-xs uppercase tracking-widest transition-all duration-300 ${
                    activeView === 'doc' 
                      ? 'text-white border-b-2 border-red-800 pb-[17px] -mb-[18px]' 
                      : 'text-neutral-500 hover:text-neutral-300'
                  }`}
                >
                  <FileText size={14} /> Documentation
                </button>
              </div>

              {/* Full Screen Toggle - Pushed to the right */}
              <button
                onClick={() => setIsFullScreen(!isFullScreen)}
                className="ml-auto flex items-center gap-2 text-xs uppercase tracking-widest text-neutral-500 hover:text-white transition-colors"
                title="Toggle Full Screen"
              >
                {isFullScreen ? (
                  <>
                    <Minimize size={14} /> <span className="hidden sm:inline">Exit Focus</span>
                  </>
                ) : (
                  <>
                    <Maximize size={14} /> <span className="hidden sm:inline">Increase Focus</span>
                  </>
                )}
              </button>
            </div>

            {/* Render Visual Board */}
            {activeView === 'visual' && (
              // Changed to columns-2 as default so mobile shows a 2-column grid
              <div className={`columns-2 gap-3 md:gap-4 animate-in fade-in duration-500 ${isFullScreen ? 'md:columns-3 lg:columns-4' : 'md:columns-2'}`}>
                {project.media?.map((item, index) => (
                  <div key={index} className="break-inside-avoid mb-3 md:mb-4">
                    {item.type === 'video' ? (
                      <div className="w-full bg-neutral-900 border border-neutral-800 rounded-sm relative overflow-hidden group">
                        <div className="aspect-video flex items-center justify-center cursor-pointer">
                           <PlayCircle size={48} className="text-red-600 opacity-50 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    ) : (
                      <img 
                        src={item.url} 
                        alt={`${project.title} asset`} 
                        className="w-full h-auto bg-neutral-900 border border-neutral-800 rounded-sm transition-all duration-500 hover:border-red-900/40"
                      />
                    )}
                  </div>
                ))}

                {(!project.media || project.media.length === 0) && (
                   <div className="break-inside-avoid w-full aspect-square bg-neutral-900/30 border border-neutral-800 flex items-center justify-center">
                     <span className="text-neutral-700 text-xs font-mono tracking-tighter uppercase">No_Assets_Logged</span>
                   </div>
                )}
              </div>
            )}

            {/* Render Documentation (Blog Style) */}
            {activeView === 'doc' && (
              // Added auto-centering when in full screen mode for better readability
              <div className={`space-y-6 animate-in fade-in duration-500 ${isFullScreen ? 'max-w-4xl mx-auto' : 'max-w-3xl'}`}>
                <h2 className="text-2xl font-bold text-white tracking-tight">Project Overview</h2>
                <article className="prose prose-invert prose-neutral text-neutral-400 leading-relaxed max-w-none indent-paragraphs">
                  <ReactMarkdown>
                    {project.documentation || "We're trying our best to provide the best experience for you. Detail Documentation compilation is ongoing."}
                  </ReactMarkdown>
                </article>
              </div>
            )}

          </div>
        </div>
      </main>
    </div>
  );
}