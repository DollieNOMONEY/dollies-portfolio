"use client";
import { useState } from 'react';
import { projectData } from '@/lib/projects';
import ProjectPreview from '@/components/ProjectPreview';
import Navbar from '@/components/Navbar';

export default function ProjectsPage() {
  // Ensure "All" is the default so the list isn't empty on load
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Music", "Website", "Study Archive"];

  // Logic to filter the projects based on your lib/projects.ts categories
  const filteredProjects = activeFilter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#121212] min-h-screen">
      <Navbar isActive="projects"/>
      
      {/* Filter Menu */}
      <div className="flex gap-6 px-8 py-10 text-[10px] uppercase tracking-[0.2em] text-neutral-500">
        {categories.map(cat => (
          <button 
            key={cat} 
            onClick={() => setActiveFilter(cat)}
            className={`transition-colors duration-300 ${activeFilter === cat ? "text-red-600" : "hover:text-white"}`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* The Map: Ensure media={p.media} is passed here */}
      <div className="flex flex-col">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <ProjectPreview 
              key={p.id} 
              title={p.title} 
              description={p.desc} 
              link={p.link} 
              media={p.media} // CRITICAL: This connects the preview to your assets
            />
          ))
        ) : (
          <div className="p-20 text-neutral-800 font-mono text-xs uppercase">No_Data_In_Archive</div>
        )}
      </div>
    </div>
  );
}