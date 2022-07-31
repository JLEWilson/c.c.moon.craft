import type { FC } from "react"
import React from "react"

import type { Item } from "@prisma/client"

import { join } from "~/utils"

type CarouselItemProps = {
  item: Item
  styles: string[]
}
const CarouselItem: FC<CarouselItemProps> = ({ item, styles }) => {
  const baseStyles = [`block `, `text-center`, `h-[200px]`]
  return (
    <div className={join(...baseStyles, ...styles)}>
      <h1>{item.name}</h1>
      <h2>{item.price}</h2>
      {item.imagePath && <img src={item.imagePath} />}
      <p>{item.description}</p>
    </div>
  )
}

export default CarouselItem
