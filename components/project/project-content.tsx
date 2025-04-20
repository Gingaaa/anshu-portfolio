import { QueryPagination } from '@/components/query-pagination';
import { sortProjects } from '@/lib/utils';
import { Suspense } from 'react';
import { getProjects } from '@/lib/fetchmdx';
import { MdxProject } from '@/types/profile';
import { projectConfig } from '@/config/project';
import { ProjectCard } from './project-card';

interface ProjectContentProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export async function ProjectContent({ searchParams }: ProjectContentProps) {
  const projects = await getProjects();
  const publishedProject = projects.filter((post: MdxProject) => post.frontmatter.featured);
  const params = searchParams;
  const pageParam = params?.page;
  const tagParam = params?.tag;

  const page = typeof pageParam === 'string' ? Number(pageParam) : 1;
  const currentPage = Math.max(1, page);
  const selectedTag = typeof tagParam === 'string' ? tagParam : undefined;

  const filteredProject = selectedTag
    ? publishedProject.filter((post) => post.frontmatter.tech?.includes(selectedTag))
    : publishedProject;
  const sortedProjects = sortProjects(filteredProject);
  const totalProjects = Math.ceil(sortedProjects.length / projectConfig.projectsPerPage);

  const displayProject = sortedProjects.slice(
    (currentPage - 1) * projectConfig.projectsPerPage,
    currentPage * projectConfig.projectsPerPage,
  );

  if (currentPage > totalProjects) {
    return (
      <div>
        <h2 className="text-2xl font-bold">Projects not found</h2>
        <p className="mt-4">This page will be updated soon...</p>
      </div>
    );
  }

  return (
    <Suspense fallback={<div>Loading projects...</div>}>
      {displayProject.length > 0 ? (
        <div className="space-y-8">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {displayProject.map((post:MdxProject) => (
              <ProjectCard key={post.slug} post={post} />
            ))}
          </div>
          <QueryPagination
            totalPages={totalProjects}
            className="flex justify-center"
          />
        </div>
      ) : (
        <p className="text-muted-foreground">Projects will be added soon...</p>
      )}
    </Suspense>
  );
}
