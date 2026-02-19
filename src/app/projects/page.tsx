import Navbar from '@/components/Navbar'
import SpacingLayout from '@/components/SpacingLayout'
import ProjectPreview from '@/components/ProjectPreview'

export default function ProjectsPage() {
  return (
    <div className='w-full'>
        <Navbar isActive="projects"/>
        <SpacingLayout>

          <ProjectPreview 
              title="Productivity Platform"
              description="Solving common problems regarding student's difficilties in Cambodia, In development. Origin to international."
              link=""
            />

        </SpacingLayout>
    </div>
  )
}