import type { FC } from "react"

import NavButton from "~/components/NavButton"
import { centered } from "~/styles/tailwind_templates"
import { join } from "~/utils"
const ROUTES = [
  {
    to: `/home`,
    text: `Home`,
  },
  {
    to: `/notes`,
    text: `Notes`,
  },
  {
    to: `/about`,
    text: `About`,
  },
  {
    to: `/contact`,
    text: `Contact`,
  },
]

const NavBar: FC = () => {
  const container = [
    `fixed`,
    `bottom-0`,
    `w-full`,
    `bg-[#2F3E46DE]`,
    `pt-2.5`,
    `pb-4`,
  ]
  return (
    <div className={join(...container, ...centered)}>
      {ROUTES.map((route) => {
        return <NavButton key={route.to} to={route.to} text={route.text} />
      })}
    </div>
  )
}

export default NavBar
