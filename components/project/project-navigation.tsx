import Link from 'next/link';
import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { LuChevronLeft } from 'react-icons/lu';

interface ProjectNavigationProps {
  className?: string;
}

export function ProjectNavigation({ className }: ProjectNavigationProps) {
  return (
    <div className={cn('flex justify-start w-full', className)}>
      <Link
        href="/project"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'gap-2 text-muted-foreground hover:text-primary',
        )}
      >
        <LuChevronLeft className="h-4 w-4" />
        See all projects
      </Link>
    </div>
  );
}
