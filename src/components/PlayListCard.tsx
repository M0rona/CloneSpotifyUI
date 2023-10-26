import Image from "next/image"
import { Play } from 'lucide-react'

export const PlayListCard = () => {
  return (
    <div className="flex items-center gap-4 min-w-[512px] group bg-white/5 rounded overflow-hidden cursor-pointer transition-colors hover:bg-white/20">
        <Image 
            src="/CapaImagine.jpg" 
            width={104} 
            height={104} 
            alt='Album imagine dragons'
        />        
        <strong className="mr-auto">Origins</strong>

        <button className="w-14 h-14 flex items-center justify-center text-black mr-8 bg-green-500 p-4 rounded-full hover:scale-105 invisible group-hover:visible">
            <Play className="ml-1" />
        </button>
    </div>
  )
}
