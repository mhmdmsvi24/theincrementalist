import { prisma } from "@/lib/prisma"
import { PostStatus, Prisma } from "@/app/generated/prisma/client"
import { NextRequest, NextResponse } from "next/server"

export const dynamic = "force-dynamic"

const DEFAULT_LIMIT = 9
const MAX_LIMIT = 50

export async function GET(request: NextRequest) {
  try {
    const params = request.nextUrl.searchParams

    const page = Number(params.get("page") ?? 1)
    const limit = Number(params.get("limit") ?? DEFAULT_LIMIT)
    const q = params.get("q")?.trim()
    const category = params.get("category")?.trim()
    const tag = params.get("tag")?.trim()

    if (
      !Number.isInteger(page) ||
      page < 1 ||
      !Number.isInteger(limit) ||
      limit < 1 ||
      limit > MAX_LIMIT
    ) {
      return NextResponse.json(
        { error: "Invalid pagination parameters" },
        { status: 400 }
      )
    }

    const where: Prisma.PostWhereInput = {
      status: PostStatus.PUBLISHED,
      publishedAt: { not: null },
      ...(q && {
        OR: [
          { title: { contains: q, mode: "insensitive" } },
          { excerpt: { contains: q, mode: "insensitive" } },
        ],
      }),
      ...(category && { category }),
      ...(tag && { tags: { has: tag } }),
    }

    const [posts, total] = await prisma.$transaction([
      prisma.post.findMany({
        where,
        orderBy: [
          { publishedAt: "desc" },
          { id: "desc" },
        ],
        skip: (page - 1) * limit,
        take: limit,
        select: {
          id: true,
          slug: true,
          title: true,
          excerpt: true,
          image: true,
          category: true,
          tags: true,
          readTime: true,
          publishedAt: true,
        },
      }),
      prisma.post.count({ where }),
    ])

    return NextResponse.json({
      data: posts,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNextPage: page * limit < total,
        hasPreviousPage: page > 1,
      },
    })
  } catch (error) {
    console.error("GET /api/posts failed:", error)

    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
