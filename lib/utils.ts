// import { Project, WorkExperience } from "@/types/profile";
import { MdxBlogs, MdxProject, MdxWorkExperience } from "@/types/profile";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function sortPosts(blog_posts: MdxBlogs[]): MdxBlogs[] {
  return [...blog_posts].sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function sortProjects(projects: MdxProject[]) {
  return projects.sort(
    (a, b) =>
      new Date(b.frontmatter.date).getTime() -
      new Date(a.frontmatter.date).getTime()
  );
}

export function getAllTags(blog_posts: MdxBlogs[]): Record<string, number> {
  return blog_posts.reduce((acc, blog_post) => {
    if (blog_post.frontmatter.published && blog_post.frontmatter.tags) {
      blog_post.frontmatter.tags.forEach((tag) => {
        acc[tag] = (acc[tag] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);
}

export function getAllProjectTags(project_posts: MdxProject[]): Record<string, number> {
  return project_posts.reduce((acc, project_posts) => {
    if (project_posts.frontmatter.featured && project_posts.frontmatter.tech) {
      project_posts.frontmatter.tech.forEach((tech) => {
        acc[tech] = (acc[tech] || 0) + 1;
      });
    }
    return acc;
  }, {} as Record<string, number>);
}

export function sortTagsByCount(tags: Record<string, number>): string[] {
  return Object.entries(tags)
    .sort(([, a], [, b]) => b - a)
    .map(([tag]) => tag);
}

export function formatDate(input: string | number): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
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



export function sortProjectsByFeatured(projects: MdxProject[]) {
  return [...projects].sort(
    (a, b) => Number(b.frontmatter.featured) - Number(a.frontmatter.featured)
  );
}

export function sortBlogPostsByFeatured(blogPosts: MdxBlogs[]) {
  return [...blogPosts].sort((a, b) => Number(b.frontmatter.featured) - Number(a.frontmatter.featured));
}
