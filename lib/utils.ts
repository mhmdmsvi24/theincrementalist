import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function generateRandomUsernameFromEmail(email: string): string {
  return email.replace(/@.+/, "") + Math.trunc(Math.random() * 1000)
}
