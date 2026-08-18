"use client";

import { useEffect, useRef } from "react";
import type { CSSProperties } from "react";

export default function CursorRevealBackground() {
  const backgroundRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const background = backgroundRef.current;

    if (!background) return;

    const handleMouseMove = (event: MouseEvent) => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }

      frameRef.current = requestAnimationFrame(() => {
        background.style.setProperty(
          "--mouse-x",
          `${event.clientX}px`
        );

        background.style.setProperty(
          "--mouse-y",
          `${event.clientY}px`
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const backgroundStyle = {
    "--mouse-x": "-1000px",
    "--mouse-y": "-1000px",

    WebkitMaskImage:
      "radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 0%, black 55%, transparent 100%)",

    maskImage:
      "radial-gradient(circle 150px at var(--mouse-x) var(--mouse-y), black 0%, black 55%, transparent 100%)",

    WebkitMaskRepeat: "no-repeat",
    maskRepeat: "no-repeat",
  } as CSSProperties & Record<string, string>;

  return (
    <div
      ref={backgroundRef}
      aria-hidden="true"
      className="
        pointer-events-none
        fixed inset-0
        z-0
        hidden md:block
        bg-center
        bg-no-repeat
        bg-cover
        bg-[url('/images/rhombus-background.png')]
        opacity-[0.5]
      "
      style={backgroundStyle}
    />
  );
}