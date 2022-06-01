import type { FC } from "react"

import { useLoaderData, json } from "remix"
import type { LoaderFunction } from "remix"

import { requireUserId } from "~/session.server"
import { header, centered } from "~/styles/tailwind_templates"
import { join } from "~/utils"

import NavBar from "./navbar"

// type LoaderData = Awaited<ReturnType<typeof getLoaderData>>
// const getLoaderData = async (request: Request) => {
//   const userId = await requireUserId(request)
//   return { userId: userId }
// }

// export const loader: LoaderFunction = async ({ request }) => {
//   return json(await getLoaderData(request))
// }
const Contact: FC = () => {
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
        <h1 className={join(...header, ...centered)}>
          Chloe&apos;s Super Awesome Contact Information
        </h1>
      </header>
      <p>Email me at freakincage.com</p>
    </div>
  )
}
export default Contact
