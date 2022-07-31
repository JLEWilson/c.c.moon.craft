import type { FC } from "react"
import React from "react"

import type { Item } from "@prisma/client"
type CarouselItemProps = {
  item: Item
}
const CarouselItem: FC<CarouselItemProps> = ({ item }) => {
  const styles = [`block `, `text-center`, `h-[200px]`]
  return (
    <div>
      <h1>{item.name}</h1>
      <h2>{item.price}</h2>
      {item.imagePath && <img src={item.imagePath} />}
      <p>{item.description}</p>
    </div>
  )
}

export default CarouselItem
