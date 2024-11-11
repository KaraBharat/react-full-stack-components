import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Creates initials from a full name
 * @param {string} name - Full name to create initials from
 * @returns {string} Initials string
 */
export const createInitials = (name: string): string =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("");