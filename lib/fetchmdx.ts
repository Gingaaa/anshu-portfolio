import fs from "fs";
import path from "path";
import matter from "gray-matter";

const blogContentDir = path.join(process.cwd(), "content/blogs");
const workContentDir = path.join(process.cwd(), "content/work");
const projectsContentDir = path.join(process.cwd(), "content/projects");

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(blogContentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter: frontmatter as {
      title: string;
      date: string;
      description: string;
      readingTime: number;
      tags: Array<string>;
      published: boolean;
      featured?: boolean;
    },
    content: content,
    slug: path.parse(fileName).name,
  };
}

export async function getBlogs() {
  const files = fs.readdirSync(blogContentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name))
  );
  return blogs;
}

export function getAllBlogSlug() {
  const files = fs.readdirSync(blogContentDir);
  const slugs = files.map((file) => {
    const name = path.parse(file).name;
    return { slug: [name] };
  });
  return slugs;
}

export async function getWorkBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(workContentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter: frontmatter as {
      title: string;
      company: string;
      startDate: string;
      endDate: string;
      description: string;
      skills: Array<string>;
      author: string;
    },
    content: content,
    slug: path.parse(fileName).name,
  };
}

export async function getWorks() {
  const files = fs.readdirSync(workContentDir);
  const works = await Promise.all(
    files.map(async (file) => await getWorkBySlug(path.parse(file).name))
  );
  return works;
}

export function getAllWorkSlug() {
  const files = fs.readdirSync(blogContentDir);
  const slugs = files.map((file) => {
    const name = path.parse(file).name;
    return { slug: name };
  });
  return slugs;
}

export async function getProjectBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(projectsContentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");
  const { data: frontmatter, content } = matter(fileContent);

  return {
    frontmatter: frontmatter as {
      title: string;
      description: string;
      date: string;
      status: string;
      tech: Array<string>;
      featured?: boolean;
      readingTime: number;
      links: Array<{
        name: string;
        url: string;
        type: string;
      }>;
    },
    content: content,
    slug: path.parse(fileName).name,
  };
}

export async function getProjects() {
  const files = fs.readdirSync(projectsContentDir);
  const projects = await Promise.all(
    files.map(async (file) => await getProjectBySlug(path.parse(file).name))
  );
  return projects;
}

export function getAllProjectSlug() {
  const files = fs.readdirSync(projectsContentDir);
  const slugs = files.map((file) => {
    const name = path.parse(file).name;
    return { slug: [name] };
  });
  return slugs;
}
