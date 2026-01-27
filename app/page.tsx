import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { siteConfig } from "@/config/site";
import { IconType } from "react-icons";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { WorkExperience } from "@/components/work/work-experience";
import { WorkHeader } from "@/components/work/work-header";
import Contact from "@/components/contact";

export default async function Home() {
  const socialLinks = [
    siteConfig.links.github,
    siteConfig.links.linkedin,
    siteConfig.links.x,
    siteConfig.links.email,
  ];

  return (
    <div>
      <div className="fixed left-8 top-1/2 z-10 hidden -translate-y-1/2 flex-col gap-4 lg:flex">
        {socialLinks.map((link) => {
          const Icon = link.icon as IconType;
          return (
            <Link
              key={link.label}
              target="_blank"
              className="group rounded-full bg-primary/10 p-3 transition-all hover:scale-110 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary"
              href={link.url}
            >
              <Icon />
            </Link>
          );
        })}
      </div>

      {/* Hero Section  */}
      <section className="container flex min-h-[calc(100vh-12rem)] items-center justify-center space-y-8 text-center">
        <div className="flex animate-fade-in-up animation-delay-0 flex-col gap-14 items-center justify-center text-center">
          <div className="space-y-4">
            <Button
              variant="outline"
              className="border animate-bounce flex items-center justify-center gap-3 rounded-full w-fit text-center mx-auto px-4 py-1"
            >
              <span className="bg-green-500 block w-2 h-2 rounded-full"></span>
              Available to work and convert ideas into reality
            </Button>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-8xl">
              Hi, I&apos;m{" "}
              <span className="text-primary">{siteConfig.name}</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-muted-foreground sm:text-xl">
              {siteConfig.bio}
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href="#about">
                About Me <IoMdArrowForward className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href="#contact">
                <MdEmail className="mr-2 h-4 w-4" />
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section
        className="container !max-w-6xl py-20 text-center animate-fade-in-up animation-delay-0"
        id="about"
      >
        <div className="mb-8">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl ">
            About Me
          </h2>
        </div>
        <div className="prose prose-lg mx-auto dark:prose-invert mb-8">
          <p>
            Hey there! I&#39;m a <strong> tech </strong> explorer who&#39;s been
            hooked on building things since my days at{" "}
            <strong> Dronacharya College of Engineering, Gurgaon India</strong>,
            where I earned a BTech in Computer Science. It was there that I
            discovered my passion for crafting efficient, user-friendly web and
            mobile apps.
          </p>

          <p>
            Currently, I&#39;m a <strong>Software Developer</strong> at{" "}
            <strong>SetIndiabiz</strong>, where I specialize in creating secure,
            scalable website. My work revolves around pushing the limits of
            complex functionality computing, exploring innovative ways to
            enhance website security, ui and performance.
          </p>

          <p>
            I&#39;m deeply invested in development, particularly with{" "}
            <strong>Typescript</strong>. Its balance of type safety and
            performance captivated me, and it&#39;s now my go-to language for
            critical development projects. I actively contribute to the
            development ecosystem, driven by a belief in the power of
            open-source collaboration.
          </p>
        </div>

        <Button size="lg" asChild>
          <Link href="#work">
            View work history <IoMdArrowForward className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </section>

      <section className="container !max-w-6xl py-20 text-center" id="tech">
        <div className="mb-8">
          <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl">
            Tech Stacks
          </h2>
        </div>
        <div className="flex flex-col space-y-8">
          {siteConfig.skills.map((category, i) => (
            <div key={i}>
              <h3>{category.name}</h3>
              <div className="flex justify-center flex-wrap gap-3 mt-3">
                {category.list.map((skill, si) => (
                  <Card
                    key={si}
                    className="px-3 py-1 flex group shadow-lg hover:shadow-primary hover:text-accent-foreground flex-col items-center justify-center gap-3 text-center cursor-pointer"
                  >
                    <span className="text-primary group-hover:text-primary/80 ">
                      {skill.name}
                    </span>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="container !max-w-6xl py-20 text-center" id="work">
        <div className="">
          <WorkHeader />
          <WorkExperience />
        </div>
      </section>

      <section className="container !max-w-6xl py-20 text-center" id="contact">
        <Contact />
      </section>
    </div>
  );
}
