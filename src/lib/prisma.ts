import { PrismaClient } from "../generated/prisma/client.js"// Adjust if using a custom output path

import { neonConfig } from '@neondatabase/serverless'
import { PrismaNeon } from '@prisma/adapter-neon'
import ws from 'ws'

// Required for Node.js environments (like Next.js dev server) to support WebSockets
neonConfig.webSocketConstructor = ws

const prismaClientSingleton = () => {

  
  // 2. Initialize the Neon adapter with the pool
  const adapter = new PrismaNeon({
    connectionString: process.env.DATABASE_URL
  })
  
  // 3. Pass the adapter to PrismaClient
  return new PrismaClient({ adapter })
}

declare const globalThis: {
  prismaGlobal: ReturnType<typeof prismaClientSingleton>;
} & typeof global;

const prisma = globalThis.prismaGlobal ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== 'production') globalThis.prismaGlobal = prisma