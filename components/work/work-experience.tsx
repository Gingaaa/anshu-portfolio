// src/components/work/work-experience.tsx
import { ExperienceCard } from '@/components/work/experience-card';
import { getWorks } from '@/lib/fetchmdx';
import { getDuration, sortWorkExperience } from '@/lib/utils';
// import { work_experience } from 'generated/content';

export async function WorkExperience() {
  let experiences = await getWorks();
  experiences = sortWorkExperience(experiences);

  return (
    <div className="mt-12">
      <div
        className="relative space-y-8 before:absolute
  before:left-[190px] before:top-[2.5rem] before:hidden before:h-[calc(100%-5rem)]
  before:w-[1px] before:bg-border md:space-y-12 md:before:block"
      >
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.frontmatter.title}
            company={experience.frontmatter.company}
            period={getDuration(experience.frontmatter.startDate, experience.frontmatter.endDate)}
            description={experience.frontmatter.description}
            technologies={experience.frontmatter.skills}
          />
        ))}
      </div>
    </div>
  );
}
