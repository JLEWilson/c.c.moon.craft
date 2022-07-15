/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { Item } from "@prisma/client"

import { prisma } from "~/db.server"

export type { Item }

export const getItem = async ({ id }: Pick<Item, `id`>) => {
  return prisma.item.findUnique({ where: { id } })
}

export const getAllItems = async () => {
  return prisma.item.findMany()
}

export const createItem = async (
  item: Pick<Item, `description` | `imagePath` | `name` | `price`>,
) => {
  return prisma.item.create({ data: item })
}

export const deleteItem = async ({ id }: Pick<Item, `id`>) => {
  return prisma.item.delete({
    where: { id },
  })
}
