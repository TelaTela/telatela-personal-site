import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * This utility function is adapted from shadcn/ui.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
