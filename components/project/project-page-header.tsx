// src/components/blog/post-header.tsx
import { LuCalendar, LuClock } from 'react-icons/lu';
import { formatDate } from '@/lib/utils';
// import { Tag } from './tag';
import { Tech } from './tech';

interface ProjectPageHeaderProps {
  title: string;
  date: string;
  readingTime?: number;
  tech?: string[];
  description?: string;
}

export function ProjectPageHeader({
  title,
  date,
  readingTime = 0,
  tech,
}: ProjectPageHeaderProps) {
  return (
    <div className="space-y-10">
      {/* Title Section */}
      <div className="space-y-4">
        <h1 className="font-heading text-4xl font-bold tracking-tight text-foreground lg:text-5xl">
          {title}
        </h1>
      </div>

      {/* Meta Information */}
      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <LuCalendar className="h-4 w-4" />
            <time dateTime={date}>{formatDate(date)}</time>
          </div>
          {/* Separator between date and reading time */}
          <div className="text-muted-foreground">|</div>
          <div className="flex items-center gap-2 transition-colors hover:text-primary">
            <LuClock className="h-4 w-4" />
            <span>{readingTime} min read</span>
          </div>
        </div>

        {tech?.length ? (
          <div className="-mt-2 flex flex-wrap gap-2">
            {tech.map((tech) => (
              <Tech key={tech} tech={tech} />
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}
