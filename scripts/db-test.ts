// import "dotenv/config"
// import { PrismaClient } from "@/app/generated/prisma/client"
// import { PrismaPg } from "@prisma/adapter-pg"

// const adapter = new PrismaPg({
//   connectionString: process.env.DATABASE_URL!,
// })

// const prisma = new PrismaClient({ adapter })

// try {
//   await prisma.$queryRaw`SELECT 1`
//   console.log("Database connection: OK")
// } finally {
//   await prisma.$disconnect()
// }
