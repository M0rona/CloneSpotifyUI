import Image from "next/image"

export const VerticalCard = () => {
  return (
    <div className='flex flex-col w-44 gap-2 bg-white/5 hover:bg-white/10 p-3 rounded-md cursor-pointer'>
        <Image 
            src="/CapaNightVision.jpg" 
            className="w-full rounded"
            width={104} 
            height={104} 
            alt='Album imagine dragons'
        /> 

        <strong className="">Night Visions</strong>

        <span className="text-xs font-medium text-zinc-400">2012 • Imagine Dragons</span>
    </div>
  )
}
