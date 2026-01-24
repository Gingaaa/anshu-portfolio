import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { getBlogs } from "@/lib/fetchmdx";
import { MdxBlogs } from "@/types/profile";
// import { getBlogs, getProjects } from "@/lib/fetchmdx";
// import { sortBlogPostsByFeatured, sortProjectsByFeatured } from "@/lib/utils";
// import { getBlogBySlugTest } from "@/mdx-remote-configuration";
import Link from "next/link";
import { FaBookOpen } from "react-icons/fa";
// import { FaBookOpen, FaGithub } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default async function Home() {
  // const projects = await getProjects();
  const blogs = await getBlogs();
  const featuredPosts = blogs
    .filter((post: MdxBlogs) => post.frontmatter.featured)
    .slice(0, 3);
  // const featuredProjects = sortProjectsByFeatured(projects).slice(0, 3);
  // const recentPosts = sortBlogPostsByFeatured(blogs).slice(0, 3);

  // console.log(getBlogBySlugTest("/configure-mdx-in-nextjs"))

  return (
    <div className="">
      {/* Hero Section  */}
      <section className="container flex min-h-[calc(100vh-12rem)] flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            {siteConfig.bio}
          </p>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row">
          <Button size="lg" asChild>
            <Link href="/about">
              About Me <IoMdArrowForward className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/contact">
              <MdEmail className="mr-2 h-4 w-4" />
              Get in Touch
            </Link>
          </Button>
        </div>
      </section>

      {/* <section className="container py-20">
        <div className="mb-8">
          <h2 className="text-3xl font-bold tracking-tight">Tech Stacks</h2>
        </div>
        <div className="flex flex-col space-y-4">
          {siteConfig.skills.map((category, i) => (
            <div key={i}>
              <h3>{category.name} :</h3>
              <div className="grid grid-cols-12 gap-3 mt-3">
                {category.list.map((skill, si) => (
                  <Card key={si} className="p-2 flex flex-col items-center justify-center gap-3 text-center cursor-pointer">
                    <div
                      className="w-8 h-8"
                      dangerouslySetInnerHTML={{ __html: skill.icon }}
                    ></div>
                    <span className="!text-xs text-primary hover:text-primary/80 ">{skill.name}</span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Featured Projects */}
      {/* <section className="container py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">
            Featured Projects
          </h2>
          <Button variant="ghost" asChild>
            <Link href="https://github.com">
              <FaGithub className="mr-2 h-4 w-4" />
              View GitHub
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Card key={project.slug} className="flex flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">
                <Link
                  href={`/project/${project.slug}`}
                  className="hover:text-primary"
                >
                  {project.frontmatter.title}
                </Link>
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {project.frontmatter.description}
              </p>
              <div className="space-y-4">
                <Link
                  href={`/project/${project.slug}`}
                  className="text-sm font-medium text-primary hover:text-primary/80"
                >
                  View Project ➔
                </Link>
              </div>
            </Card>
          ))}
        </div>
      </section> */}

      {/* Recent Blog Posts */}
      <section className="container py-20">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="/blog">
              <FaBookOpen className="mr-2 h-4 w-4" />
              View All Posts
            </Link>
          </Button>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {featuredPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover:text-primary"
                >
                  {post.frontmatter.title}
                </Link>
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                {post.frontmatter.description}
              </p>
              <Link
                href={`/blog/${post.slug}`}
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Read more ➔
              </Link>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}
