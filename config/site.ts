import { FaGithub, FaLinkedin, FaRss, FaInstagram } from "react-icons/fa";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiGoogletagmanager,
  SiShadcnui,
  SiNodedotjs,
  SiMongodb,
  SiStrapi,
  SiGraphql,
  SiAmazonwebservices,
  SiVercel,
  SiFirebase,
  SiGit,
  SiGithub,
  SiJest,
  SiZod,
  SiPostgresql,
} from "react-icons/si";
import { FaDownload, FaXTwitter } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { IoMdArrowForward, IoMdMail } from "react-icons/io";
import { IconType } from "react-icons";

const base_url =
  process.env.NEXT_PUBLIC_APP_URL ||
  (process.env.NODE_ENV === "production"
    ? "https://anshu-portfolio-three.vercel.app"
    : "http://localhost:3000");

export const siteConfig = {
  first_name: "Anshu",
  last_name: "Kumar",
  name: "Anshu Kumar",
  url: base_url,
  phone: "+91 8882965595",
  repo_url: "https://github.com/Gingaaa/anshu-portfolio",
  description:
    "Hi, I’m Anshu Kumar, a Software Developer focused on building attractive and multi functional websites and apps. This site is a mix of my work, my thoughts, and my journey as a developer.",
  bio: "Software Developer with a passion for building optimised, scalable and reliable Website and App.",
  author: {
    name: "Anshu Kumar",
    email: "anshusee22@gmail.com",
    github: "https://github.com/Gingaaa",
    x: "https://x.com/anshusee22",
    linkedin: "https://www.linkedin.com/in/anshusee",
  },
  skills: [
    {
      id: "frontend",
      title: "FRONTEND & UI",
      subtitle: "Interface & Experience",
      accent: "cyan",
      items: [
        {
          name: "React",
          description: "Component-based UI",
          icon: SiReact,
        },
        {
          name: "Next.js",
          description: "Full-stack React framework",
          icon: SiNextdotjs,
        },
        {
          name: "TypeScript",
          description: "Type-safe development",
          icon: SiTypescript,
        },
        {
          name: "Tailwind CSS",
          description: "Utility-first styling",
          icon: SiTailwindcss,
        },
        {
          name: "Zustand",
          description: "Lightweight state management",
          icon: SiGoogletagmanager,
        },
        {
          name: "Shadcn UI",
          description: "Accessible UI system",
          icon: SiShadcnui,
        },
      ],
    },
    {
      id: "backend",
      title: "BACKEND & DATA",
      subtitle: "APIs & Infrastructure",
      accent: "green",
      items: [
        {
          name: "Node.js",
          description: "JavaScript runtime",
          icon: SiNodedotjs,
        },
        {
          name: "MongoDB",
          description: "Document database",
          icon: SiMongodb,
        },
        {
          name: "Strapi",
          description: "Headless CMS",
          icon: SiStrapi,
        },
        {
          name: "GraphQL",
          description: "Flexible API queries",
          icon: SiGraphql,
        },
        {
          name: "Postgre SQL",
          description: "Object Relational database",
          icon: SiPostgresql,
        },
      ],
    },
    {
      id: "cloud",
      title: "CLOUD & SERVICES",
      subtitle: "Deployment & Platforms",
      accent: "purple",
      items: [
        {
          name: "AWS",
          description: "Cloud infrastructure",
          icon: SiAmazonwebservices,
        },
        {
          name: "Vercel",
          description: "Frontend deployment",
          icon: SiVercel,
        },
        {
          name: "Firebase",
          description: "Backend services",
          icon: SiFirebase,
        },
      ],
    },
    {
      id: "development",
      title: "DEVELOPMENT",
      subtitle: "Quality & Productivity",
      accent: "orange",
      items: [
        {
          name: "Jest",
          description: "JavaScript testing",
          icon: SiJest,
        },
        {
          name: "Zod",
          description: "Schema validation",
          icon: SiZod,
        },
        {
          name: "JavaScript",
          description: "Modern ES development",
          icon: SiJavascript,
        },
      ],
    },
    {
      id: "version-control",
      title: "VERSION CONTROL",
      subtitle: "Collaboration & Workflow",
      accent: "pink",
      items: [
        {
          name: "Git",
          description: "Version control",
          icon: SiGit,
        },
        {
          name: "GitHub",
          description: "Code collaboration",
          icon: SiGithub,
        },
      ],
    },
  ],
  links: {
    github: {
      url: "https://github.com/Gingaaa",
      label: "GitHub",
      icon: FaGithub,
    },
    x: {
      url: "https://x.com/anshusee22",
      label: "X",
      icon: FaXTwitter,
    },
    instagram: {
      url: "https://www.instagram.com/a_n_s_h_u12",
      label: "Instagram",
      icon: FaInstagram,
    },
    linkedin: {
      url: "https://www.linkedin.com/in/anshusee",
      label: "LinkedIn",
      icon: FaLinkedin,
    },
    email: {
      url: "mailto:anshusee22@gmail.com",
      label: "Email",
      icon: IoMdMail,
    },
    rss: {
      url: "/rss.xml",
      label: "RSS",
      icon: FaRss,
    },
    setup: {
      url: "/about/setup",
      label: "My Setup",
      icon: MdComputer,
    },
    blog: {
      url: "/blog",
      label: "Blog",
      icon: IoMdArrowForward,
    },
    work: {
      url: "/work",
      label: "Work",
      icon: IoMdArrowForward,
    },
    about: {
      url: "/about",
      label: "About",
      icon: IoMdArrowForward,
    },
    contact: {
      url: "/contact",
      label: "Contact",
      icon: IoMdMail,
    },
    sitemap: {
      url: "/sitemap.xml",
      label: "Sitemap",
      icon: IoMdArrowForward,
    },
    resume: {
      url: "/Anshu_Kumar_Resume.pdf",
      label: "Resume",
      icon: FaDownload,
    },
  },
};

// Type for the links
export type SiteConfigLink = {
  url: string;
  label: string;
  icon?: IconType;
};
