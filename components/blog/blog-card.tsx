// src/components/blog/blog-card.tsx
// import { Post } from 'generated/content';
import { formatDate } from '@/lib/utils';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';
import { LuCalendar } from 'react-icons/lu';
import Link from 'next/link';
import { Tag } from '@/components/blog/tag';
import { MdxBlogs } from '@/types/profile';
import { blogConfig } from '@/config/blog';

interface PostCardProps {
  post: MdxBlogs;
}

export function BlogCard({ post }: PostCardProps) {
  const { slug, frontmatter } = post;

  const truncatedDescription =
  frontmatter.description && frontmatter.description.length > blogConfig.maxDescriptionLength
      ? `${frontmatter.description.substring(0, blogConfig.maxDescriptionLength)}...`
      : frontmatter.description;

  return (
    <Card className="group flex h-full flex-col transition-colors hover:border-primary/50">
      <CardHeader className="flex-none space-y-4">
        <div>
          <Link
            href={`/blog/${slug}`}
            className="inline-block text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl"
          >
            {frontmatter.title}
          </Link>
          {frontmatter.tags && frontmatter.tags.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag) => (
                <Tag key={tag} tag={tag} />
              ))}
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent className="flex-grow">
        {truncatedDescription && (
          <p className="line-clamp-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            {truncatedDescription}
          </p>
        )}
      </CardContent>
      <CardFooter className="flex-none border-t pt-6">
        <div className="flex w-full flex-wrap items-center justify-between gap-4 md:gap-0">
          {/* Date and Reading Time */}
          <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <LuCalendar className="h-4 w-4" />
              <time dateTime={frontmatter.date}>{formatDate(frontmatter.date)}</time>
            </div>
            {/* <div className="hidden md:inline">|</div>
            <div className="flex items-center gap-2">
              <LuClock className="h-4 w-4" />
              <span>{frontmatter.readingTime} min read</span>
            </div> */}
          </div>

          {/* Read More Link */}
          <Link
            href={`/blog/${slug}`}
            className="text-sm font-medium text-primary hover:text-primary/80"
          >
            Read more ➔
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
}
