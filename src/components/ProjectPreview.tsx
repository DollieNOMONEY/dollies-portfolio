type ProjectProps = {
    title: string
    description: string
    link: string
}


export default function ProjectPreview({title, description, link}: ProjectProps) {
  return (
//    
    <div className='flex gap-12 border-white border-t-2 border-b-2 box-border p-5'>
        <div className='w-1/2'>
           <h2 className='text-2xl font-bold mb-1'>
            <a className='
            underline hover:text-neutral-500 hover:cursor-pointer'
            href={link}
            target="_blank"
            >{title}</a></h2>
            <p className='text-md xl:text-lg mb-6 h-28 mt-2'>{description}</p>
        </div>

        <div className='w-1/2'>
            {/* <video
                src="/vid/.mp4"
                autoPlay
                loop
                muted
                playsInline
            /> */}
        </div>
    </div>

  )
}