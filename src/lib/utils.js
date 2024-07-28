import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Combines class names using clsx and tailwind-merge.
 * @param {...(string|string[]|object)} inputs - Class names and conditional class names.
 * @returns {string} - Merged class name string.
 */
export function cn(...inputs) {
  return twMerge(clsx(...inputs));
}
