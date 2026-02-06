import { useState } from "react";
import {
  TrendingUp,
  BookOpen,
  Sparkles,
  BarChart3,
  ChevronLeft,
  ChevronRight,
  Heart,
  Brain,
  Smile,
  SmileIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { EmotionResult, JournalEntry } from "./types";
import { emotionConfig } from "./constants";
interface EmotionReport {
  totalJournals: number;
  analyzedJournals: number;
  aggregatedEmotions: { label: string; score: number; percentage: number }[];
  dominantEmotion: { label: string; score: number; percentage: number } | null;
}

interface EmotionReportProps {
  journals: JournalEntry[];
}

export function EmotionReport({ journals }: EmotionReportProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Aggregate emotions across all journals
  const calculateReport = (): EmotionReport => {
    const totalJournals = journals.length;
    const analyzedJournals = journals.filter(
      (j) => j.emotions && j.emotions.length > 0,
    ).length;

    if (analyzedJournals === 0) {
      return {
        totalJournals,
        analyzedJournals: 0,
        aggregatedEmotions: [],
        dominantEmotion: null,
      };
    }

    // Aggregate emotions
    const emotionMap = new Map<string, number[]>();

    journals.forEach((journal) => {
      if (journal.emotions) {
        journal.emotions.forEach((emotion) => {
          const existing = emotionMap.get(emotion.label) || [];
          existing.push(emotion.score);
          emotionMap.set(emotion.label, existing);
        });
      }
    });

    // Calculate averages
    const aggregatedEmotions = Array.from(emotionMap.entries())
      .map(([label, scores]) => {
        const avgScore = scores.reduce((a, b) => a + b, 0) / scores.length;
        return { label, score: avgScore, count: scores.length };
      })
      .sort((a, b) => b.score - a.score);

    // Calculate percentages
    const totalEmotionInstances = aggregatedEmotions.reduce(
      (sum, e) => sum + e.count,
      0,
    );
    const emotionsWithPercentage = aggregatedEmotions.map((e) => ({
      label: e.label,
      score: e.score,
      percentage: (e.count / totalEmotionInstances) * 100,
    }));

    const dominantEmotion = emotionsWithPercentage[0] || null;

    return {
      totalJournals,
      analyzedJournals,
      aggregatedEmotions: emotionsWithPercentage,
      dominantEmotion,
    };
  };

  const report = calculateReport();

  const nextSlide = () => {
    if (currentSlide < 2) setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    if (currentSlide > 0) setCurrentSlide(currentSlide - 1);
  };

  const handleDialogOpen = (open: boolean) => {
    setIsDialogOpen(open);
    if (open) setCurrentSlide(0);
  };

  if (report.analyzedJournals === 0) {
    return null;
  }

  return (
    <>
      {/* Summary Card on Main Page */}
      <div
        className="rounded-3xl p-6 mb-6 shadow-xl border-2 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, var(--white) 0%, var(--bg-lavender) 100%)",
          borderColor: "var(--secondary-yellow)",
        }}
      >
        {/* Decorative blobs */}
        <div className="absolute -top-10 -right-10 w-32 h-32 blob-purple opacity-10 rounded-full"></div>
        <div className="absolute -bottom-8 -left-8 w-24 h-24 blob-yellow opacity-15 rounded-full"></div>

        <div className="flex items-center justify-between relative z-10">
          <div className="flex items-center gap-4 flex-1">
            {/* Icon */}
            <SmileIcon className="w-10 h-10" style={{ color: "var(--secondary-yellow)" }} />

            {/* Main Info */}
            <div className="flex-1">
              <h3
                className="text-xl font-bold flex items-center gap-2"
                style={{
                  fontFamily: "var(--font-script)",
                  color: "var(--text-dark)",
                }}
              >
                Emotion Analytics
              </h3>
              <p
                className="text-sm"
                style={{ color: "var(--text-dark)", opacity: 0.7 }}
              >
                {report.analyzedJournals} journal
                {report.analyzedJournals > 1 ? "s" : ""} analyzed
              </p>
            </div>

            {/* Dominant Emotion Badge */}
            {report.dominantEmotion && (
              <div
                className="hidden sm:flex items-center gap-3 px-5 rounded-2xl py-3  shadow-md"
                style={{
                  background:
                    "var(--white)",
                }}
              >
                <span className="text-3xl">
                  {emotionConfig[report.dominantEmotion.label.toLowerCase()]
                    ?.emoji || "💭"}
                </span>
                <div>
                  <p
                    className="text-xs font-semibold"
                    style={{
                      color:
                        emotionConfig[
                          report.dominantEmotion.label.toLowerCase()
                        ]?.color,
                    }}
                  >
                    Dominant Emotion
                  </p>
                  <p
                    className="text-base font-bold capitalize"
                    style={{
                      color:
                        emotionConfig[
                          report.dominantEmotion.label.toLowerCase()
                        ]?.color,
                    }}
                  >
                    {report.dominantEmotion.label}
                  </p>
                </div>
              </div>
            )}

            {/* View Report Button */}
            <button
              onClick={() => handleDialogOpen(true)}
              className="flex items-center gap-2 px-5 py-3 rounded-2xl text-white transition-all duration-200 shadow-lg hover:shadow-2xl shrink-0 transform hover:scale-105"
              style={{
                background:
                  "#FAF5EF"
              }}
            >
              <BarChart3 className="w-5 h-5 text-black" />
              <span
                className="text-sm font-bold text-black"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                View Report
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Detailed Report Dialog with Slides */}
      <Dialog open={isDialogOpen} onOpenChange={handleDialogOpen}>
        <DialogContent
          className="max-w-2xl max-h-[90vh] overflow-hidden"
          style={{ background: "var(--bg-lavender)" }}
        >
          <DialogHeader>
            <DialogTitle
              className="flex items-center gap-3 text-3xl"
              style={{
                fontFamily: "var(--font-heading)",
                color: "var(--text-dark)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, var(--primary-purple) 0%, var(--purple-dark) 100%)",
                }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              Emotion Analytics Report
            </DialogTitle>
            <DialogDescription
              style={{
                color: "var(--text-dark)",
                opacity: 0.7,
                fontFamily: "var(--font-body)",
              }}
            >
              {currentSlide === 0 && "Summary of your emotional patterns"}
              {currentSlide === 1 && "Detailed emotion breakdown"}
              {currentSlide === 2 && "Key insights from your journals"}
            </DialogDescription>
          </DialogHeader>

          {/* Slide Content */}
          <div className="mt-6 mb-6 overflow-y-auto max-h-[60vh]">
            {/* Slide 1: Summary Stats */}
            {currentSlide === 0 && (
              <div className="space-y-6 animate-fadeIn">
                <div className="grid grid-cols-3 gap-4">
                  {/* Total Journals Card */}
                  <div
                    className="rounded-2xl p-6 text-center shadow-lg border-2 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--light-purple) 0%, var(--accent-purple) 100%)",
                      borderColor: "var(--primary-purple)",
                    }}
                  >
                    <BookOpen
                      className="w-10 h-10 mx-auto mb-3"
                      style={{ color: "var(--purple-dark)" }}
                    />
                    <p
                      className="text-xs font-bold mb-2"
                      style={{
                        color: "var(--purple-dark)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Total Journals
                    </p>
                    <p
                      className="text-5xl font-bold"
                      style={{
                        color: "var(--purple-dark)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {report.totalJournals}
                    </p>
                  </div>

                  {/* Analyzed Card */}
                  <div
                    className="rounded-2xl p-6 text-center shadow-lg border-2 relative overflow-hidden"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--secondary-yellow) 0%, var(--yellow-bright) 100%)",
                      borderColor: "var(--yellow-bright)",
                    }}
                  >
                    <Sparkles
                      className="w-10 h-10 mx-auto mb-3"
                      style={{ color: "var(--purple-dark)" }}
                    />
                    <p
                      className="text-xs font-bold mb-2"
                      style={{
                        color: "var(--purple-dark)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      Analyzed
                    </p>
                    <p
                      className="text-5xl font-bold"
                      style={{
                        color: "var(--purple-dark)",
                        fontFamily: "var(--font-heading)",
                      }}
                    >
                      {report.analyzedJournals}
                    </p>
                  </div>

                  {/* Dominant Emotion Card */}
                  {report.dominantEmotion && (
                    <div
                      className="rounded-2xl p-6 text-center shadow-lg border-2"
                      style={{
                        background:
                          emotionConfig[
                            report.dominantEmotion.label.toLowerCase()
                          ]?.bg || "var(--bg-lavender)",
                        borderColor:
                          emotionConfig[
                            report.dominantEmotion.label.toLowerCase()
                          ]?.color,
                      }}
                    >
                      <span className="text-5xl block mb-3">
                        {emotionConfig[
                          report.dominantEmotion.label.toLowerCase()
                        ]?.emoji || "💭"}
                      </span>
                      <p
                        className="text-xs font-bold mb-2"
                        style={{
                          color:
                            emotionConfig[
                              report.dominantEmotion.label.toLowerCase()
                            ]?.color,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Dominant Emotion
                      </p>
                      <p
                        className="text-md font-bold capitalize"
                        style={{
                          color:
                            emotionConfig[
                              report.dominantEmotion.label.toLowerCase()
                            ]?.color,
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        {report.dominantEmotion.label}
                      </p>
                      <p
                        className="text-sm mt-2 font-semibold"
                        style={{
                          color:
                            emotionConfig[
                              report.dominantEmotion.label.toLowerCase()
                            ]?.color,
                          opacity: 0.8,
                        }}
                      >
                        {report.dominantEmotion.percentage.toFixed(1)}%
                      </p>
                    </div>
                  )}
                </div>

                {/* Decorative Message */}
                <div
                  className="text-center py-8 px-6 rounded-2xl"
                  style={{ background: "var(--white)" }}
                >
                  <p
                    style={{
                      color: "var(--text-dark)",
                      fontFamily: "var(--font-body)",
                      fontSize: "1rem",
                    }}
                  >
                    You've written{" "}
                    <span
                      className="font-bold"
                      style={{ color: "var(--primary-purple)" }}
                    >
                      {report.totalJournals}
                    </span>{" "}
                    journal{report.totalJournals > 1 ? "s" : ""} and analyzed{" "}
                    <span
                      className="font-bold"
                      style={{ color: "var(--yellow-bright)" }}
                    >
                      {report.analyzedJournals}
                    </span>{" "}
                    of them! 🎉
                  </p>
                </div>
              </div>
            )}

            {/* Slide 2: Emotion Distribution */}
            {currentSlide === 1 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart3
                    className="w-5 h-5"
                    style={{ color: "var(--primary-purple)" }}
                  />
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "var(--text-dark)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Emotion Distribution
                  </h3>
                </div>
                <div className="space-y-3">
                  {report.aggregatedEmotions
                    .slice(0, 10)
                    .map((emotion, idx) => {
                      const config = emotionConfig[
                        emotion.label.toLowerCase()
                      ] || {
                        color: "var(--primary-purple)",
                        bg: "var(--light-purple)",
                        emoji: "💭",
                      };
                      return (
                        <div
                          key={idx}
                          className="bg-white rounded-xl p-3 shadow-md"
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <span className="text-2xl">{config.emoji}</span>
                              <span
                                className="text-sm font-bold capitalize"
                                style={{
                                  color: "var(--text-dark)",
                                  fontFamily: "var(--font-heading)",
                                }}
                              >
                                {emotion.label}
                              </span>
                            </div>
                            <div className="flex items-center gap-4">
                              <span
                                className="text-xs font-semibold"
                                style={{
                                  color: "var(--text-dark)",
                                  opacity: 0.6,
                                }}
                              >
                                {emotion.percentage.toFixed(1)}%
                              </span>
                              <span
                                className="text-sm font-bold px-3 py-1 rounded-full"
                                style={{
                                  color: config.color,
                                  background: config.bg,
                                }}
                              >
                                {(emotion.score * 100).toFixed(0)}
                              </span>
                            </div>
                          </div>
                          <div
                            className="h-3 rounded-full overflow-hidden shadow-inner"
                            style={{ background: config.bg }}
                          >
                            <div
                              className="h-full rounded-full transition-all duration-700 ease-out"
                              style={{
                                width: `${emotion.percentage}%`,
                                background: config.color,
                              }}
                            />
                          </div>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}

            {/* Slide 3: Insights */}
            {currentSlide === 2 && (
              <div className="space-y-4 animate-fadeIn">
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles
                    className="w-5 h-5"
                    style={{ color: "var(--yellow-bright)" }}
                  />
                  <h3
                    className="text-lg font-bold"
                    style={{
                      color: "var(--text-dark)",
                      fontFamily: "var(--font-heading)",
                    }}
                  >
                    Key Insights
                  </h3>
                </div>

                {report.dominantEmotion && (
                  <div
                    className="rounded-2xl p-6 border-2 shadow-lg"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--light-purple) 0%, var(--bg-lavender) 100%)",
                      borderColor: "var(--primary-purple)",
                    }}
                  >
                    <div className="flex items-start gap-4">
                      <span className="text-5xl">💡</span>
                      <div>
                        <p
                          className="text-lg font-bold mb-2"
                          style={{
                            color: "var(--primary-purple)",
                            fontFamily: "var(--font-heading)",
                          }}
                        >
                          Dominant Emotion Pattern
                        </p>
                        <p
                          className="text-sm leading-relaxed"
                          style={{
                            color: "var(--text-dark)",
                            fontFamily: "var(--font-body)",
                          }}
                        >
                          You expressed{" "}
                          <span
                            className="font-bold capitalize"
                            style={{ color: "var(--primary-purple)" }}
                          >
                            {report.dominantEmotion.label}
                          </span>{" "}
                          {
                            emotionConfig[
                              report.dominantEmotion.label.toLowerCase()
                            ]?.emoji
                          }{" "}
                          in{" "}
                          <span
                            className="font-bold"
                            style={{ color: "var(--yellow-bright)" }}
                          >
                            {report.dominantEmotion.percentage.toFixed(1)}%
                          </span>{" "}
                          of your emotional expressions across{" "}
                          {report.analyzedJournals} journal
                          {report.analyzedJournals > 1 ? "s" : ""}.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div
                  className="rounded-2xl p-6 border-2 shadow-lg"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--secondary-yellow) 0%, var(--yellow-bright) 100%)",
                    borderColor: "var(--yellow-bright)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">📊</span>
                    <div>
                      <p
                        className="text-lg font-bold mb-2"
                        style={{
                          color: "var(--purple-dark)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Emotional Diversity
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--text-dark)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        You've expressed{" "}
                        <span
                          className="font-bold"
                          style={{ color: "var(--purple-dark)" }}
                        >
                          {report.aggregatedEmotions.length} different emotions
                        </span>{" "}
                        across your journals, showing a{" "}
                        {report.aggregatedEmotions.length > 5
                          ? "rich and diverse"
                          : "focused"}{" "}
                        emotional range! 🌈
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className="rounded-2xl p-6 border-2 shadow-lg"
                  style={{
                    background: "var(--white)",
                    borderColor: "var(--accent-purple)",
                  }}
                >
                  <div className="flex items-start gap-4">
                    <span className="text-5xl">✨</span>
                    <div>
                      <p
                        className="text-lg font-bold mb-2"
                        style={{
                          color: "var(--primary-purple)",
                          fontFamily: "var(--font-heading)",
                        }}
                      >
                        Journaling Progress
                      </p>
                      <p
                        className="text-sm leading-relaxed"
                        style={{
                          color: "var(--text-dark)",
                          fontFamily: "var(--font-body)",
                        }}
                      >
                        Keep up the great work! You've analyzed{" "}
                        <span
                          className="font-bold"
                          style={{ color: "var(--primary-purple)" }}
                        >
                          {Math.round(
                            (report.analyzedJournals / report.totalJournals) *
                              100,
                          )}
                          %
                        </span>{" "}
                        of your journals.
                        {report.analyzedJournals < report.totalJournals &&
                          " Consider analyzing more entries to gain deeper insights! 🚀"}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Navigation */}
          <div
            className="flex items-center justify-between pt-4 border-t-2"
            style={{ borderColor: "var(--light-purple)" }}
          >
            <Button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              variant={currentSlide === 0 ? "secondary" : "default"}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "600",
              }}
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="text-sm">Previous</span>
            </Button>

            {/* Slide Indicators */}
            <div className="flex items-center gap-2">
              {[0, 1, 2].map((idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`h-2 rounded-full transition-all ${
                    currentSlide === idx ? "w-8" : "w-2"
                  }`}
                  style={{
                    background:
                      currentSlide === idx
                        ? "var(--primary-purple)"
                        : "var(--light-purple)",
                  }}
                />
              ))}
            </div>

            <Button
              onClick={nextSlide}
              disabled={currentSlide === 2}
              variant={currentSlide === 2 ? "secondary" : "default"}
              style={{
                fontFamily: "var(--font-heading)",
                fontWeight: "600",
              }}
            >
              <span className="text-sm">Next</span>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}
