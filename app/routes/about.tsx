import type { FC } from "react"

import { header, centered } from "~/styles/tailwind_templates"
import { join } from "~/utils"

import NavBar from "../components/NavBar"

const AboutPage: FC = () => {
  const heading = [
    `flex`,
    `items-center`,
    `justify-between`,
    `bg-slate-800`,
    `p-4 text-white`,
  ]
  const container = [`flex`, `flex-col`]
  return (
    <div className={join(...container)}>
      <header className={join(...heading)}>
        <h1 className={join(...header, ...centered)}>All about Chloe</h1>
      </header>
      <p>
        Chloe has been crafting artisanal products for the last 50 years using
        all organic hand spun materials.
      </p>
    </div>
  )
}
export default AboutPage
