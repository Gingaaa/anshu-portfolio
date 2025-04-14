// import '@/styles/mdx.css';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import '../../../../styles/mdx.css';

import { siteConfig } from '@/config/site';
import { Separator } from '@/components/ui/separator';
import { getAllProjectSlug, getProjectBySlug } from '@/lib/fetchmdx';
import { CustomMDX } from '@/components/mdx-remote';
import React from 'react';
import rehypePrettyCode, { LineElement } from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkToc from 'remark-toc';
import { ProjectNavigation } from '@/components/project/project-navigation';
import { ProjectPageHeader } from '@/components/project/project-page-header';
import { ProjectFooter } from '@/components/project/project-page-footer';

interface ProjectPageProps {
  params: Promise<{
    slug: string[];
  }>;
}

export async function generateStaticParams() {
  const slug = await getAllProjectSlug(); // Destructure the slug array
  return slug.map((slugName) => ({ slug: slugName.slug }));
}

async function getProjectFromParams(params: ProjectPageProps['params']) {
  const resolvedParams = await params;
  const slug = resolvedParams?.slug?.join('/');
  return await getProjectBySlug(slug);
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const post = await getProjectFromParams(params);

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

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const post = await getProjectFromParams(params);

  if (!post || !post.frontmatter.featured) {
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
                <ProjectNavigation className="mb-8" />

                <article>
                  <div className="flex flex-col space-y-8">
                    <ProjectPageHeader
                      title={post.frontmatter.title}
                      date={post.frontmatter.date}
                      tech={post.frontmatter.tech}
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
      <ProjectFooter title={post.frontmatter.title} slug={post.slug} />
    </div>
  );
};

export default ProjectPage;
