import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A utility function to conditionally join class names together,
 * and merge Tailwind CSS classes without style conflicts.
 */
export const cn = (...inputs) => {
  return twMerge(clsx(inputs));
};