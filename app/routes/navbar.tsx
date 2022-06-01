import type { FC } from "react"

import { Form } from "remix"

import NavButton from "~/components/NavButton"
import { centered, header } from "~/styles/tailwind_templates"
import { join, useOptionalUser } from "~/utils"
const ROUTES = [
  {
    to: `/`,
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
const USER_ROUTES = {
  login: {
    to: `/login`,
    text: `login`,
  },
  logout: {
    to: `/logout`,
    text: `Logout`,
  },
}
type UserButtonProps = {
  width: number
}
const UserButton: FC<UserButtonProps> = ({ width }) => {
  const user = useOptionalUser()
  const shared = [`fixed`, `sm:static`, `top-2`, `right-6`]
  if (user) {
    return (
      <div className={join(...shared, `ml-auto`, `sm:mr-2`, `shrink-0`)}>
        <Form action="/logout" method="post" className={join(`ml-auto`)}>
          <button
            type="submit"
            className={join(
              `transition`,
              `ease-in-out`,
              `py-3`,
              `px-4`,
              `w-1/${width}`,
              `rounded`,
              `shrink-0`,
              `bg-[#a14c0b]`,
              `hover:bg-[#b7daf2]`,
              `active:bg-[#a07e39]`,
              `duration-500`,
            )}
          >
            Log Out
          </button>
        </Form>
      </div>
    )
  }
  return (
    <div className={join(...shared)}>
      <NavButton
        key={USER_ROUTES.login.to}
        to={USER_ROUTES.login.to}
        text={USER_ROUTES.login.text}
        width={width}
      />
    </div>
  )
}
const NavBar: FC = () => {
  const container = [
    `sticky`,
    `top-0`,
    `w-full`,
    `bg-[#71816e]`,
    `py-3`,
    `px-1`,
    `sm:px-4`,
    `gap-4`,
    `sm:gap-0`,
    `md:gap-4`,
    `flex-col`,
    `sm:flex-row`,
  ]

  return (
    <div className={join(...container, ...centered)}>
      <h1
        className={join(
          ...header,
          `mr-auto`,
          `ml-3`,
          `sm:ml-0`,
          `animate-fade-slow`,
        )}
      >
        C.C.Moon.Craft
      </h1>
      <div className={join(...centered, `mx-auto`)}>
        {ROUTES.map((route) => {
          return (
            <NavButton
              key={route.to}
              to={route.to}
              text={route.text}
              width={ROUTES.length + Object.keys(USER_ROUTES).length}
            />
          )
        })}
      </div>
      <UserButton width={ROUTES.length + Object.keys(USER_ROUTES).length} />
    </div>
  )
}

export default NavBar
