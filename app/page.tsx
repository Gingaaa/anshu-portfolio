import { Button } from "@/components/ui/button";
import { siteConfig } from "@/config/site";
import Link from "next/link";
import { IoMdArrowForward } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { WorkExperience } from "@/components/work/work-experience";
import { WorkHeader } from "@/components/work/work-header";
import Contact from "@/components/contact";
import TechStack from "@/components/tech-stack";

export default async function Home() {
  return (
    <div>
      {/* Hero Section  */}
      <section className="container flex min-h-[calc(100vh-5rem)] items-center justify-center space-y-8 text-center">
        <div className="flex animate-fade-in-up animation-delay-0 flex-col gap-14 items-center justify-center text-center">
          <div className="space-y-6">
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
            Currently, I&#39;m a <strong>Associate Technology L1</strong> at{" "}
            <strong>Ayasya Digital Solution</strong>, where I specialize in
            creating secure, scalable website. My work revolves around pushing
            the limits of complex functionality computing, exploring innovative
            ways to enhance website security, ui and performance.
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

      <section className="container !max-w-[1400px] py-20 text-center" id="tech">
        <TechStack />
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
