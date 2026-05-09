"use client";
import { useState } from 'react';
import { projectData } from '@/lib/projects';
import ProjectPreview from '@/components/ProjectPreview';
import Navbar from '@/components/Navbar';

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Website", "Music"];

  const filteredProjects = activeFilter === "All" 
    ? projectData 
    : projectData.filter(p => p.category === activeFilter);

  return (
    <div className="w-full bg-[#121212] min-h-screen">
      <Navbar isActive="projects"/>
      
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

      <div className="flex flex-col">
        {filteredProjects.length > 0 ? (
          filteredProjects.map((p) => (
            <ProjectPreview 
              key={p.id} 
              title={p.title} 
              description={p.desc} 
              link={p.link}
              banner={p.banner}
              media={p.media} 
            />
          ))
        ) : (
          <div className="p-20 text-neutral-800 font-mono text-xs uppercase">No_Data_In_Archive</div>
        )}
      </div>
    </div>
  );
}