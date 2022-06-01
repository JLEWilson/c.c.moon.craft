import type { FC } from "react"

import { NavLink } from "remix"

import { centered } from "~/styles/tailwind_templates"
import { join } from "~/utils"

type NavButtonProps = {
  to: string
  text: string
  width?: number
}
const NavButton: FC<NavButtonProps> = ({ to, text, width }) => {
  const wrapperStyles = [
    ...centered,
    `w-full`,
    `mx-1`,
    `sm:mx-[2px]`,
    `md:mx-[1vw]`,
    `lg:mx-[3vw]`,
  ]
  const generalStyles = [
    `transition`,
    `ease-in-out`,
    `py-3`,
    `px-4`,
    `w-1/${width}`,
    `rounded`,
    `shrink-0`,
    `hover:bg-[#b7daf2]`,
    `active:bg-[#a07e39]`,
    `duration-500`,
  ]
  const activeStyles = [`bg-[#a07e39]`]
  const inactiveStyles = [`bg-[#a14c0b]`]
  return (
    <div className={join(...wrapperStyles)}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive
            ? join(...generalStyles, ...activeStyles)
            : join(...generalStyles, ...inactiveStyles)
        }
      >
        {text}
      </NavLink>
    </div>
  )
}

export default NavButton
