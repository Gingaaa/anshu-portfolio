// import '@/styles/mdx.css';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import '../../../../styles/mdx.css';

import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { PostHeader } from '@/components/blog/post-header';
import { PostNavigation } from '@/components/blog/post-navigation';
import { PostFooter } from '@/components/blog/post-footer';
import { getAllBlogSlug, getBlogBySlug } from '@/lib/fetchmdx';
import { CustomMDX } from '@/components/mdx-remote';
import React from 'react';
import rehypePrettyCode, { LineElement } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';

interface PostPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slug = await getAllBlogSlug(); // Destructure the slug array
  return slug.map((slugName) => ({ slug: slugName.slug }));
}

async function getPostFromParams(params: PostPageProps['params']) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join('/');
  return await getBlogBySlug(slug);
}

export async function generateMetadata({
  params,
}: PostPageProps): Promise<Metadata> {
  const post = await getPostFromParams(params);
  // const post = await getBlogBySlug(slug);

  if (!post) {
    return {};
  }

  const ogSearchParams = new URLSearchParams();
  ogSearchParams.set('title', post.frontmatter.title);

  return {
    title: `${post.frontmatter.title}`,
    description: post.frontmatter.description,
    authors: { name: siteConfig.author.name },
    alternates: {
      canonical: './',
    },
    openGraph: {
      title: post.frontmatter.title,
      description: post.frontmatter.description,
      type: 'article',
      url: `${siteConfig.url}/blog/${post.slug}`,
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

const PostPage = async ({ params }: PostPageProps) => {
  const post = await getPostFromParams(params);

  if (!post || !post.frontmatter.published) {
    notFound();
  }

  return (
    <div className="flex min-h-full w-full flex-col">
      <div className="flex-1">
        <div className="py-6 lg:py-10">
          <div className="container mx-auto">
            <div className="relative flex flex-col justify-center xl:flex-row">

              {/* Left sidebar - Table of Contents */}
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
                      readingTime={post.frontmatter.readingTime}
                    />

                    <Separator className="h-px bg-primary/10" />

                    <div className="prose prose-lg max-w-none dark:prose-invert">
                      <CustomMDX
                        source={post.content}
                        options={{
                          mdxOptions: {
                            remarkPlugins: [remarkToc],
                            rehypePlugins: [
                              rehypeSlug,
                              [rehypePrettyCode, {
                                theme: 'github-dark-default',
                                keepBackground: true,
                                onVisitLine(node: LineElement) {
                                  // Prevent empty lines from collapsing
                                  if (node.children.length === 0) {
                                    node.children = [{ type: 'text', value: ' ' }];
                                  }
                                },
                              }],
                              [
                                rehypeAutolinkHeadings,
                                {
                                  behavior: 'wrap',
                                  properties: {
                                    className: ['subheading-anchor'],
                                    ariaLabel: 'Link to section',
                                  },
                                },
                              ],
                            ],
                          },
                        }}
                      />
                    </div>
                    <Separator className="h-px bg-primary/10" />
                  </div>
                </article>
              </main>

              {/* Right sidebar */}
              <aside className="hidden w-[200px] shrink-0 xl:block">
              </aside>
            </div>

            {/* Mobile Table of Contents - Hidden on Mobile */}
            {/* <div className="mt-8 xl:hidden">
              <TableOfContents toc={post.frontmatter.toc} />
            </div> */}
          </div>
        </div>
      </div>
      <PostFooter title={post.frontmatter.title} slug={post.slug} />
    </div>
  );
};

export default PostPage;
