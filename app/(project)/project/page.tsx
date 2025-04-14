// // src/app/work/page.tsx
// import { Metadata } from 'next';
// import { siteConfig } from '@/config/site';
// import { ProjectsShowcase } from '@/components/work/projects-showcase';

// export const metadata: Metadata = {
//   title: 'My personal Projects',
//   description: `${siteConfig.name}'s  projects`,
// };

// interface WorkPageProps {
//   searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
// }

// export default async function WorkPage({ searchParams }: WorkPageProps) {
//   const resolvedSearchParams = await searchParams;

//   return (
//     <section className="container !max-w-6xl py-10">
//       <div className="mt-16 space-y-6">
//         <h1 className="font-sans text-2xl font-bold tracking-tight sm:text-3xl">
//           Featured Projects
//         </h1>
//         <ProjectsShowcase searchParams={resolvedSearchParams} />
//       </div>
//     </section>
//   );
// }




// src/app/blog/page.tsx
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { ProjectHeader } from '@/components/project/project-header';
import { ProjectTagFilter } from '@/components/project/project-tag-filter';
import { ProjectContent } from '@/components/project/project-content';

export const metadata: Metadata = {
  title: 'Project',
  description: `${siteConfig.name}'s Project`,
};

interface ProjectPageProps {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function ProjectPage({ searchParams }: ProjectPageProps) {
  const resolvedSearchParams = await searchParams;

  return (
    <section className="container !max-w-6xl py-10">
      <ProjectHeader />
      <div className="mt-8 space-y-6">
        <div className="flex justify-center md:justify-end">
          <ProjectTagFilter searchParams={resolvedSearchParams} />
        </div>
        <ProjectContent searchParams={resolvedSearchParams} />
      </div>
    </section>
  );
}

