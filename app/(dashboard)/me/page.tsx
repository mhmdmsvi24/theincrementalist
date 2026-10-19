"use client"

import {
  AtSign,
  CalendarDays,
  Check,
  ChevronRight,
  Edit3,
  ExternalLink,
  FileText,
  Heart,
  KeyRound,
  Lock,
  Mail,
  MessageSquare,
  MoreHorizontal,
  Save,
  Send,
  Settings,
  Share2,
  ShieldCheck,
  User,
} from "lucide-react"

import { useState } from "react"

const activities = [
  {
    type: "comment",
    icon: MessageSquare,
    title: "Commented on",
    target: "How to validate a startup idea",
    time: "2 hours ago",
  },
  {
    type: "like",
    icon: Heart,
    title: "Liked",
    target: "The real economics of SaaS",
    time: "Yesterday",
  },
  {
    type: "save",
    icon: Save,
    title: "Saved",
    target: "Business Model Canvas explained",
    time: "2 days ago",
  },
  {
    type: "comment",
    icon: MessageSquare,
    title: "Commented on",
    target: "Product discovery fundamentals",
    time: "4 days ago",
  },
]

const courses = [
  {
    title: "Business Analysis Fundamentals",
    progress: 72,
    lessons: "18 / 25 lessons",
  },
  {
    title: "Product Discovery",
    progress: 41,
    lessons: "9 / 22 lessons",
  },
  {
    title: "Agile & Scrum Fundamentals",
    progress: 23,
    lessons: "5 / 21 lessons",
  },
]

