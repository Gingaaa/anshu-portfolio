import { notFound } from 'next/navigation';
import '@/styles/mdx.css';
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { PostHeader } from '@/components/blog/post-header';
import { PostNavigation } from '@/components/blog/post-navigation';
import { PostFooter } from '@/components/blog/post-footer';
import { getAllBlogSlug, getBlogBySlug } from '@/lib/fetchmdx';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slug = await getAllBlogSlug();
  return slug;
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const post = await getBlogBySlug(resolvedParams.slug);
  // const post = await getBlogBySlug(params);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.frontmatter.title);

  return {
    title: `${post.frontmatter.title}`,
    description: post.frontmatter.description,
    authors: { name: siteConfig.author.name },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      url: `${siteConfig.url}/${post.slug}`,
      images: [
        {
          url: `/api/og}`,
          width: 1200,
          height: 630,
          alt: post.frontmatter.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      images: [`/api/og}`],
    },
  };
}

const PostPage = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const post = await getBlogBySlug(params.slug);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  return (
    <div className="flex min-h-full w-full flex-col">
      <div className="flex-1">
        <div className="py-6 lg:py-10">
          <div className="container mx-auto">
            <div className="relative flex flex-col justify-center xl:flex-row">

              {/* Left sidebar */}
              <aside className="hidden w-[240px] shrink-0 xl:block">
              </aside>

              {/* Center content */}
              <main className="w-full min-w-0 px-4 sm:px-6 xl:max-w-[1000px]">
                <PostNavigation className="mb-8" />

                <article>
                  <div className="flex flex-col space-y-8">
                    <PostHeader
                      title={post.frontmatter.title}
                      date={post.frontmatter.date}
                      tags={post.frontmatter.tags}
                    // readingTime={post.frontmatter.metadata.readingTime}
                    />

                    <Separator className="h-px bg-primary/10" />

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      {post.content}
                    </div>
                    <Separator className="h-px bg-primary/10" />
                  </div>
                </article>
              </main>

              {/* Right sidebar */}
              <aside className="hidden w-[200px] shrink-0 xl:block">
              </aside>
            </div>
          </div>
        </div>
      </div>
      <PostFooter title={post.frontmatter.title} slug={post.slug} />
    </div>
  );
};

export default PostPage;
