export interface BlogPost {
  id: number
  slug: string
  title: string
  excerpt: string
  image: string
  category: string
  tags: string[]
  readTime: number
  publishedAt: string | null
}

export interface BlogPostsResponse {
  data: BlogPost[]
  pagination: {
    page: number
    limit: number
    total: number
    totalPages: number
    hasNextPage: boolean
    hasPreviousPage: boolean
  }
}
