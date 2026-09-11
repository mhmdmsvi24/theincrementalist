// import HAndS from "@/components/HAndS"
import Header from "@/components/Header"
import LandingSection from "@/components/LandingSection"
import Masonry from "@/components/Masonry"
import type { BlogPost } from "@/types/blog"
// import LandingSection from "@/components/LandingSection"

const items: BlogPost[] = [
  {
    id: "1",
    slug: "understanding-react-server-components",
    title: "Understanding React Server Components",
    description:
      "A practical introduction to React Server Components and how they change the way we build modern applications.",
    image: "https://picsum.photos/id/1015/800/1000",
    tag: "React",
    date: "Sep 11, 2026",
    height: 480,
  },
  {
    id: "2",
    slug: "designing-better-apis",
    title: "Designing Better APIs",
    description:
      "The principles behind APIs that remain predictable, maintainable, and pleasant to work with as your application grows.",
    image: "https://picsum.photos/id/1/800/600",
    tag: "Backend",
    date: "Sep 9, 2026",
    height: 340,
  },
  {
    id: "3",
    slug: "why-typescript-matters",
    title: "Why TypeScript Actually Matters",
    description:
      "Types are more than autocomplete. Here's how TypeScript can improve architecture, refactoring, and team communication.",
    image: "https://picsum.photos/id/180/800/900",
    tag: "TypeScript",
    date: "Sep 7, 2026",
    height: 420,
  },
  {
    id: "4",
    slug: "the-anatomy-of-a-good-database",
    title: "The Anatomy of a Good Database",
    description:
      "A look at schemas, relationships, indexes, constraints, and the decisions that make databases easier to evolve.",
    image: "https://picsum.photos/id/20/800/1100",
    tag: "Database",
    date: "Sep 5, 2026",
    height: 520,
  },
  {
    id: "5",
    slug: "learning-to-think-in-systems",
    title: "Learning to Think in Systems",
    description:
      "Software engineering becomes easier when you stop thinking about isolated functions and start thinking about systems.",
    image: "https://picsum.photos/id/48/800/700",
    tag: "Engineering",
    date: "Sep 3, 2026",
    height: 370,
  },
  {
    id: "6",
    slug: "what-makes-a-great-product",
    title: "What Makes a Great Product?",
    description:
      "Features don't make a product great. Understanding the problem, the customer, and the value proposition does.",
    image: "https://picsum.photos/id/60/800/950",
    tag: "Product",
    date: "Sep 1, 2026",
    height: 450,
  },
  {
    id: "7",
    slug: "javascript-event-loop",
    title: "The JavaScript Event Loop",
    description:
      "Promises, microtasks, macrotasks, and the event loop explained without hiding behind unnecessary abstractions.",
    image: "https://picsum.photos/id/96/800/800",
    tag: "JavaScript",
    date: "Aug 29, 2026",
    height: 400,
  },
  {
    id: "8",
    slug: "building-a-personal-knowledge-system",
    title: "Building a Personal Knowledge System",
    description:
      "A practical approach to collecting, organizing, and actually using the information you learn.",
    image: "https://picsum.photos/id/119/800/1050",
    tag: "Productivity",
    date: "Aug 27, 2026",
    height: 500,
  },
  {
    id: "9",
    slug: "from-idea-to-mvp",
    title: "From Idea to MVP",
    description:
      "How to turn an interesting idea into something people can actually use without spending six months building it.",
    image: "https://picsum.photos/id/160/800/650",
    tag: "Startup",
    date: "Aug 24, 2026",
    height: 330,
  },
  {
    id: "10",
    slug: "css-that-scales",
    title: "CSS That Scales",
    description:
      "Patterns for keeping styles maintainable when a small project inevitably becomes a much larger application.",
    image: "https://picsum.photos/id/201/800/1150",
    tag: "CSS",
    date: "Aug 22, 2026",
    height: 540,
  },
  {
    id: "11",
    slug: "the-real-cost-of-technical-debt",
    title: "The Real Cost of Technical Debt",
    description:
      "Technical debt isn't automatically bad. The problem begins when you stop knowing which debt you have taken on.",
    image: "https://picsum.photos/id/225/800/850",
    tag: "Engineering",
    date: "Aug 20, 2026",
    height: 390,
  },
  {
    id: "12",
    slug: "how-git-actually-works",
    title: "How Git Actually Works",
    description:
      "Commits, trees, blobs, branches, and references. A look underneath the commands most developers use every day.",
    image: "https://picsum.photos/id/250/800/1000",
    tag: "Tools",
    date: "Aug 18, 2026",
    height: 470,
  },
  {
    id: "13",
    slug: "building-products-users-want",
    title: "Building Products People Actually Want",
    description:
      "Why validation matters, what customer interviews can reveal, and why your first idea is probably wrong.",
    image: "https://picsum.photos/id/274/800/750",
    tag: "Business",
    date: "Aug 15, 2026",
    height: 350,
  },
  {
    id: "14",
    slug: "clean-code-is-not-the-goal",
    title: "Clean Code Is Not the Goal",
    description:
      "Readable code matters, but shipping useful software matters more. Understanding where to draw the line is the real skill.",
    image: "https://picsum.photos/id/292/800/1200",
    tag: "Opinion",
    date: "Aug 13, 2026",
    height: 550,
  },
  {
    id: "15",
    slug: "understanding-http",
    title: "Understanding HTTP",
    description:
      "Requests, responses, headers, status codes, caching, cookies, and the protocol underneath almost every modern web application.",
    image: "https://picsum.photos/id/314/800/900",
    tag: "Web",
    date: "Aug 10, 2026",
    height: 430,
  },
  {
    id: "16",
    slug: "the-business-model-canvas",
    title: "The Business Model Canvas",
    description:
      "A practical walkthrough of the nine building blocks that describe how a business creates and captures value.",
    image: "https://picsum.photos/id/326/800/680",
    tag: "Strategy",
    date: "Aug 8, 2026",
    height: 320,
  },
  {
    id: "17",
    slug: "why-software-projects-fail",
    title: "Why Software Projects Fail",
    description:
      "Most project failures aren't caused by difficult algorithms. They are usually caused by unclear requirements and poor decisions.",
    image: "https://picsum.photos/id/338/800/1080",
    tag: "Management",
    date: "Aug 6, 2026",
    height: 510,
  },
  {
    id: "18",
    slug: "a-practical-guide-to-sql",
    title: "A Practical Guide to SQL",
    description:
      "The SQL concepts you should understand before reaching for an ORM or hiding your database behind an abstraction.",
    image: "https://picsum.photos/id/342/800/820",
    tag: "SQL",
    date: "Aug 4, 2026",
    height: 380,
  },
  {
    id: "19",
    slug: "frontend-performance",
    title: "Frontend Performance Without the Cargo Cult",
    description:
      "Performance optimization should start with measurements, not a random checklist of things someone told you to optimize.",
    image: "https://picsum.photos/id/366/800/1000",
    tag: "Frontend",
    date: "Aug 2, 2026",
    height: 460,
  },
  {
    id: "20",
    slug: "learning-programming-the-hard-way",
    title: "Learning Programming the Hard Way",
    description:
      "Tutorials are useful, but struggling through problems yourself is where much of the actual learning happens.",
    image: "https://picsum.photos/id/390/800/700",
    tag: "Learning",
    date: "Jul 30, 2026",
    height: 360,
  },
  {
    id: "21",
    slug: "monolith-vs-microservices",
    title: "Monolith vs Microservices",
    description:
      "Microservices solve real problems, but they also create new ones. Here's when the complexity is actually worth it.",
    image: "https://picsum.photos/id/401/800/950",
    tag: "Architecture",
    date: "Jul 28, 2026",
    height: 490,
  },
  {
    id: "22",
    slug: "how-to-read-technical-books",
    title: "How to Read Technical Books",
    description:
      "Reading isn't the same as learning. A deliberate process can turn a technical book into actual usable knowledge.",
    image: "https://picsum.photos/id/433/800/1150",
    tag: "Learning",
    date: "Jul 25, 2026",
    height: 530,
  },
  {
    id: "23",
    slug: "building-a-developer-portfolio",
    title: "Building a Developer Portfolio",
    description:
      "Your portfolio should demonstrate how you think and what you can build, not simply list technologies you've touched.",
    image: "https://picsum.photos/id/445/800/780",
    tag: "Career",
    date: "Jul 22, 2026",
    height: 410,
  },
  {
    id: "24",
    slug: "the-art-of-saying-no",
    title: "The Art of Saying No",
    description:
      "Every project has limited time and resources. Knowing what not to build can be more valuable than knowing what to build.",
    image: "https://picsum.photos/id/452/800/1050",
    tag: "Product",
    date: "Jul 19, 2026",
    height: 440,
  },
]

export default function Page() {
  return (
    <main>
      <Header />
      <div className="relative min-h-50">
        <LandingSection className="flex flex-col gap-10">
          {/*<h2 className="text-3xl font-semibold">از ایده تا اجرا</h2>*/}
          <Masonry
            items={items}
            ease="power3.out"
            duration={0.6}
            stagger={0.05}
            animateFrom="bottom"
            scaleOnHover
            hoverScale={0.95}
            blurToFocus
            colorShiftOnHover={false}
          />
        </LandingSection>
      </div>
    </main>
  )
}

{
  /*<LandingSection>
  <HAndS
    headline="وقتت با دوره های تموم نشدنی تلف نکن، اینجا سریع یادمیگیری، میسازی و لانچ میکنی"
    subhead="برای خودت و زمانی که میذاری ارزش قائل باش، فرصت ها محدوده"
  />
</LandingSection>
<LandingSection>
  <HAndS
    headline="محتوای رایگان خالی از هر چرت و پرتی، مبانی یادمیگیری، خیلی سریع!"
    subhead="مهارت و محتوای مورد نیازت بدون اتلاف ساعت ها و حتی روزها یادمیگیری و بهشون تسلط پیدا میکنی"
  />
</LandingSection>*/
}
