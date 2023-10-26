import React from 'react'
import { 
    Shuffle, 
    SkipBack, 
    Play , 
    SkipForward,  
    Repeat,
    Mic2,
    LayoutList,
    Laptop2,
    Volume,
    Maximize2 } from 'lucide-react'
import Image from 'next/image';

export const Footer = () => {
  return (
    <footer className="flex items-center justify-between bg-zinc-800 border-t border-zinc-700 px-6 py-3 gap-2">
        {/* Album/Artista */}
        <div className='flex gap-3 items-center'>
          <Image 
            src="/CapaSmokeMirrors.jpg" 
            className='rounded'
            width={58}
            height={58}
            alt="Capa smoke mirrors" 
          />
          <div className='flex flex-col gap-1'>
            <strong className='font-normal'>Shots</strong>
            <span className='text-xs text-zinc-400'>Imagine Dragons</span>
          </div>
        </div>

        {/* Player */}
        <div className='flex flex-col items-center'>
          {/* Controles */}
          <div className='flex items-center gap-6'>
            <Shuffle size={20} className='text-zinc-200 cursor-pointer' />
            <SkipBack size={20} className='text-zinc-200 cursor-pointer'/>

            <button className='w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black hover:scale-105'>
              <Play />
            </button>

            <SkipForward size={20} className='text-zinc-200 cursor-pointer'/>
            <Repeat size={20} className='text-zinc-200 cursor-pointer'/>
          </div>
          
          {/* Slider */}
          <div className='flex items-center gap-2 mt-2'>
            <span className='text-xs text-zinc-400'>0:31</span>
            <div className='h-1 rounded-full w-96 bg-zinc-600'>
              <div className='bg-zinc-200 w-40 h-1 roundend-full'/>
            </div>
            <span className='text-xs text-zinc-400'>2:14</span>
          </div>
        </div>
          
        {/* Botões auxiliares */}
        <div className='flex items-center gap-4'>
          <Mic2 size={20} className='cursor-pointer' />
          <LayoutList size={20} className='cursor-pointer' />
          <Laptop2 size={20} className='cursor-pointer' />

          <div className='flex items-center gap-1'>
            <Volume size={20} />
            <div className='h-1 rounded-full w-24 bg-zinc-600 cursor-pointer'>
              <div className='bg-zinc-200 w-10 h-1 roundend-full'/>
            </div>
          </div>

          <Maximize2 size={20} className='cursor-pointer' />
        </div>
    </footer>
  )
}
