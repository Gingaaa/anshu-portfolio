import { FaGithub, FaLinkedin, FaRss, FaInstagram } from "react-icons/fa";
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
      name: "Languages",
      list: [
        {
          name: "C",
        },
        {
          name: "Java",
        },
        {
          name: "Python",
        },
        {
          name: "HTML5",
        },
        {
          name: "CSS3",
        },
        {
          name: "Javascript",
        },
        {
          name: "Typescript",
        },
        {
          name: "MDX",
        },
        {
          name: "Sass",
        },
      ],
    },
    {
      name: "Frontend & UI",
      list: [
        {
          name: "Next.js",
        },
        {
          name: "React.js",
        },
        {
          name: "Tailwind Css",
        },
        {
          name: "Zustand",
        },
        {
          name: "Redux",
        },
        {
          name: "Shadecn UI",
        },
        {
          name: "Bootstrap",
        },
        {
          name: "Zod",
        },
        {
          name: "Jest",
        },
        {
          name: "Tanstack query",
        },
        {
          name: "React query",
        },
        {
          name: "Framer Motion",
        },
      ],
    },
    {
      name: "Backend & Database",
      list: [
        {
          name: "Rest API",
        },
        {
          name: "Websocket",
        },
        {
          name: "Nodejs",
        },
        {
          name: "Expressjs",
        },
        {
          name: "Mongodb",
        },
        {
          name: "Mongoose",
        },
        {
          name: "Nodemon",
        },
      ],
    },
    {
      name: "Cloud & Services",
      list: [
        {
          name: "AWS",
        },
        {
          name: "Vercel",
        },
        {
          name: "Git",
        },
        {
          name: "Github",
        },
        {
          name: "RabbitMQ",
        },
        {
          name: "Firebase",
        },
      ],
    },
    {
      name: "Tools & Platforms",
      list: [
        {
          name: "VS Code",
        },
        {
          name: "IntelliJ IDEA",
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
