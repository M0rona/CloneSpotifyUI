import { VerticalCard } from '@/components/VerticalCard';
import { PlayListCard } from '@/components/PlayListCard';

import { ChevronLeft, ChevronRight} from 'lucide-react'

export const ContentArea = () => {
    const greeting = () => {
        const currentTime = new Date().getHours();

        if (currentTime >= 5 && currentTime < 12) {
            return 'Good Morning';
        } else if (currentTime >= 12 && currentTime < 18) {
            return 'Good Afternoon';
        } else {
            return 'Good Evening';
        }
    }

  return (
    <main className="flex-1 p-6 overflow-y-auto" style={{height: 'calc(100vh - 89px)'}}>
        {/* Botões de próximo e voltar */}
        <div className='flex items-center gap-4'>
            <button className='rounded-full bg-black/40 p-1'>
                <ChevronLeft />
            </button>

            <button className='rounded-full bg-black/40 p-1'>
                <ChevronRight />
            </button>
        </div>

        <h1 className='font-semibold text-3xl mt-10'>{greeting()}</h1>

        {/* Cards das playlists */}
        <div className='flex flex-wrap auto gap-6 mt-4' >
            <PlayListCard />
            <PlayListCard />
            <PlayListCard />
            <PlayListCard />
            <PlayListCard />
            <PlayListCard />
        </div>

        <h2 className='font-semibold text-2xl mt-10'>Made For Gabriel Morona</h2>

        {/* Cards verticais de playlist */}
        <div className='flex flex-wrap gap-4 mt-4'>
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
            <VerticalCard />
        </div>
    </main>
  )
}
