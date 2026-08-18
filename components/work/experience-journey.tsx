"use client";

import { motion } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { FaBuilding } from "react-icons/fa6";

type Experience = {
  title: string;
  company: string;
  period: string;
  description: string;
  technologies?: string[];
};

interface ExperienceJourneyProps {
  experiences: Experience[];
}

export function ExperienceJourney({ experiences }: ExperienceJourneyProps) {
  return (
    <div className="relative mx-auto mt-16 max-w-6xl">
      {/* Desktop journey line */}
      <JourneyLine count={experiences.length} />

      <div className="relative z-10 space-y-20 md:space-y-28">
        {experiences.map((experience, index) => (
          <ExperienceRow
            key={`${experience.company}-${experience.title}-${index}`}
            experience={experience}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}

function ExperienceRow({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  const isLeft = index % 2 === 0;

  return (
    <div className="relative grid min-h-[280px] items-center md:grid-cols-[1fr_100px_1fr]">
      {/* LEFT */}
      <div
        className={`
          ${isLeft ? "md:col-start-1" : "md:col-start-3"}
        `}
      >
        <ExperienceCard experience={experience} index={index} />
      </div>

      {/* CENTER SPACE */}
      <div className="hidden md:block md:col-start-2" />
    </div>
  );
}

function ExperienceCard({
  experience,
  index,
}: {
  experience: Experience;
  index: number;
}) {
  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 30,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.55,
        delay: 0.05,
      }}
      className="
        group
        relative
        w-full
        overflow-hidden
        rounded-2xl
        border
        border-border/70
        bg-background/70
        p-6
        text-left
        backdrop-blur-md
        transition-all
        duration-300

        hover:-translate-y-1
        hover:border-primary/50
        hover:bg-primary/[0.025]
        hover:shadow-[0_0_40px_hsl(var(--primary)/0.08)]
      "
    >
      {/* Small top glow */}
      <div
        className="
          pointer-events-none
          absolute
          inset-x-0
          top-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-primary/70
          to-transparent
          opacity-50
          transition-opacity
          duration-300
          group-hover:opacity-100
        "
      />

      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <div className="mb-2 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
            Experience {String(index + 1).padStart(2, "0")}
          </div>

          <h3 className="text-xl font-semibold tracking-tight">
            {experience.title}
          </h3>

          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <FaBuilding className="h-4 w-4 text-primary/80" />

            <span>{experience.company}</span>
          </div>
        </div>

        {/* Date */}
        <div
          className="
            inline-flex
            shrink-0
            items-center
            gap-2
            rounded-full
            border
            border-primary/20
            bg-primary/[0.04]
            px-3
            py-1.5
            text-xs
            font-medium
            text-muted-foreground
          "
        >
          <FaCalendarAlt className="h-3.5 w-3.5 text-primary" />

          <span>{experience.period}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-5 h-px bg-border/60" />

      {/* Description */}
      <p className="text-sm leading-7 text-muted-foreground">
        {experience.description}
      </p>

      {/* Technologies */}
      {experience.technologies && experience.technologies.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((technology, i) => (
            <span
              key={i}
              className="
                  rounded-full
                  border
                  border-primary/20
                  bg-primary/[0.04]
                  px-2.5
                  py-1
                  text-[11px]
                  font-medium
                  text-primary
                  transition-colors
                  duration-200
                  group-hover:border-primary/30
                "
            >
              {technology}
            </span>
          ))}
        </div>
      )}
    </motion.article>
  );
}

function JourneyLine({ count }: { count: number }) {
  if (count < 2) return null;

  const rowHeight = 340;
  const topPadding = 170;
  const height = topPadding * 2 + (count - 1) * rowHeight;

  const points = Array.from({ length: count }, (_, index) => {
    const y = topPadding + index * rowHeight;

    // Only a very small horizontal movement.
    const x = index % 2 === 0 ? 49 : 51;

    return {
      x,
      y,
    };
  });

  let path = `M ${points[0].x} ${points[0].y}`;

  for (let i = 1; i < points.length; i++) {
    const previous = points[i - 1];
    const current = points[i];

    const midY = (previous.y + current.y) / 2;

    path += `
      C
      ${previous.x} ${midY - 55},
      ${current.x} ${midY + 55},
      ${current.x} ${current.y}
    `;
  }

  return (
    <svg
      aria-hidden="true"
      className="
        pointer-events-none
        absolute
        inset-0
        hidden
        h-full
        w-full
        overflow-visible
        md:block
      "
      viewBox={`0 0 100 ${height}`}
      preserveAspectRatio="none"
    >
      {/* Glow */}
      <path
        d={path}
        fill="none"
        stroke="hsl(var(--primary) / 0.08)"
        strokeWidth="8"
        vectorEffect="non-scaling-stroke"
      />

      {/* Main line */}
      <path
        d={path}
        fill="none"
        stroke="hsl(var(--primary) / 0.55)"
        strokeWidth="1.2"
        vectorEffect="non-scaling-stroke"
      />

      {/* Nodes */}
      {points.map((point, index) => (
        <g key={index}>
          <circle
            cx={point.x}
            cy={point.y}
            r="7"
            fill="hsl(var(--background))"
            stroke="hsl(var(--primary) / 0.8)"
            strokeWidth="1.5"
            vectorEffect="non-scaling-stroke"
          />

          <circle
            cx={point.x}
            cy={point.y}
            r="2.5"
            fill="hsl(var(--primary))"
          />
        </g>
      ))}
    </svg>
  );
}
