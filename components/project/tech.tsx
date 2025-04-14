// src/components/blog/tag.tsx
import Link from 'next/link';
import { slug } from 'github-slugger';
import { badgeVariants } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TechProps {
  tech: string;
  current?: boolean;
  count?: number;
}

export function Tech({ tech, current, count }: TechProps) {
  const techSlug = slug(tech);
  const href = current ? '/project' : `/project?tech=${techSlug}`;

  return (
    <Link
      className={cn(
        badgeVariants({
          variant: current ? 'default' : 'secondary',
        }),
        'no-underline rounded-md hover:opacity-80 transition-all',
      )}
      href={href}
    >
      {tech} {count ? `(${count})` : null}
    </Link>
  );
}