export default function ProfilePage() {
  const [editingProfile, setEditingProfile] = useState(false)

  const [profile, setProfile] = useState({
    name: "Mohammad Mousavi",
    username: "mmd",
    email: "mohammad@example.com",
  })

  return (
    <main className="relative min-h-screen overflow-hidden bg-blog-page text-blog-text-primary">
      {/* Global grid */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, white 1px, transparent 1px),
            linear-gradient(to bottom, white 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-64 top-20 h-150 w-150 rounded-full bg-cyan-500/[0.035] blur-[140px]"
      />

      <div className="relative mx-auto max-w-7xl px-6 py-12 lg:px-8 lg:py-16">
        {/* ================================================================ */}
        {/* HEADER                                                           */}
        {/* ================================================================ */}

        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] tracking-[0.22em] text-blog-accent/70">
            <span className="h-px w-7 bg-cyan-400/50" />
            ACCOUNT / USER_001
          </div>

          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-3xl font-semibold tracking-[-0.03em] text-blog-text-primary sm:text-4xl">
                Welcome back,
                <br />
                <span className="text-blog-subtle">{profile.name}.</span>
              </h1>

              <p className="mt-4 max-w-xl text-sm leading-6 text-blog-subtle">
                Your personal workspace for learning, reading, and building
                better systems.
              </p>
            </div>

            <div className="flex items-center gap-2">
              <button className="flex h-10 items-center gap-2 border border-blog-border-strong bg-white/2 px-4 text-xs text-blog-muted transition hover:border-white/20 hover:text-blog-text-primary">
                <Share2 size={14} />
                Share profile
              </button>

              <button
                onClick={() => setEditingProfile(!editingProfile)}
                className="flex h-10 items-center gap-2 border border-blog-accent-border bg-blog-accent-soft px-4 text-xs text-blog-accent-hover transition hover:border-cyan-300 hover:bg-cyan-400/[0.14]"
              >
                <Edit3 size={14} />
                {editingProfile ? "Done editing" : "Edit profile"}
              </button>
            </div>
          </div>
        </header>

        {/* ================================================================ */}
        {/* PROFILE IDENTITY                                                 */}
        {/* ================================================================ */}

        <section className="relative overflow-hidden border border-blog-border-strong bg-blog-surface-raised">
          {/* Accent line */}
          <div className="h-px bg-linear-to-r from-cyan-400 via-indigo-400 to-transparent" />

          {/* Decorative geometry */}
          <div
            aria-hidden
            className="pointer-events-none absolute right-[-10%] top-0 h-full w-[50%] opacity-20"
          >
            <div className="absolute right-0 top-20 h-px w-full rotate-[-20deg] bg-linear-to-r from-transparent via-cyan-400/30 to-transparent" />

            <div className="absolute right-0 top-32 h-px w-[80%] rotate-[-20deg] bg-linear-to-r from-transparent via-indigo-400/20 to-transparent" />
          </div>

          <div className="relative p-6 lg:p-8">
            <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
              {/* Identity */}
              <div className="flex items-center gap-5">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-cyan-400/30 bg-blog-page font-mono text-2xl font-semibold text-blog-accent">
                  MM
                </div>

                <div>
                  <div className="flex flex-wrap items-center gap-3">
                    <h2 className="text-2xl font-semibold">
                      {profile.name}
                    </h2>

                    <span className="border border-cyan-400/20 bg-cyan-400/5 px-2 py-1 font-mono text-[9px] tracking-[0.15em] text-blog-accent">
                      MEMBER
                    </span>
                  </div>

                  <p className="mt-1 font-mono text-xs text-blog-dim">
                    @{profile.username}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-x-5 gap-y-2 font-mono text-[10px] text-blog-dim">
                    <span className="flex items-center gap-2">
                      <Mail size={12} />
                      {profile.email}
                    </span>

                    <span className="flex items-center gap-2">
                      <CalendarDays size={12} />
                      JOINED SEP 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Social */}
              <div className="flex gap-2">
                <SocialButton icon={Send} label="Telegram" />
                <SocialButton icon={Mail} label="Email" />
              </div>
            </div>
          </div>
        </section>

        {/* ================================================================ */}
        {/* STATS                                                            */}
        {/* ================================================================ */}

        <section className="grid grid-cols-2 border-x border-b border-blog-border-strong md:grid-cols-4">
          <Stat value="24" label="Posts read" />
          <Stat value="18" label="Comments" />
          <Stat value="07" label="Saved posts" />
          <Stat value="03" label="Courses active" />
        </section>

        {/* ================================================================ */}
        {/* MAIN GRID                                                        */}
        {/* ================================================================ */}

        <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* ============================================================ */}
          {/* LEFT COLUMN                                                  */}
          {/* ============================================================ */}

          <div className="space-y-8">
            {/* LEARNING */}
            <DashboardSection
              eyebrow="LEARNING_PROGRESS"
              icon={FileText}
              title="Active courses"
              description="Continue where you left off."
            >
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <div
                    key={course.title}
                    className="group border border-blog-border-strong bg-blog-page p-5 transition hover:border-white/20"
                  >
                    <div className="flex items-start justify-between gap-5">
                      <div>
                        <div className="mb-2 font-mono text-[9px] tracking-[0.18em] text-blog-faint">
                          COURSE_{String(index + 1).padStart(2, "0")}
                        </div>

                        <h3 className="text-sm font-medium text-slate-200">
                          {course.title}
                        </h3>

                        <p className="mt-1 text-xs text-blog-dim">
                          {course.lessons}
                        </p>
                      </div>

                      <span className="font-mono text-xs text-blog-accent">
                        {String(course.progress).padStart(2, "0")}%
                      </span>
                    </div>

                    <div className="mt-5 h-px bg-slate-800">
                      <div
                        className="h-full bg-cyan-400 transition-all"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="mt-4 flex justify-end">
                      <button className="flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-blog-dim transition hover:text-blog-accent">
                        Continue
                        <ChevronRight size={12} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </DashboardSection>

            {/* PROFILE */}
            <DashboardSection
              eyebrow="PROFILE"
              icon={User}
              title="Profile information"
              description="Your public account information."
            >
              {editingProfile ? (
                <div className="grid gap-5 md:grid-cols-2">
                  <InputField
                    label="Name"
                    value={profile.name}
                    onChange={(value) =>
                      setProfile({ ...profile, name: value })
                    }
                  />

                  <InputField
                    label="Username"
                    value={profile.username}
                    onChange={(value) =>
                      setProfile({ ...profile, username: value })
                    }
                  />

                  <div className="md:col-span-2">
                    <InputField
                      label="Email"
                      value={profile.email}
                      disabled
                    />
                  </div>

                  <div className="flex justify-end md:col-span-2">
                    <button
                      onClick={() => setEditingProfile(false)}
                      className="flex h-10 items-center gap-2 border border-blog-accent-border bg-blog-accent-soft px-5 text-xs text-blog-accent-hover transition hover:bg-cyan-400/[0.14]"
                    >
                      <Check size={14} />
                      Save changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-x-8 gap-y-7 md:grid-cols-2">
                  <InfoField label="Full name" value={profile.name} />
                  <InfoField
                    label="Username"
                    value={`@${profile.username}`}
                  />
                  <InfoField label="Email" value={profile.email} />
                  <InfoField
                    label="Member since"
                    value="September 2026"
                  />
                </div>
              )}
            </DashboardSection>

            {/* SOCIAL */}
            <DashboardSection
              eyebrow="PUBLIC_LINKS"
              icon={ExternalLink}
              title="Social profiles"
              description="Links displayed on your public profile."
            >
              <div className="space-y-2">
                <SocialInput
                  icon={Send}
                  label="Telegram"
                  value="t.me/mmd"
                />

                <SocialInput
                  icon={AtSign}
                  label="Email"
                  value={profile.email}
                />
              </div>

              <button className="mt-5 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-blog-accent transition hover:text-blog-accent-hover">
                <span className="text-base">+</span>
                Add another profile
              </button>
            </DashboardSection>
          </div>

          {/* ============================================================ */}
          {/* RIGHT COLUMN                                                 */}
          {/* ============================================================ */}

          <div className="space-y-8">
            {/* ACTIVITY */}
            <DashboardSection
              eyebrow="ACTIVITY_LOG"
              icon={MoreHorizontal}
              title="Recent activity"
              description="Your latest interactions."
            >
              <div>
                {activities.map((activity, index) => {
                  const Icon = activity.icon

                  return (
                    <div
                      key={index}
                      className="flex gap-3 border-b border-white/5 py-4 last:border-0"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-blog-border-strong bg-blog-page text-blog-dim">
                        <Icon size={13} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs leading-5 text-blog-subtle">
                          {activity.title}{" "}
                          <span className="text-blog-text-secondary">
                            {activity.target}
                          </span>
                        </p>

                        <p className="mt-1 font-mono text-[9px] text-blog-faint">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button className="mt-4 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wide text-blog-accent transition hover:text-blog-accent-hover">
                View activity
                <ChevronRight size={12} />
              </button>
            </DashboardSection>

            {/* SECURITY */}
            <DashboardSection
              eyebrow="SECURITY"
              icon={ShieldCheck}
              title="Account security"
              description="Manage your account security."
            >
              <div className="border border-blog-border-strong bg-blog-page p-4">
                <div className="flex items-start gap-3">
                  <Lock size={16} className="mt-0.5 text-blog-subtle" />

                  <div>
                    <h3 className="text-sm font-medium text-blog-text-secondary">
                      Password
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-blog-dim">
                      Keep your account credentials secure.
                    </p>
                  </div>
                </div>

                <button className="mt-4 flex h-9 w-full items-center justify-center gap-2 border border-blog-border-strong font-mono text-[10px] uppercase tracking-wide text-blog-subtle transition hover:border-white/20 hover:text-slate-200">
                  <KeyRound size={13} />
                  Change password
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wide text-emerald-400">
                <Check size={12} />
                System secure
              </div>
            </DashboardSection>

            {/* PUBLIC PROFILE */}
            <DashboardSection
              eyebrow="PUBLIC_PROFILE"
              icon={Share2}
              title="Profile access"
              description="What other members can see."
            >
              <div className="border border-blog-border-strong bg-blog-page p-4">
                <p className="font-mono text-[9px] tracking-wider text-blog-faint">
                  PROFILE_URL
                </p>

                <p className="mt-2 font-mono text-[10px] break-all text-blog-subtle">
                  incrementalist.com/u/{profile.username}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="flex h-9 items-center justify-center gap-2 border border-blog-border-strong font-mono text-[10px] uppercase text-blog-subtle transition hover:border-white/20 hover:text-slate-200">
                    <ExternalLink size={12} />
                    View
                  </button>

                  <button className="flex h-9 items-center justify-center gap-2 border border-blog-border-strong font-mono text-[10px] uppercase text-blog-subtle transition hover:border-white/20 hover:text-slate-200">
                    <Share2 size={12} />
                    Share
                  </button>
                </div>
              </div>
            </DashboardSection>
          </div>
        </div>

        {/* ================================================================ */}
        {/* ACCOUNT FOOTER                                                  */}
        {/* ================================================================ */}

        <footer className="mt-10 flex flex-col justify-between gap-4 border-t border-blog-border-strong pt-6 font-mono text-[10px] uppercase tracking-wide text-blog-faint md:flex-row">
          <span>ACCOUNT_CREATED // SEP_2026</span>

          <button className="flex items-center gap-2 transition hover:text-blog-muted">
            <Settings size={12} />
            Account settings
          </button>
        </footer>
      </div>
    </main>
  )
}

/* ======================================================================== */
/* COMPONENTS                                                              */
/* ======================================================================== */

function DashboardSection({
  eyebrow,
  icon: Icon,
  title,
  description,
  children,
}: {
  eyebrow: string
  icon: React.ElementType
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="border border-blog-border-strong bg-blog-surface-raised">
      <header className="border-b border-blog-border-strong px-5 py-4">
        <div className="mb-1 flex items-center gap-2">
          <Icon size={14} className="text-blog-accent/70" />

          <span className="font-mono text-[9px] tracking-[0.18em] text-blog-accent/60">
            {eyebrow}
          </span>
        </div>

        <h2 className="text-sm font-medium text-slate-200">
          {title}
        </h2>

        <p className="mt-1 text-xs text-blog-dim">
          {description}
        </p>
      </header>

      <div className="p-5">{children}</div>
    </section>
  )
}

function Stat({
  value,
  label,
}: {
  value: string
  label: string
}) {
  return (
    <div className="border-r border-blog-border-strong bg-[#0f172a] px-5 py-5 last:border-r-0">
      <div className="font-mono text-xl font-medium text-slate-200">
        {value}
      </div>

      <div className="mt-1 font-mono text-[9px] tracking-[0.15em] text-blog-faint uppercase">
        {label}
      </div>
    </div>
  )
}

function InfoField({
  label,
  value,
}: {
  label: string
  value: string
}) {
  return (
    <div>
      <p className="font-mono text-[9px] tracking-[0.15em] text-blog-faint uppercase">
        {label}
      </p>

      <p className="mt-2 text-sm text-blog-muted">{value}</p>
    </div>
  )
}

function InputField({
  label,
  value,
  onChange,
  disabled = false,
}: {
  label: string
  value: string
  onChange?: (value: string) => void
  disabled?: boolean
}) {
  return (
    <label className="block">
      <span className="font-mono text-[9px] tracking-[0.15em] text-blog-faint uppercase">
        {label}
      </span>

      <input
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className="mt-2 h-10 w-full border border-blog-border-strong bg-blog-page px-3 text-sm text-blog-text-secondary outline-none transition focus:border-blog-accent-border disabled:cursor-not-allowed disabled:opacity-40"
      />
    </label>
  )
}

function SocialButton({
  icon: Icon,
  label,
}: {
  icon: React.ElementType
  label: string
}) {
  return (
    <button
      title={label}
      className="flex h-9 w-9 items-center justify-center border border-blog-border-strong bg-blog-page text-blog-dim transition hover:border-cyan-400/40 hover:text-blog-accent"
    >
      <Icon size={14} />
    </button>
  )
}

function SocialInput({
  icon: Icon,
  label,
  value,
}: {
  icon: React.ElementType
  label: string
  value: string
}) {
  return (
    <div className="flex items-center border border-blog-border-strong bg-blog-page">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border-r border-blog-border-strong text-blog-dim">
        <Icon size={14} />
      </div>

      <div className="px-3">
        <p className="font-mono text-[9px] tracking-wider text-blog-faint uppercase">
          {label}
        </p>

        <p className="mt-0.5 text-xs text-blog-muted">{value}</p>
      </div>

      <button className="mr-3 ml-auto text-blog-faint transition hover:text-blog-text-secondary">
        <Edit3 size={13} />
      </button>
    </div>
  )
}
