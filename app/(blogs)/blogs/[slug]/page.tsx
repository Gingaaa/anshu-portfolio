import { siteConfig } from "@/config/site";
import { getAllBlogSlug, getBlogBySlug } from "@/lib/fetchmdx"
import { Metadata } from "next";


interface ProjectPageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return getAllBlogSlug()
}

export async function generateMetadata({
    params,
}: ProjectPageProps): Promise<Metadata> {
    const resolvedParams = await params;
    const project = await getBlogBySlug(resolvedParams.slug);

    if (!project) {
        return {};
    }

    const ogSearchParams = new URLSearchParams();
    ogSearchParams.set('title', project.frontmatter.title);

    return {
        title: project.frontmatter.title,
        description: project.frontmatter.description,
        authors: { name: siteConfig.author.name },
        openGraph: {
            title: project.frontmatter.title,
            description: project.frontmatter.description,
            type: 'article',
            url: project.slug,
            images: [
                {
                    url: '/api/og',
                    width: 1200,
                    height: 630,
                    alt: project.frontmatter.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: project.frontmatter.title,
            description: project.frontmatter.description,
            images: ['/api/og'],
        },
    };
}

export default async function BlogPage({
    params,
}: {
    params: { slug: string }
}) {
    const blog = await getBlogBySlug(params.slug)
    return (
        <main className="prose">
            <article>{blog.content}</article>
        </main>
    )
}
