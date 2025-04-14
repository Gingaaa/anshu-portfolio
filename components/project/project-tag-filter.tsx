'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { getAllProjectTags, sortTagsByCount } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { FaFilter } from 'react-icons/fa6';

interface ProjectTagFilterProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export function ProjectTagFilter({ searchParams }: ProjectTagFilterProps) {
  const router = useRouter();
  const params = searchParams;
  const tagParam = params?.tag;
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

//   const [blogData, setBlogData] = useState<MdxBlogs[]>([]);
  // State for tags
  const [tags, setTags] = useState<Record<string, number>>({});
  const [sortedTags, setSortedTags] = useState<string[]>([]);

  const handleValueChange = (value: string) => {
    if (value === 'all') {
      router.push('/project');
    } else {
      router.push(`/project?tag=${value}`);
    }
  };

  // Fetch projects and process tags
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/api/projects');
        if (!response.ok) throw new Error('Failed to fetch projects');
        const projects = await response.json();

        // Now that we have the actual project data, we can get the tags
        const projectTags = getAllProjectTags(projects);
        setTags(projectTags);
        setSortedTags(sortTagsByCount(projectTags));
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <FaFilter className="h-4 w-4" aria-hidden="true" />
        <span>Filter:</span>
      </div>
      <Select
        value={selectedTag || 'all'}
        onValueChange={handleValueChange}
        aria-label="Filter projects by tag"
      >
        <SelectTrigger
          className="w-[180px] border-none bg-transparent px-2 shadow-none hover:bg-accent focus:ring-0 focus:ring-offset-0"
          aria-label="Select tag to filter posts"
        >
          <SelectValue placeholder="All Tags" />
        </SelectTrigger>
        <SelectContent align="end" className="max-h-[200px]">
          <SelectItem value="all" className="font-medium">
            All Tags
          </SelectItem>
          {sortedTags.map((tag) => (
            <SelectItem
              key={tag}
              value={tag}
              className="flex items-center justify-between"
            >
              <span>{tag}</span>
              <span className="ml-2 text-xs text-muted-foreground">
                ({tags[tag]})
              </span>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
