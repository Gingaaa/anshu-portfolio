// types/profile.ts
import { JSXElementConstructor, ReactElement } from "react";

export type MdxBlogs = {
  frontmatter: {
    title: string;
    date: string;
    description: string;
    tags: Array<string>;
    published: boolean;
    featured?: boolean;
  };
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
};

export type MdxProject = {
  frontmatter: {
    title: string;
    description: string;
    date: string;
    status: string;
    tech: Array<string>;
    featured?: boolean;
    links: Array<{
      name: string;
      url: string;
      type: string;
    }>;
  };
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
};

export type MdxWorkExperience = {
  frontmatter: {
    title: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    skills: Array<string>;
    author: string;
  };
  content: ReactElement<unknown, string | JSXElementConstructor<unknown>>;
  slug: string;
};

export type SocialLink = {
  platform: string;
  url: string;
  icon: string;
};

export type WorkExperience = {
  company: string;
  position: string;
  startDate: string;
  endDate: string | "Present";
  description: string;
  technologies: string[];
};

export type Project = {
  slug: string;
  title: string;
  description: string;
  date: string;
  status: string;
  technologies: string[];
  featured: boolean;
  link?: string;
  github?: string;
  image?: string;
};

export type Profile = {
  personal: {
    first_name: string;
    last_name: string;
    title: string;
    email: string;
    location: string;
    bio: string;
    avatar: string;
    dateOfBirth: string;
  };
  social: SocialLink[];
  skills: {
    category: string;
    items: string[];
  }[];
  experience: WorkExperience[];
  education: {
    institution: string;
    degree: string;
    field: string;
    graduationDate: string;
  }[];
  projects: Project[];
};
