"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { Component } from "@/components/loding";
import { Smile } from "lucide-react";

interface JournalEditorProps {
  sessionId: string;
}

interface EmotionResult {
  label: string;
  score: number;
}

// Emotion colors and emojis for visual appeal
const emotionConfig: Record<
  string,
  { color: string; bg: string; emoji: string }
> = {
  joy: { color: "#F59E0B", bg: "#FEF3C7", emoji: "😊" },
  sadness: { color: "#7C3AED", bg: "#EDE9FE", emoji: "😢" },
  anger: { color: "#EF4444", bg: "#FEE2E2", emoji: "😠" },
  fear: { color: "#6366F1", bg: "#E0E7FF", emoji: "😨" },
  surprise: { color: "#F97316", bg: "#FFEDD5", emoji: "😮" },
  disgust: { color: "#10B981", bg: "#D1FAE5", emoji: "🤢" },
  neutral: { color: "#6B7280", bg: "#F3F4F6", emoji: "😐" },
};

// Minimum characters before auto-analysis triggers
const MIN_CHARS_FOR_ANALYSIS = 15;
// Debounce delay in milliseconds
const DEBOUNCE_DELAY = 1500;

export default function JournalEditor({ sessionId }: JournalEditorProps) {
  const [journalText, setJournalText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [emotions, setEmotions] = useState<EmotionResult[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  // Track last analyzed text to avoid redundant API calls
  const lastAnalyzedText = useRef<string>("");
  // Debounce timer ref
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);

  // Memoized analyze function that can be called with specific text
  const analyzeText = useCallback(async (text: string) => {
    if (!text.trim() || text.length < MIN_CHARS_FOR_ANALYSIS) return;

    // Don't re-analyze the same text
    if (text === lastAnalyzedText.current) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch("/api/emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data.success) {
        setEmotions(data.emotions);
        lastAnalyzedText.current = text;
      } else {
        setError(data.error || "Analysis failed");
      }
    } catch (err) {
      setError("Failed to analyze. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  }, []);

  // Debounced auto-analysis effect
  useEffect(() => {
    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }

    // Only set timer if there's enough text
    if (journalText.length >= MIN_CHARS_FOR_ANALYSIS) {
      debounceTimer.current = setTimeout(() => {
        analyzeText(journalText);
      }, DEBOUNCE_DELAY);
    }

    // Cleanup on unmount or text change
    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [journalText, analyzeText]);

  // Manual analyze function (for button click)
  const analyzeEmotions = async () => {
    if (!journalText.trim()) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const response = await fetch("/api/emotion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: journalText }),
      });

      const data = await response.json();

      if (data.success) {
        setEmotions(data.emotions);
      } else {
        setError(data.error || "Analysis failed");
      }
    } catch (err) {
      setError("Failed to analyze. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  // Get current date formatted
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div
      className="min-h-screen relative overflow-hidden"
      style={{ background: "var(--bg-lavender)" }}
    >
      {/* Decorative Blobs */}
      <div className="absolute top-20 left-10 w-64 h-64 blob-purple opacity-20 float"></div>
      <div className="absolute top-40 right-20 w-48 h-48 blob-yellow opacity-30 float-delayed"></div>
      <div className="absolute bottom-20 left-1/4 w-56 h-56 blob-lavender opacity-40 float"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 blob-purple opacity-15 float-delayed"></div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-10">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <div className="flex items-center gap-3">
              <div>
                <Link href={"/"}>
                  <Image src="/sunoAI.svg" alt="logo" width={110} height={80} />
                </Link>
              </div>
            </div>
          </div>

          {/* Title */}
          <h1
            className="text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-heading)",
              color: "var(--text-dark)",
            }}
          >
            Notice your{" "}
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-purple)",
              }}
            >
              feelings
              <br />
            </span>{" "}
            as they
            <span
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--secondary-yellow)",
              }}
            >
              {" "}
              unfold
            </span>
          </h1>

          {/* Subtitle with Session ID */}
          <p
            className="flex items-center justify-center gap-2 text-sm"
            style={{ color: "var(--text-dark)", opacity: 0.7 }}
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clipRule="evenodd"
              />
            </svg>
            Session: {sessionId}
          </p>
        </div>

        {/* Main Layout: Journal Card + Right Sidebar */}
        <div className="flex gap-8 items-start">
          {/* Journal Card - Takes full width on mobile, flex-1 on desktop */}
          <div className="flex-1 min-w-0">
            <div
              className="bg-white rounded-3xl shadow-xl overflow-hidden"
              style={{
                boxShadow: "0 25px 50px -12px rgba(124, 58, 237, 0.15)",
              }}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                {/* Window Controls */}
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>

                {/* Date Display */}
                <div className="text-right">
                  <p
                    className="text-sm font-medium"
                    style={{ color: "var(--text-dark)", opacity: 0.5 }}
                  >
                    {formattedDate}
                  </p>
                </div>
              </div>

              {/* Journal Content */}
              <div className="p-6 md:p-8">
                <textarea
                  value={journalText}
                  onChange={(e) => setJournalText(e.target.value)}
                  placeholder="Start writing your thoughts here... Express how you're feeling today."
                  className="w-full h-96 resize-none border-none outline-none text-lg leading-relaxed"
                  style={{
                    fontFamily: "var(--font-body)",
                    color: "var(--text-dark)",
                    background: "transparent",
                  }}
                />
              </div>

              {/* Card Footer with Button */}
              <div className="px-6 pb-6 flex justify-end">
                <button
                  className="btn-primary flex items-center gap-2"
                  onClick={analyzeEmotions}
                  disabled={isAnalyzing || !journalText.trim()}
                  style={{
                    opacity: isAnalyzing || !journalText.trim() ? 0.6 : 1,
                  }}
                >
                  {isAnalyzing ? (
                    <>
                      <svg className="w-5 h-5 animate-spin" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                        />
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    <>
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
                          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                        />
                      </svg>
                      Analyze Emotions
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar - Emotion Analysis */}
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
                      Write your thoughts and click analyze to discover your
                      emotional patterns
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
                      const config = emotionConfig[
                        emotion.label.toLowerCase()
                      ] || {
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
        </div>

        {/* Mobile Results - Shows below on smaller screens */}
        {emotions && (
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
        )}

        {/* Floating Tags */}
        <div
          className="absolute top-32 right-8 pill-tag float hidden xl:block"
          style={{
            background: "var(--secondary-yellow)",
            color: "var(--text-dark)",
          }}
        >
          Private
        </div>
        <div
          className="absolute top-48 right-24 pill-tag float-delayed hidden xl:block"
          style={{ background: "var(--accent-purple)", color: "white" }}
        >
          Secure
        </div>
      </div>
    </div>
  );
}
