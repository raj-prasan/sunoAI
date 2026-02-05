
import { Component } from "@/components/loding";
import { EmotionResult } from "./types";
import { emotionConfig } from "./constants";
import storeJournal from "@/hooks/storeJournal";
interface AnalysisSidebarProps {
  isAnalyzing: boolean;
  emotions: EmotionResult[] | null;
  error: string | null;
  analyzeEmotions: () => void;
}

export function AnalysisSidebar({
  isAnalyzing,
  emotions,
  error,
  analyzeEmotions,
}: AnalysisSidebarProps) {
  return (
    <div className="hidden lg:block w-80 shrink-0">
      <div
        className="bg-white rounded-3xl shadow-xl overflow-hidden sticky top-6"
        style={{
          boxShadow: "0 20px 40px -12px rgba(124, 58, 237, 0.12)",
        }}
      >
        {/* Sidebar Header */}
        <div
          className="px-6 py-5"
          style={{
            background:
              "linear-gradient(135deg, var(--yellow-bright) 0%, var(--secondary-yellow) 100%)",
          }}
        >
          <h3
            className="text-xl md:text-2xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-dark)",
            }}
          >
            Lets's{" "}
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-purple)",
              }}
            >
              see
              <br />
            </span>{" "}
            how you
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--secondary-)",
              }}
            >
              {" "}
              feel today.
            </span>
          </h3>
        </div>

        {/* Sidebar Content */}
        <div className="p-6">
          {/* Empty State */}
          {!emotions && !isAnalyzing && !error && (
            <div className="text-center py-8">
              <p
                className="text-sm font-medium mb-2"
                style={{ color: "var(--text-dark)" }}
              >
                Ready to analyze
              </p>
              <p
                className="text-xs"
                style={{ color: "var(--text-dark)", opacity: 0.5 }}
              >
                Write your thoughts and click analyze to discover your emotional
                patterns
              </p>
            </div>
          )}

          {/* Loading State */}
          {isAnalyzing && <Component />}

          {/* Emotion Results with Progress Bars */}
          {emotions && !isAnalyzing && (
            <div className="space-y-5">
              {emotions.map((emotion, idx) => {
                const percentage = emotion.score * 100;
                const config = emotionConfig[emotion.label.toLowerCase()] || {
                  color: "var(--primary-purple)",
                  bg: "var(--light-purple)",
                  emoji: "💭",
                };
                return (
                  <div key={idx} className="group">
                    {/* Emotion Label Row */}
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <span
                          className="w-8 h-8 rounded-lg flex items-center justify-center text-sm"
                          style={{ background: config.bg }}
                        >
                          {config.emoji}
                        </span>
                        <span
                          className="text-sm font-semibold capitalize"
                          style={{ color: "var(--text-dark)" }}
                        >
                          {emotion.label}
                        </span>
                      </div>
                      <span
                        className="text-sm font-bold"
                        style={{ color: config.color }}
                      >
                        {percentage.toFixed(1)}%
                      </span>
                    </div>

                    {/* Progress Bar Container */}
                    <div
                      className="h-2 rounded-full overflow-hidden"
                      style={{ background: config.bg }}
                    >
                      {/* Progress Bar Fill */}
                      <div
                        className="h-full rounded-full transition-all duration-700 ease-out"
                        style={{
                          width: `${percentage}%`,
                          background: `linear-gradient(90deg, ${config.color} 0%, ${config.color}dd 100%)`,
                          boxShadow: `0 0 8px ${config.color}40`,
                        }}
                      />
                    </div>
                  </div>
                );
              })}

              {/* Divider */}
              <div className="border-t border-gray-100 my-4"></div>

              {/* Summary */}
              <div
                className="p-4 rounded-2xl"
                style={{ background: "var(--bg-lavender)" }}
              >
                <p
                  className="text-xs font-medium mb-1"
                  style={{ color: "var(--primary-purple)" }}
                >
                  Primary Emotion
                </p>
                <p
                  className="text-lg font-bold capitalize"
                  style={{ color: "var(--text-dark)" }}
                >
                  {emotions[0]?.label || "Unknown"}
                </p>
              </div>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="text-center py-8">
              <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-red-50 flex items-center justify-center">
                <span className="text-3xl">😕</span>
              </div>
              <p className="text-sm text-red-500 font-medium">{error}</p>
              <button
                onClick={analyzeEmotions}
                className="mt-3 text-xs text-purple-600 hover:underline"
              >
                Try again
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
