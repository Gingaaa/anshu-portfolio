import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
// import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
// import { sortProjectsByFeatured } from "@/lib/utils";
import { Link } from 'next-view-transitions';
import { FaBookOpen, FaGithub } from "react-icons/fa";
import { IoMdArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";

export default function Home() {
  // const featuredProjects = sortProjectsByFeatured(projects).slice(0, 3);

  return (
    <div className="">
      {/* Hero Section  */}
      <section className="container flex min-h-[calc(100vh-16rem)] flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            {siteConfig.name}
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
            Software Developer with a passion for building scalable and reliable
            Website and App.
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

      {/* Featured Projects */}
      <section className="container py-20">
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
          {/* {featuredProjects.map((project) => ( */}
          <Card className="flex flex-col p-6">
            <h3 className="mb-2 text-xl font-semibold">
              <Link
                href={`/work/#`}
                className="hover:text-primary"
              >
                fesfes
              </Link>
            </h3>
            <p className="mb-4 flex-grow text-muted-foreground">
              dsvs
            </p>
            <div className="space-y-4">
              <Link
                href={`/work/sdvsd`}
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                View Project ➔
              </Link>
            </div>
          </Card>
          {/* ))} */}
        </div>
      </section>

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
          {/* {recentPosts.map((post) => ( */}
            <Card className="flex flex-col p-6">
              <h3 className="mb-2 text-xl font-semibold">
                <Link href="#" className="hover:text-primary">
                 zdvsf
                </Link>
              </h3>
              <p className="mb-4 flex-grow text-muted-foreground">
                sdfvdf
              </p>
              {/* Read More Link */}
              <Link
                href={`/dvsdf`}
                className="text-sm font-medium text-primary hover:text-primary/80"
              >
                Read more ➔
              </Link>
            </Card>
          {/* ))} */}
        </div>
      </section>


    </div>
  );
};
