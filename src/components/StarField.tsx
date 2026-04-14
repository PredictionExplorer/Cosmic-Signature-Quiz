"use client";

import { useMemo } from "react";

type Star = { left: string; top: string; size: number; duration: number; delay: number };

function makeStars(count: number, seed: number): Star[] {
  const stars: Star[] = [];
  let s = seed;
  const rnd = () => {
    s = (s * 1103515245 + 12345) & 0x7fffffff;
    return s / 0x7fffffff;
  };
  for (let i = 0; i < count; i += 1) {
    stars.push({
      left: `${rnd() * 100}%`,
      top: `${rnd() * 100}%`,
      size: rnd() * 2 + 0.5,
      duration: 2 + rnd() * 4,
      delay: rnd() * 5,
    });
  }
  return stars;
}

export function StarField() {
  const layers = useMemo(
    () => ({
      far: makeStars(80, 42),
      mid: makeStars(45, 99),
      near: makeStars(22, 7),
    }),
    [],
  );

  return (
    <div
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_120%_80%_at_50%_-20%,rgba(6,182,212,0.12),transparent_55%),radial-gradient(ellipse_80%_50%_at_100%_50%,rgba(249,115,22,0.06),transparent_50%),radial-gradient(ellipse_60%_40%_at_0%_80%,rgba(245,158,11,0.05),transparent_45%)]" />
      {(["far", "mid", "near"] as const).map((layer) => (
        <div
          key={layer}
          className={
            layer === "far"
              ? "absolute inset-0 animate-drift opacity-60"
              : layer === "mid"
                ? "absolute inset-0 opacity-75"
                : "absolute inset-0 opacity-90"
          }
        >
          {layers[layer].map((star, i) => (
            <span
              key={`${layer}-${i}`}
              className="animate-twinkle absolute rounded-full bg-white"
              style={{
                left: star.left,
                top: star.top,
                width: star.size,
                height: star.size,
                ["--twinkle-duration" as string]: `${star.duration}s`,
                animationDelay: `${star.delay}s`,
                opacity: layer === "near" ? 0.9 : 0.5,
              }}
            />
          ))}
        </div>
      ))}
    </div>
  );
}
