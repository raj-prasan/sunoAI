"use client";
import { useMemo } from "react";

type Props = {
  value: number; // 0–100
};

export default function MoodFace({ value }: Props) {
  // convert 0–100 → -1 to +1
  const mood = useMemo(() => (value - 50) / 50, [value]);

  // mouth curve
  const mouthY = 60;
  const curve = 25 * mood; // controls smile amount

  const path = `
    M 30 ${mouthY}
    Q 50 ${mouthY + curve}
      70 ${mouthY}
  `;

  // eye openness
  const eyeScale = 1 - Math.max(-mood, 0) * 0.5;

  return (
    <svg
      width="160"
      height="160"
      viewBox="0 0 100 100"
      className="transition-all duration-500"
    >
      {/* face */}
      <circle cx="50" cy="50" r="45" fill="#FDE68A" />

      {/* eyes */}
      <ellipse cx="35" cy="40" rx="5" ry={5 * eyeScale} fill="#333" />
      <ellipse cx="65" cy="40" rx="5" ry={5 * eyeScale} fill="#333" />

      {/* mouth */}
      <path
        d={path}
        stroke="#333"
        strokeWidth="4"
        fill="transparent"
        strokeLinecap="round"
      />
    </svg>
  );
}
