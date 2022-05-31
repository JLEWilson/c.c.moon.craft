import type { FC } from "react"

import { NavLink } from "remix"

import { centered } from "~/styles/tailwind_templates"
import { join } from "~/utils"

type NavButtonProps = {
  to: string
  text: string
}
const NavButton: FC<NavButtonProps> = ({ to, text }) => {
  const wrapperStyles = [...centered, `mx-4`, `w-full`, `h-full`]
  const activeStyles = [`bg-[#fcf9e6]`]
  const inactiveStyles = [`bg-[#dde2b9]`, `py-3`, `px-16`]
  return (
    <div className={join(...wrapperStyles)}>
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? join(...activeStyles) : join(...inactiveStyles)
        }
      >
        {text}
      </NavLink>
    </div>
  )
}

export default NavButton
