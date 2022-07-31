import type { FC } from "react"
import React from "react"

import type { Item } from "@prisma/client"

import { join } from "~/utils"

import CarouselItem from "./CarouselItem"
type CarouselProps = {
  items: Item[]
}
const Carousel: FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = React.useState(0)

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1)
  }

  if (!Array.isArray(items) || items.length <= 0) {
    return null
  }

  const containerStyles = [`w-2/3`, `h-[200px]`, `mr-2.5`, `bg-[b7daf2]`]

  return (
    <div className={join(...containerStyles)}>
      {items.map((i) => (
        <CarouselItem key={i.id} item={i} />
      ))}
    </div>
  )
}

export default Carousel
