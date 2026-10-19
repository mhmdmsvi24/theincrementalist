import { NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function GET(request: NextRequest): Promise<NextResponse> {
  try {
    const posts = await prisma.post.findMany({
      where: { status: "PUBLISHED" },
      select: { tags: true },
    })

    const counts = posts
      .flatMap((post) => post.tags)
      .reduce<Record<string, number>>((acc, tag) => {
        acc[tag] = (acc[tag] ?? 0) + 1
        return acc
      }, {})

    console.log(counts)
    return NextResponse.json({
      counts,
    })
  } catch (error) {
    console.error("GET /api/posts/topics failed:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
