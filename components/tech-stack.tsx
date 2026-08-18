"use client";
import { useState } from "react";
import { siteConfig } from "@/config/site";
import { IconType } from "react-icons";

type TechItem = {
  name: string;
  description: string;
  icon: IconType;
};

type TechCategory = {
  id: string;
  title: string;
  subtitle: string;
  items: TechItem[];
  accent: string;
};

const accentClasses = {
  cyan: {
    border: "border-cyan-400/30",
    glow: "group-hover:shadow-cyan-400/20",
    text: "text-cyan-400",
    line: "bg-cyan-400",
  },
  green: {
    border: "border-emerald-400/30",
    glow: "group-hover:shadow-emerald-400/20",
    text: "text-emerald-400",
    line: "bg-emerald-400",
  },
  purple: {
    border: "border-purple-400/30",
    glow: "group-hover:shadow-purple-400/20",
    text: "text-purple-400",
    line: "bg-purple-400",
  },
  orange: {
    border: "border-orange-400/30",
    glow: "group-hover:shadow-orange-400/20",
    text: "text-orange-400",
    line: "bg-orange-400",
  },
  pink: {
    border: "border-pink-400/30",
    glow: "group-hover:shadow-pink-400/20",
    text: "text-pink-400",
    line: "bg-pink-400",
  },
};

export default function TechStack() {
  const [activeTech, setActiveTech] = useState<string | null>(null);

  return (
    <section id="tech" className="relative overflow-hidden py-24 md:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/[0.03] blur-[120px]" />

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/[0.03] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-emerald-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Technology Network
          </div>

          <h2 className="font-sans text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            My Tech Stack
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
            The technologies, tools and platforms I use to build scalable
            digital experiences.
          </p>
        </div>

        {/* Network */}
        <div className="relative">
          {/* Desktop connectors */}
          <div className="pointer-events-none absolute inset-0 hidden lg:block">
            {/* Vertical center line */}
            <div className="absolute left-1/2 top-[28%] h-[44%] w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-emerald-400/40 to-transparent" />

            {/* Left connector */}
            <div className="absolute left-[27%] top-[28%] h-px w-[23%] bg-gradient-to-r from-transparent to-cyan-400/40" />

            {/* Right connector */}
            <div className="absolute right-[27%] top-[28%] h-px w-[23%] bg-gradient-to-l from-transparent to-emerald-400/40" />

            {/* Bottom connectors */}
            <div className="absolute left-1/2 top-[72%] h-[20%] w-px -translate-x-1/2 bg-gradient-to-b from-emerald-400/40 to-transparent" />

            <div className="absolute left-[20%] top-[72%] h-px w-[60%] bg-gradient-to-r from-transparent via-purple-400/20 to-transparent" />
          </div>

          {/* Top row */}
          <div className="relative z-10 grid gap-6 lg:grid-cols-[1fr_1.25fr_1fr]">
            {/* Frontend */}
            <TechCategoryCard
              category={siteConfig.skills[0]}
              activeTech={activeTech}
              setActiveTech={setActiveTech}
            />

            {/* Central node */}
            <div className="order-first flex items-center justify-center lg:order-none">
              <div className="relative">
                {/* outer rings */}
                <div className="absolute -inset-8 animate-[spin_18s_linear_infinite] rounded-full border-4 border-emerald-400/10 border-dashed" />

                <div className="absolute -inset-3 animate-pulse rounded-full border border-emerald-400" />

                <div className="relative flex h-44 w-44 flex-col items-center justify-center rounded-3xl border border-emerald-400/30 bg-background/80 shadow-[0_0_80px_rgba(16,185,129,0.08)] backdrop-blur-xl">
                  <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-lg font-bold text-emerald-400">
                    AK
                  </div>

                  <h3 className="text-lg font-bold">Anshu Kumar</h3>

                  <p className="mt-1 text-xs text-muted-foreground">
                    Full Stack Developer
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-[10px] uppercase tracking-widest text-emerald-400">
                    <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
                    System Online
                  </div>
                </div>
              </div>
            </div>

            {/* Backend */}
            <TechCategoryCard
              category={siteConfig.skills[1]}
              activeTech={activeTech}
              setActiveTech={setActiveTech}
            />
          </div>

          {/* Bottom categories */}
          <div className="relative z-10 mt-12 grid gap-6 md:grid-cols-3">
            <TechCategoryCard
              category={siteConfig.skills[2]}
              activeTech={activeTech}
              setActiveTech={setActiveTech}
            />

            <TechCategoryCard
              category={siteConfig.skills[3]}
              activeTech={activeTech}
              setActiveTech={setActiveTech}
            />

            <TechCategoryCard
              category={siteConfig.skills[4]}
              activeTech={activeTech}
              setActiveTech={setActiveTech}
            />
          </div>
        </div>

        {/* Footer */}
        <div className="mx-auto mt-12 flex max-w-2xl flex-col items-center justify-center gap-2 rounded-2xl border border-border/50 bg-background/50 px-6 py-4 text-center backdrop-blur">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Built with performance & scalability in mind
          </div>

          <p className="text-xs text-muted-foreground">
            20+ technologies · frontend · backend · cloud
          </p>
        </div>
      </div>
    </section>
  );
}

function TechCategoryCard({
  category,
  activeTech,
  setActiveTech,
}: {
  category: TechCategory;
  activeTech: string | null;
  setActiveTech: React.Dispatch<React.SetStateAction<string | null>>;
}) {
  const colors = accentClasses[category.accent as keyof typeof accentClasses];

  return (
    <div
      className={`group rounded-3xl border bg-background/60 p-4 backdrop-blur-xl transition-all duration-500 ${colors.border} ${
        activeTech ? "opacity-70" : "opacity-100"
      }`}
    >
      {/* Category heading */}
      <div className="mb-4 flex items-start justify-between">
        <div>
          <p
            className={`text-xs font-bold uppercase tracking-[0.15em] ${colors.text}`}
          >
            {category.title}
          </p>

          <p className="mt-1 text-xs text-muted-foreground">
            {category.subtitle}
          </p>
        </div>

        <span
          className={`rounded-full border px-2 py-1 text-[9px] uppercase tracking-wider ${colors.border} ${colors.text}`}
        >
          {category.items.length} tools
        </span>
      </div>

      {/* Technologies */}
      <div className="space-y-2">
        {category.items.map((tech) => {
          const selected = activeTech === tech.name;
          const Icon = tech.icon as IconType;
          return (
            <button
              key={tech.name}
              type="button"
              onMouseEnter={() => setActiveTech(tech.name)}
              onMouseLeave={() => setActiveTech(null)}
              className={`group/item flex w-full items-center gap-3 rounded-xl border border-border/50 bg-background/50 p-3 text-left transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/80 ${
                selected ? `${colors.border} ${colors.glow} shadow-lg` : ""
              }`}
            >
              {/* Icon */}
              <div
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-border/50 bg-background text-lg transition-all duration-300 ${colors.text} group-hover/item:scale-110`}
              >
                {/* {tech.icon} */}
                <Icon className="h-5 w-5" />
              </div>

              {/* Text */}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{tech.name}</p>

                <p className="mt-0.5 truncate text-[11px] text-muted-foreground">
                  {tech.description}
                </p>
              </div>

              {/* Connection indicator */}
              <span
                className={`h-1.5 w-1.5 rounded-full ${colors.line} opacity-30 transition-all duration-300 group-hover/item:scale-150 group-hover/item:opacity-100`}
              />
            </button>
          );
        })}
      </div>
    </div>
  );
}
