import { PlayListItem } from "./PlayListItem"
import { NavPages } from "./NavPages"
import { HomeIcon, Search, Library} from 'lucide-react'

export const SideBar = () => {
  return (
    <aside className="w-72 bg-zinc-950 p-6">
        <div className='flex items-center gap-2'>
            <div className='w-3 h-3 bg-red-500 rounded-full' />
            <div className='w-3 h-3 bg-yellow-500 rounded-full' />
            <div className='w-3 h-3 bg-green-500 rounded-full' />
          </div>

          <nav className='space-y-5 mt-10'>
            <NavPages active={true}>
              <HomeIcon />
              Home
            </NavPages>

            <NavPages>
              <Search />
              Search
            </NavPages>

            <NavPages>
              <Library />
              Your Library
            </NavPages>
          </nav>

          <nav className='mt-10 pt-10 border-t border-zinc-800 flex flex-col gap-2'>
              <PlayListItem>Músicas curtidas</PlayListItem>
              <PlayListItem>Seus espisódios</PlayListItem>
              <PlayListItem>Viral Hits</PlayListItem>
              <PlayListItem>Para cantar com jesus</PlayListItem>
          </nav>
    </aside>
  )
}
