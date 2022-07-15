/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import type { Item } from "@prisma/client"

import { prisma } from "~/db.server"

export type { Item }

export async function getItem(id: Item[`id`]) {
  return prisma.item.findUnique({ where: { id } })
}
