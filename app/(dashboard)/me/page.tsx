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

export default function ProfilePage() {
  const [editingProfile, setEditingProfile] = useState(false)

  const [profile, setProfile] = useState({
    name: "Mohammad Mousavi",
    username: "mmd",
    email: "mohammad@example.com",
  })

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

  return (
    <main className="min-h-screen bg-[#0b1120] text-slate-100">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-10">
        {/* ───────────────── HEADER ───────────────── */}

        <div className="mb-8 flex items-center justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2 text-xs text-slate-500">
              <span>Dashboard</span>
              <ChevronRight size={13} />
              <span className="text-slate-300">Profile</span>
            </div>

            <h1 className="text-2xl font-semibold tracking-tight">Profile</h1>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex h-10 items-center gap-2 border border-slate-700 bg-[#111827] px-4 text-sm text-slate-300 transition hover:border-slate-500 hover:text-white">
              <Share2 size={15} />
              Share profile
            </button>

            <button
              onClick={() => setEditingProfile(!editingProfile)}
              className="flex h-10 items-center gap-2 bg-cyan-400 px-4 text-sm font-medium text-slate-950 transition hover:bg-cyan-300"
            >
              <Edit3 size={15} />
              {editingProfile ? "Done editing" : "Edit profile"}
            </button>
          </div>
        </div>

        {/* ───────────────── PROFILE HERO ───────────────── */}

        <section className="border border-slate-800 bg-[#111827]">
          <div className="h-1 bg-linear-to-r from-cyan-400 via-indigo-400 to-transparent" />

          <div className="p-6 lg:p-8">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-5">
                {/* Avatar */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center border border-cyan-400/30 bg-[#0b1120] text-2xl font-semibold text-cyan-400">
                  MM
                </div>

                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="text-2xl font-semibold">{profile.name}</h2>

                    <span className="border border-cyan-400/20 bg-cyan-400/5 px-2 py-0.5 text-[10px] tracking-wider text-cyan-400 uppercase">
                      Member
                    </span>
                  </div>

                  <p className="mt-1 text-sm text-slate-500">
                    @{profile.username}
                  </p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-slate-500">
                    <span className="flex items-center gap-2">
                      <Mail size={13} />
                      {profile.email}
                    </span>

                    <span className="flex items-center gap-2">
                      <CalendarDays size={13} />
                      Joined September 2026
                    </span>
                  </div>
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-2">
                {/*<SocialButton icon={} label="LinkedIn" />*/}
                <SocialButton icon={Send} label="Telegram" />
                <SocialButton icon={Mail} label="Email" />
              </div>
            </div>
          </div>
        </section>

        {/* ───────────────── STATS ───────────────── */}

        <section className="grid grid-cols-2 border-x border-b border-slate-800 md:grid-cols-4">
          <Stat value="24" label="Posts read" />
          <Stat value="18" label="Comments" />
          <Stat value="07" label="Saved posts" />
          <Stat value="03" label="Courses active" />
        </section>

        {/* ───────────────── MAIN GRID ───────────────── */}

        <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_360px]">
          {/* LEFT */}
          <div className="space-y-8">
            {/* PROFILE INFORMATION */}

            <Section
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
                    <InputField label="Email" value={profile.email} disabled />
                  </div>

                  <div className="flex justify-end md:col-span-2">
                    <button
                      onClick={() => setEditingProfile(false)}
                      className="flex h-10 items-center gap-2 bg-cyan-400 px-5 text-sm font-medium text-slate-950 hover:bg-cyan-300"
                    >
                      <Check size={15} />
                      Save changes
                    </button>
                  </div>
                </div>
              ) : (
                <div className="grid gap-x-8 gap-y-6 md:grid-cols-2">
                  <InfoField label="Full name" value={profile.name} />

                  <InfoField label="Username" value={`@${profile.username}`} />

                  <InfoField label="Email" value={profile.email} />

                  <InfoField label="Member since" value="September 2026" />
                </div>
              )}
            </Section>

            {/* SOCIAL PROFILES */}

            <Section
              icon={ExternalLink}
              title="Social profiles"
              description="Links displayed on your public profile."
            >
              <div className="space-y-3">
                {/*<SocialInput
                  icon={() => <Image src="https://www.shadcn.io/icon/lucide-linkedin" alt="incrementalist" fill/>}
                  label="LinkedIn"
                  value="linkedin.com/in/mmd"
                />*/}

                <SocialInput icon={Send} label="Telegram" value="t.me/mmd" />

                <SocialInput
                  icon={AtSign}
                  label="Email"
                  value={profile.email}
                />
              </div>

              <button className="mt-5 flex items-center gap-2 text-xs text-cyan-400 hover:text-cyan-300">
                <span className="text-base">+</span>
                Add another profile
              </button>
            </Section>

            {/* ACTIVE COURSES */}

            <Section
              icon={FileText}
              title="Active courses"
              description="Continue where you left off."
            >
              <div className="space-y-5">
                {courses.map((course) => (
                  <div
                    key={course.title}
                    className="group border border-slate-800 bg-[#0b1120] p-4 transition hover:border-slate-700"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-sm font-medium text-slate-200">
                          {course.title}
                        </h3>

                        <p className="mt-1 text-xs text-slate-500">
                          {course.lessons}
                        </p>
                      </div>

                      <span className="text-xs font-medium text-cyan-400">
                        {course.progress}%
                      </span>
                    </div>

                    <div className="mt-4 h-1 bg-slate-800">
                      <div
                        className="h-full bg-cyan-400"
                        style={{ width: `${course.progress}%` }}
                      />
                    </div>

                    <div className="mt-3 flex justify-end">
                      <button className="flex items-center gap-1 text-xs text-slate-500 transition hover:text-white">
                        Continue
                        <ChevronRight size={13} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </Section>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* SECURITY */}

            <Section
              icon={ShieldCheck}
              title="Security"
              description="Manage your account security."
            >
              <div className="border border-slate-800 bg-[#0b1120] p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 text-slate-400">
                    <Lock size={17} />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-sm font-medium">Password</h3>

                    <p className="mt-1 text-xs leading-5 text-slate-500">
                      Change your password regularly to keep your account
                      secure.
                    </p>
                  </div>
                </div>

                <button className="mt-4 flex h-9 w-full items-center justify-center gap-2 border border-slate-700 text-xs text-slate-300 transition hover:border-slate-500 hover:text-white">
                  <KeyRound size={14} />
                  Change password
                </button>
              </div>

              <div className="mt-4 flex items-center gap-2 text-xs text-emerald-400">
                <Check size={13} />
                Your account is secured
              </div>
            </Section>

            {/* PUBLIC PROFILE */}

            <Section
              icon={Share2}
              title="Public profile"
              description="This is what other members can see."
            >
              <div className="border border-slate-800 bg-[#0b1120] p-4">
                <p className="text-[11px] tracking-wider text-slate-600 uppercase">
                  Profile URL
                </p>

                <p className="mt-2 font-mono text-xs break-all text-slate-400">
                  incrementalist.com/u/{profile.username}
                </p>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button className="flex h-9 items-center justify-center gap-2 border border-slate-700 text-xs text-slate-300 hover:border-slate-500">
                    <ExternalLink size={13} />
                    View
                  </button>

                  <button className="flex h-9 items-center justify-center gap-2 border border-slate-700 text-xs text-slate-300 hover:border-slate-500">
                    <Share2 size={13} />
                    Share
                  </button>
                </div>
              </div>
            </Section>

            {/* RECENT ACTIVITY */}

            <Section
              icon={MoreHorizontal}
              title="Recent activity"
              description="Your latest interactions."
            >
              <div className="space-y-0">
                {activities.map((activity, index) => {
                  const Icon = activity.icon

                  return (
                    <div
                      key={index}
                      className="relative flex gap-3 border-b border-slate-800 py-4 last:border-0"
                    >
                      <div className="flex h-7 w-7 shrink-0 items-center justify-center border border-slate-800 bg-[#0b1120] text-slate-500">
                        <Icon size={13} />
                      </div>

                      <div className="min-w-0">
                        <p className="text-xs leading-5 text-slate-400">
                          {activity.title}{" "}
                          <span className="text-slate-200">
                            {activity.target}
                          </span>
                        </p>

                        <p className="mt-1 text-[10px] text-slate-600">
                          {activity.time}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              <button className="mt-4 flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300">
                View all activity
                <ChevronRight size={13} />
              </button>
            </Section>
          </div>
        </div>

        {/* ───────────────── FOOTER ACCOUNT AREA ───────────────── */}

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-slate-800 pt-6 text-xs text-slate-600 md:flex-row">
          <span>Account created September 2026</span>

          <button className="flex items-center gap-2 text-slate-500 hover:text-slate-300">
            <Settings size={13} />
            Account settings
          </button>
        </div>
      </div>
    </main>
  )
}

/* ───────────────────────────────────────────── */
/* SMALL COMPONENTS */
/* ───────────────────────────────────────────── */

function Section({
  icon: Icon,
  title,
  description,
  children,
}: {
  icon: React.ElementType
  title: string
  description: string
  children: React.ReactNode
}) {
  return (
    <section className="border border-slate-800 bg-[#111827]">
      <div className="border-b border-slate-800 px-5 py-4">
        <div className="flex items-center gap-2">
          <Icon size={15} className="text-cyan-400" />

          <h2 className="text-sm font-medium text-slate-200">{title}</h2>
        </div>

        <p className="mt-1 pl-5.75 text-xs text-slate-600">{description}</p>
      </div>

      <div className="p-5">{children}</div>
    </section>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="border-r border-slate-800 bg-[#0f172a] px-5 py-4 last:border-r-0">
      <div className="text-lg font-semibold text-slate-200">{value}</div>

      <div className="mt-1 text-[10px] tracking-wider text-slate-600 uppercase">
        {label}
      </div>
    </div>
  )
}

function InfoField({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[10px] tracking-wider text-slate-600 uppercase">
        {label}
      </p>

      <p className="mt-2 text-sm text-slate-300">{value}</p>
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
      <span className="text-[10px] tracking-wider text-slate-600 uppercase">
        {label}
      </span>

      <input
        value={value}
        disabled={disabled}
        onChange={(e) => onChange?.(e.target.value)}
        className="mt-2 h-10 w-full border border-slate-700 bg-[#0b1120] px-3 text-sm text-slate-200 transition outline-none focus:border-cyan-400 disabled:cursor-not-allowed disabled:opacity-50"
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
      className="flex h-9 w-9 items-center justify-center border border-slate-700 bg-[#0b1120] text-slate-500 transition hover:border-cyan-400/50 hover:text-cyan-400"
    >
      <Icon size={15} />
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
    <div className="flex items-center border border-slate-800 bg-[#0b1120]">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center border-r border-slate-800 text-slate-500">
        <Icon size={15} />
      </div>

      <div className="px-3">
        <p className="text-[9px] tracking-wider text-slate-600 uppercase">
          {label}
        </p>

        <p className="mt-0.5 text-xs text-slate-400">{value}</p>
      </div>

      <button className="mr-3 ml-auto text-slate-600 hover:text-slate-300">
        <Edit3 size={13} />
      </button>
    </div>
  )
}
