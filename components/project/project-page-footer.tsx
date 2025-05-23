import { Button } from '@/components/ui/button';
import { siteConfig } from '@/config/site';
import Link from 'next/link';

interface ProjectFooterProps {
  title: string;
  slug: string;
}

export function ProjectFooter({ title, slug }: ProjectFooterProps) {
  return (
    <div className="w-full overflow-hidden bg-primary/5">
      <div className="relative">
        <div className="container mx-auto max-w-[750px] px-4 py-8 sm:px-6">
          <div className="space-y-6 text-center sm:text-left">
            <p className="text-md">
              Enjoyed the project? Help spread the word by sharing this project on{' '}
              <Link
                href={`https://x.com/intent/tweet?text=Check out this insightful post: ${title}&url=${encodeURIComponent(
                  `${siteConfig.url}/${slug}`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium underline hover:text-primary"
              >
                Twitter
              </Link>
              .
            </p>

            <p className="text-md">
              Found value in this content?{' '}
              <Link
                href="/support"
                className="font-medium underline hover:text-primary"
              >
                Consider supporting my work
              </Link>{' '}
              to fuel more in-depth articles and projects.
            </p>

            <p className="text-md">
              Have thoughts or questions?{' '}
              <Link
                href="/contact"
                className="font-medium underline hover:text-primary"
              >
                I&apos;m just a message away
              </Link>
              .
            </p>

            <p className="italic text-gray-600">
              Keep exploring, keep learning!
            </p>

            <p className="text-md font-semibold text-primary">
              – {siteConfig.author.name}
            </p>

            <div className="flex flex-col gap-4 sm:flex-row sm:justify-between">
              <Button variant="ghost" asChild className="rounded-lg">
                <Link href="/blog">← Back to projects</Link>
              </Button>
              <Button variant="default" asChild className="rounded-lg">
                <Link
                  href={`https://twitter.com/intent/tweet?text=Check out this insightful post: ${title}&url=${encodeURIComponent(
                    `${siteConfig.url}/blog/${slug}`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Share on Twitter
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
