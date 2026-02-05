import { EmotionResult } from "./types";
import { emotionConfig } from "./constants";

interface MobileEmotionResultsProps {
  emotions: EmotionResult[];
}

export function MobileEmotionResults({ emotions }: MobileEmotionResultsProps) {
  return (
    <div className="lg:hidden mt-8">
      <div className="bg-white rounded-2xl shadow-lg p-6">
        <h3
          className="font-semibold mb-4 flex items-center gap-2"
          style={{ color: "var(--primary-purple)" }}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
          Your Emotions
        </h3>
        <div className="space-y-4">
          {emotions.map((emotion, idx) => {
            const percentage = emotion.score * 100;
            const config = emotionConfig[emotion.label.toLowerCase()] || {
              color: "var(--primary-purple)",
              bg: "var(--light-purple)",
              emoji: "💭",
            };
            return (
              <div key={idx}>
                <div className="flex items-center justify-between mb-1">
                  <span className="flex items-center gap-2">
                    <span>{config.emoji}</span>
                    <span className="text-sm font-medium capitalize">
                      {emotion.label}
                    </span>
                  </span>
                  <span
                    className="text-sm font-bold"
                    style={{ color: config.color }}
                  >
                    {percentage.toFixed(1)}%
                  </span>
                </div>
                <div
                  className="h-1.5 rounded-full overflow-hidden"
                  style={{ background: config.bg }}
                >
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{
                      width: `${percentage}%`,
                      background: config.color,
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
