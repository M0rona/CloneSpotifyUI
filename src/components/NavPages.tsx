import { ReactNode } from "react"

type Props = {
    children : ReactNode,
    active?: boolean
}

export const NavPages = ({children, active} : Props) => {
  return (
    <a href="#" className={
      `flex items-center gap-3 text-sm font-semibold 
      ${active ? 'text-zinc-200' : 'text-zinc-400'}
      hover:text-zinc-200
      `
    }>
        {children}
    </a>
  )
}
