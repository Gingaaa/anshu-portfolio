// import { Project, WorkExperience } from "@/types/profile";
import { MdxProject, MdxWorkExperience } from "@/types/profile";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export function sortProjectsByFeatured(projects: MdxProject[]) {
  return [...projects].sort(
    (a, b) => Number(b.frontmatter.featured) - Number(a.frontmatter.featured)
  );
}

export function getDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  return `${start.toLocaleDateString("en-US", {
    month: "short",
  })} ${start.getFullYear()} - ${end.toLocaleDateString("en-US", {
    month: "short",
  })} ${end.getFullYear()}`;
}

export function sortWorkExperience(workExperience: MdxWorkExperience[]) {
  return workExperience.sort(
    (a, b) =>
      new Date(b.frontmatter.startDate).getTime() -
      new Date(a.frontmatter.startDate).getTime()
  );
}

export function sortProjects(projects: MdxProject[]) {
  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}
