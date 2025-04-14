import { ProjectConfig } from "@/types/project";

export const projectConfig: ProjectConfig = {
    projectsPerPage: 6,
    maxDescriptionLength: 160,
    ogImageSize: {
      width: 1200,
      height: 630,
    },
  } as const;