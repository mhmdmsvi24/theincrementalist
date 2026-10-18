import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomUsernameFromEmail(email: string): string {
  return email.replace(/@.+/, "") + Math.trunc(Math.random() * 1000)
}

const persianDateFormatter = new Intl.DateTimeFormat(
  "fa-IR-u-ca-persian-nu-arabext",
  {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "Asia/Tehran",
  }
)

export function formatPersianDate(
  date: string | Date | null | undefined
): string {
  if (!date) return ""

  const parsedDate = date instanceof Date ? date : new Date(date)

  if (Number.isNaN(parsedDate.getTime())) return ""

  return persianDateFormatter.format(parsedDate)
}
