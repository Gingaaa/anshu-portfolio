'use client'; // This ensures the component is a Client Component

import React from 'react';
import { siteConfig } from '@/config/site';
import { LinkButton } from '../ui/link-button';

export function WorkHeader() {
  return (
    <div className="">
      {/* Title and description */}
      <div className="flex flex-col items-center justify-center text-center mb-8 gap-4">
        <h2 className="font-sans text-3xl font-bold tracking-tight sm:text-5xl md:text-5xl">
          Work
        </h2>
        <p className="text-lg text-muted-foreground text-center prose prose-lg mx-auto">
          Explore my professional journey and the projects I’ve built along the
          way. From crafting frontend and backend systems to tackling real-world
          challenges, here’s what I’ve been up to.
        </p>
      </div>

      {/* Buttons */}
      <div className="flex justify-center items-center gap-4 md:gap-6">
        {/* LinkedIn Button */}
        <LinkButton
          link={siteConfig.links.linkedin}
          iconPosition="right"
          size="lg"
        />

        {/* Resume Button */}
        <LinkButton
          link={siteConfig.links.resume}
          variant="outline"
          size="lg"
          ariaLabel="Resume"
        />
      </div>
    </div>
  );
}
