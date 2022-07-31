import type { FC } from "react"
import React from "react"

import type { Item } from "@prisma/client"

import LeftArrow from "~/components/SVGR/LeftArrow"
import RightArrow from "~/components/SVGR/RightArrow"
import { join } from "~/utils"

import CarouselItem from "./CarouselItem"
type CarouselProps = {
  items: Item[]
}
const Carousel: FC<CarouselProps> = ({ items }) => {
  const [current, setCurrent] = React.useState(0)

  const nextSlide = () => {
    setCurrent(current === items.length - 1 ? 0 : current + 1)
  }

  const prevSlide = () => {
    setCurrent(current === 0 ? items.length - 1 : current - 1)
  }

  if (!Array.isArray(items) || items.length <= 0) {
    return null
  }

  const containerStyles = [`w-2/3`, `h-[200px]`, `mr-2.5`, `bg-[b7daf2]`]
  const hiddenItemStyles = [`hidden`]
  const showingItemStyles = [`block`]
  return (
    <>
      <button type="button" onClick={prevSlide}>
        <LeftArrow />
      </button>
      {current}
      <button type="button" onClick={nextSlide}>
        <RightArrow />
      </button>
      <div className={join(...containerStyles)}>
        {items.map((i, index) => {
          return (
            <CarouselItem
              key={i.id}
              item={i}
              styles={index === current ? showingItemStyles : hiddenItemStyles}
            />
          )
        })}
      </div>
    </>
  )
}

export default Carousel
