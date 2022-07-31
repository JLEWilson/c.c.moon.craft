import type { FC } from "react"

import {
  json,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix"
import type { LinksFunction, MetaFunction, LoaderFunction } from "remix"

import NavBar from "./components/NavBar"
import { getUser } from "./session.server"
import tailwindStylesheetUrl from "./styles/tailwind.css"
import { join } from "./utils"

export const links: LinksFunction = () => {
  return [{ rel: `stylesheet`, href: tailwindStylesheetUrl }]
}

export const meta: MetaFunction = () => ({
  charset: `utf-8`,
  title: `Remix Notes`,
  viewport: `width=device-width,initial-scale=1`,
})

type LoaderData = {
  user: Awaited<ReturnType<typeof getUser>>
}

export const loader: LoaderFunction = async ({ request }) => {
  return json<LoaderData>({
    user: await getUser(request),
  })
}

const App: FC = () => {
  return (
    <html lang="en" className="h-full">
      <head>
        <Meta />
        <Links />
      </head>
      <body className={join(`h-auto`, `text-[#fcf9e6]`, `bg-[#6d543e]`)}>
        <NavBar />
        <div>
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export default App
