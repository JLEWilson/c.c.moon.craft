import type { FC } from "react"

import { useLoaderData, json } from "remix"
import type { LoaderFunction } from "remix"

import Carousel from "~/components/Carousel"
import { getAllItems } from "~/models/item.server"
import { requireUserId } from "~/session.server"
import { header, centered } from "~/styles/tailwind_templates"
import { join, convertToCurrency } from "~/utils"

import NavBar from "../components/NavBar"

type LoaderData = Awaited<ReturnType<typeof getLoaderData>>

const getLoaderData = async (request: Request) => {
  const items = await getAllItems()
  return { items: items }
}

export const loader: LoaderFunction = async ({ request }) => {
  return json(await getLoaderData(request))
}
const COLORS = [
  `#71816e`,
  `#fcf9e6`,
  `#dde2b9`,
  `#446a51`,
  `#a07e39`,
  `#a14c0b`,
  `#6d543e`,
  `#b7daf2`,
]
const HomePage: FC = () => {
  const data = useLoaderData<LoaderData>()
  return (
    <>
      <h1 className={join(...header)}>
        Lots of great information about this site
      </h1>
      <div className={join(...centered)}>
        <div className="m-5 flex gap-5 bg-black p-5">
          <div className={join(`bg-[#71816e]`, `w-16`, `h-16`)}>{`#71816e`}</div>
          <div className={join(`bg-[#fcf9e6]`, `w-16`, `h-16`)}>{`#fcf9e6`}</div>
          <div className={join(`bg-[#dde2b9]`, `w-16`, `h-16`)}>{`#dde2b9`}</div>
          <div className={join(`bg-[#446a51]`, `w-16`, `h-16`)}>{`#446a51`}</div>
          <div className={join(`bg-[#a07e39]`, `w-16`, `h-16`)}>{`#a07e39`}</div>
          <div className={join(`bg-[#a14c0b]`, `w-16`, `h-16`)}>{`#a14c0b`}</div>
          <div className={join(`bg-[#6d543e]`, `w-16`, `h-16`)}>{`#6d543e`}</div>
          <div className={join(`bg-[#b7daf2]`, `w-16`, `h-16`)}>{`#b7daf2`}</div>
        </div>
      </div>
      <div>
        <Carousel items={data.items} />
      </div>
    </>
  )
}
export default HomePage
