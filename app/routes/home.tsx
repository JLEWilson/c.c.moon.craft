import type { FC } from "react"

import { header, centered } from "~/styles/tailwind_templates"
import { join } from "~/utils"

import NavBar from "./navbar"

const HomePage: FC = () => {
  const heading = [
    `flex`,
    `items-center`,
    `justify-between`,
    `bg-slate-800`,
    `p-4 text-white`,
  ]
  const container = [`flex`, `h-full`, `min-h-screen`, `flex-col`]
  return (
    <div className={join(...container)}>
      <header className={join(...heading)}>
        <h1 className={join(...header, ...centered)}>
          Chloe&apos;s Super Awesome Website
        </h1>
      </header>
      <p>Lots of great information about this site</p>
      <NavBar />
    </div>
  )
}
export default HomePage
