// src/app/work/page.tsx
import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { WorkHeader } from '@/components/work/work-header';
import { WorkExperience } from '@/components/work/work-experience';
// import { ProjectsShowcase } from '@/components/work/projects-showcase';

export const metadata: Metadata = {
  title: 'Work Experience and Projects',
  description: `${siteConfig.name}'s work experience and projects`,
};

export default async function WorkPage() {
  

  return (
    <section className="container !max-w-6xl py-10">
      <WorkHeader />
      <WorkExperience />
    </section>
  );
}
