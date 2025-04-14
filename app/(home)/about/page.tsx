import { Metadata } from 'next';
import { LinkButton } from '@/components/ui/link-button';
import { siteConfig } from '@/config/site';

export const metadata: Metadata = {
  title: 'About Me',
  description: `${siteConfig.name}'s personal and professional journey`,
};

// TODO: Handle this page with MDX. Also, this
//  page should be a bit more dynamic. MDX should handle it anyway.
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <section className="container px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl space-y-16">
          {/* Header Section */}
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h1 className="before:hidden">About Me</h1>
          </div>

          {/* Main About Section */}
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <p>
              Hey there! I&#39;m a <strong> tech </strong> explorer who&#39;s been hooked on building things since my days
              at <strong> Dronacharya College of Engineering, Gurgaon</strong>, where I
              earned a BTech in Computer Science. It was there that I discovered my passion for crafting efficient,
              user-friendly web and mobile apps.
            </p>

            <p>
              Currently, I&#39;m a <strong>Software Developer</strong> at <strong>SetIndiabiz</strong>, where I specialize
              in creating secure, scalable website. My work revolves around pushing the limits of complex
              functionality computing, exploring innovative ways to enhance website security, ui and performance.
            </p>

            <p>
              I&#39;m deeply invested in development, particularly with <strong>Typescript</strong>. Its balance
              of type safety and performance captivated me, and it&#39;s now my go-to language for
              critical development projects. I actively contribute to the development ecosystem, driven
              by a belief in the power of open-source collaboration.
            </p>

          </div>

          {/* Work History and GitHub Links */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <LinkButton
              link={siteConfig.links.work}
              ariaLabel="View work history"
              size="lg"
            />
            <LinkButton
              link={siteConfig.links.github}
              ariaLabel="View GitHub profile"
              variant="outline"
              size="lg"
            />
          </div>

          {/* Beyond Work Section */}
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h2 className="before:hidden">Beyond the Code</h2>
            <p>
              Outside of work, I enjoy exploring the intersection of technology and creativity. Optimizing
              my development environment is one of my favorite pursuits—whether it&#39;s experimenting with
              mechanical keyboards or setting up ergonomic monitor configurations. I believe that the
              right tools elevate both productivity and satisfaction.
            </p>

            <p>
              Music is my creative outlet, with fingerstyle guitar as my primary focus. The precision and
              expressiveness of this playing style resonate deeply with me. In many ways, the discipline
              required to master fingerstyle techniques mirrors the dedication needed in software development.
            </p>
          </div>

          {/* <LinkButton
            link={siteConfig.links.setup}
            ariaLabel="Explore my setup"
            variant="outline"
            size="lg"
          /> */}

          {/* Contact Section */}
          <div className="prose prose-lg mx-auto dark:prose-invert">
            <h2 className="before:hidden">Let&#39;s Connect</h2>
            <p>
              I&#39;m always excited to link up with fellow code wranglers, tech tinkerers, and guitar geeks.
              Got a wild debugging war story to swap? Want to duke it out over tabs versus spaces, geek out
              over fingerstyle guitar tricks, or brainstorm some epic collaboration ideas? I&#39;m your guy.
              Drop me a line at [your email] or ping me on [social media]—let&#39;s chat and create something
              awesome together!
            </p>
          </div>
          <LinkButton
            link={siteConfig.links.contact}
            ariaLabel="Get in touch"
            size="lg"
          />
        </div>
      </section>
    </div>
  );
}
