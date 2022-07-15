import { PrismaClient } from "@prisma/client"
import type { Item } from "@prisma/client"
import bcrypt from "bcryptjs"

const prisma = new PrismaClient()

async function seed() {
  const email = `rachel@remix.run`

  // cleanup the existing database
  await prisma.user.delete({ where: { email } }).catch(() => {
    // no worries if it doesn't exist yet
  })

  const hashedPassword = await bcrypt.hash(`rachelIsCool`, 10)

  const user = await prisma.user.create({
    data: {
      email,
      password: {
        create: {
          hash: hashedPassword,
        },
      },
    },
  })

  await prisma.note.create({
    data: {
      title: `My first note`,
      body: `Hello, world!`,
      userId: user.id,
    },
  })

  await prisma.note.create({
    data: {
      title: `My second note`,
      body: `Hello, world!`,
      userId: user.id,
    },
  })

  await Promise.all(
    getItems().map((item) => {
      return prisma.item.create({ data: item })
    }),
  )

  console.log(`Database has been seeded. 🌱`)
}

const getItems = (): Item[] => {
  return [
    {
      id: `cl2pcwfus01059ooyle0i7l1r`,
      name: `Wool Scarf`,
      description: `A 6 foot scarf made of wool`,
      price: 5000,
      imagePath: `/images/wool_scarf`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: `cl2pcviv900719ooyfr13urm4`,
      name: `Woven Cotton Blanket`,
      description: `A 6 x 4 foot blanket made of cotton`,
      price: 7500,
      imagePath: `/images/cotton_blanket`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: `cl2pcvepo00489ooy1y7176bb`,
      name: `Jellyfish `,
      description: `A super duper cute jelly`,
      price: 100000,
      imagePath: `/images/jelly`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: `cl2pcur0g00199ooynzsn6q5f`,
      name: `Starfish `,
      description: `A super duper cute star`,
      price: 100000,
      imagePath: `/images/star`,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ]
}

seed()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
