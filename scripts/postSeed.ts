import { PrismaClient, PostStatus } from "../app/generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
})

const prisma = new PrismaClient({ adapter })

const posts = [
  {
    slug: "business-analysis-from-zero",
    title: "Business Analysis: A Practical Starting Point",
    excerpt:
      "Understand business needs, identify problems, and turn stakeholder expectations into actionable requirements.",
    image: "/images/blog/business-analysis.jpg",
    category: "Business Analysis",
    tags: ["BA", "BABOK", "Requirements"],
    readTime: 7,
  },
  {
    slug: "business-process-engineering",
    title: "Business Process Engineering: Find the Bottleneck",
    excerpt:
      "Learn to map workflows, identify constraints, and redesign processes around measurable outcomes.",
    image: "/images/blog/process-engineering.jpg",
    category: "Business Analysis",
    tags: ["BPE", "BPM", "Optimization"],
    readTime: 8,
  },
  {
    slug: "introduction-to-bpm",
    title: "Business Process Management Explained",
    excerpt:
      "Discover how process modeling, execution, monitoring, and continuous improvement fit together.",
    image: "/images/blog/bpm.jpg",
    category: "Business Analysis",
    tags: ["BPM", "Processes", "Management"],
    readTime: 6,
  },
  {
    slug: "find-the-real-business-problem",
    title: "Are You Solving the Right Problem?",
    excerpt:
      "Separate symptoms from root causes before spending time and money on a solution.",
    image: "/images/blog/root-cause.jpg",
    category: "Business Analysis",
    tags: ["Problem Solving", "Analysis", "Strategy"],
    readTime: 5,
  },
  {
    slug: "kpi-design-for-teams",
    title: "Design KPIs That Actually Matter",
    excerpt:
      "Choose metrics that reveal performance and encourage better decisions instead of vanity reporting.",
    image: "/images/blog/kpi.jpg",
    category: "Business Analysis",
    tags: ["KPI", "Metrics", "Teams"],
    readTime: 7,
  },
  {
    slug: "stakeholder-analysis-guide",
    title: "Stakeholder Analysis Without the Guesswork",
    excerpt:
      "Map influence, expectations, and communication needs to keep complex initiatives aligned.",
    image: "/images/blog/stakeholders.jpg",
    category: "Business Analysis",
    tags: ["Stakeholders", "BABOK", "Communication"],
    readTime: 6,
  },
  {
    slug: "user-stories-that-work",
    title: "Write User Stories That Developers Can Use",
    excerpt:
      "Connect user needs to clear acceptance criteria and outcomes your team can verify.",
    image: "/images/blog/user-stories.jpg",
    category: "Technology",
    tags: ["Agile", "Requirements", "Development"],
    readTime: 6,
  },
  {
    slug: "root-cause-analysis",
    title: "Five Whys: A Simple Tool for Root Cause Analysis",
    excerpt:
      "Use structured questioning to investigate recurring problems without jumping to conclusions.",
    image: "/images/blog/five-whys.jpg",
    category: "Productivity",
    tags: ["Problem Solving", "Processes", "Analysis"],
    readTime: 4,
  },
  {
    slug: "scrum-fundamentals",
    title: "Scrum Fundamentals for Business Analysts",
    excerpt:
      "Understand the Scrum accountabilities, events, artifacts, and how analysts contribute to delivery.",
    image: "/images/blog/scrum.jpg",
    category: "Technology",
    tags: ["Scrum", "Agile", "Teams"],
    readTime: 8,
  },
  {
    slug: "scrumban-practical-guide",
    title: "Scrumban: Combining Structure With Flow",
    excerpt:
      "Learn when to keep Scrum's planning cadence and use Kanban practices to expose bottlenecks.",
    image: "/images/blog/scrumban.jpg",
    category: "Technology",
    tags: ["Scrumban", "Kanban", "Agile"],
    readTime: 9,
  },
  {
    slug: "kanban-work-in-progress",
    title: "Why Limiting Work in Progress Improves Flow",
    excerpt:
      "See how WIP limits expose overloaded teams and help work reach completion sooner.",
    image: "/images/blog/kanban.jpg",
    category: "Productivity",
    tags: ["Kanban", "WIP", "Teams"],
    readTime: 5,
  },
  {
    slug: "measure-process-efficiency",
    title: "Measure Process Efficiency With Cycle Time",
    excerpt:
      "Use cycle time and throughput to understand delivery performance and identify delays.",
    image: "/images/blog/cycle-time.jpg",
    category: "Business Analysis",
    tags: ["BPM", "Metrics", "Kanban"],
    readTime: 7,
  },
  {
    slug: "mvp-validation",
    title: "Build an MVP to Learn, Not to Impress",
    excerpt:
      "Design the smallest useful experiment that tests whether your startup assumption is correct.",
    image: "/images/blog/mvp.jpg",
    category: "Startups",
    tags: ["MVP", "Validation", "Product"],
    readTime: 6,
  },
  {
    slug: "tam-sam-som",
    title: "TAM, SAM, and SOM: Estimate Your Market",
    excerpt:
      "Turn a broad market opportunity into a realistic estimate of the customers you can serve.",
    image: "/images/blog/tam-sam-som.jpg",
    category: "Startups",
    tags: ["Market Research", "Strategy", "Startups"],
    readTime: 7,
  },
  {
    slug: "product-market-fit-signals",
    title: "How to Recognize Early Product-Market Fit",
    excerpt:
      "Look beyond downloads and sign-ups to find evidence that customers genuinely value your product.",
    image: "/images/blog/product-market-fit.jpg",
    category: "Startups",
    tags: ["Product", "Customers", "Growth"],
    readTime: 8,
  },
  {
    slug: "customer-journey-mapping",
    title: "Customer Journey Mapping for Better Conversions",
    excerpt:
      "Identify friction across discovery, onboarding, activation, retention, and repeat purchase.",
    image: "/images/blog/customer-journey.jpg",
    category: "Business Development",
    tags: ["Customer Journey", "Conversion", "Growth"],
    readTime: 7,
  },
  {
    slug: "sales-funnel-metrics",
    title: "Understand Your Sales Funnel With Data",
    excerpt:
      "Track stage conversion rates to discover where potential customers drop out of your funnel.",
    image: "/images/blog/sales-funnel.jpg",
    category: "Business Development",
    tags: ["Sales", "Conversion", "Metrics"],
    readTime: 6,
  },
  {
    slug: "customer-segmentation",
    title: "Customer Segmentation Beyond Demographics",
    excerpt:
      "Group customers by behavior, needs, and value to make your marketing and sales more relevant.",
    image: "/images/blog/segmentation.jpg",
    category: "Business Development",
    tags: ["CRM", "Segmentation", "Marketing"],
    readTime: 7,
  },
  {
    slug: "unit-economics",
    title: "Unit Economics: Know What Each Customer Costs",
    excerpt:
      "Connect acquisition cost, customer lifetime value, and contribution margin to business sustainability.",
    image: "/images/blog/unit-economics.jpg",
    category: "Finance",
    tags: ["Unit Economics", "CAC", "LTV"],
    readTime: 8,
  },
  {
    slug: "cash-flow-for-startups",
    title: "Cash Flow: Why Profitable Businesses Still Run Out of Money",
    excerpt:
      "Understand the difference between accounting profit and having enough cash to meet obligations.",
    image: "/images/blog/cash-flow.jpg",
    category: "Finance",
    tags: ["Cash Flow", "Startups", "Finance"],
    readTime: 6,
  },
  {
    slug: "break-even-analysis",
    title: "Break-Even Analysis for Better Decisions",
    excerpt:
      "Calculate how many units you need to sell before revenue covers your fixed and variable costs.",
    image: "/images/blog/break-even.jpg",
    category: "Finance",
    tags: ["Break-Even", "Finance", "Planning"],
    readTime: 5,
  },
  {
    slug: "prioritization-frameworks",
    title: "Prioritize Work With Impact and Effort",
    excerpt:
      "Compare competing initiatives using a practical framework without pretending every estimate is exact.",
    image: "/images/blog/prioritization.jpg",
    category: "Productivity",
    tags: ["Prioritization", "Strategy", "Planning"],
    readTime: 5,
  },
  {
    slug: "deep-work-for-builders",
    title: "Deep Work for People Who Build Things",
    excerpt:
      "Create focused work sessions that protect attention while keeping collaboration and delivery moving.",
    image: "/images/blog/deep-work.jpg",
    category: "Productivity",
    tags: ["Focus", "Productivity", "Habits"],
    readTime: 6,
  },
  {
    slug: "automation-process-first",
    title: "Before Automating a Process, Fix It",
    excerpt:
      "Why automating a broken workflow can make inefficiency faster, more expensive, and harder to see.",
    image: "/images/blog/automation.jpg",
    category: "Technology",
    tags: ["Automation", "BPE", "Optimization"],
    readTime: 7,
  },
]

async function main() {
  const now = new Date()

  for (const [index, post] of posts.entries()) {
    const publishedAt = new Date(now)
    publishedAt.setDate(now.getDate() - index * 3)

    await prisma.post.upsert({
      where: { slug: post.slug },
      update: {
        ...post,
        status: PostStatus.PUBLISHED,
        publishedAt,
      },
      create: {
        ...post,
        status: PostStatus.PUBLISHED,
        publishedAt,
      },
    })
  }

  console.log(`Seeded ${posts.length} blog posts.`)
}

main()
  .catch((error) => {
    console.error("Failed to seed blog posts:", error)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
