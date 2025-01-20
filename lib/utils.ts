import { Project } from "@/types/profile";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sortProjectsByFeatured(projects:Project[]) {
  return [...projects].sort((a, b) => Number(b.featured) - Number(a.featured));
}
