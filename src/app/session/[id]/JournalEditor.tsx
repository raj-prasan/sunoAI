"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { JournalEditorProps, EmotionResult, JournalEntry } from "./types";
import { MIN_CHARS_FOR_ANALYSIS, DEBOUNCE_DELAY } from "./constants";
import { JournalInput } from "./JournalInput";
import { AnalysisSidebar } from "./AnalysisSidebar";
import { MobileEmotionResults } from "./MobileEmotionResults";
import { JournalTabs } from "./JournalTabs";
import { EmotionReport } from "./EmotionReport";
import storeJournal from "@/hooks/storeJournal";
import getSessionWithJournals from "@/hooks/getJournal";
import MoodFace from "@/components/MoodFace";

export default function JournalEditor({ sessionId }: JournalEditorProps) {
  const [journals, setJournals] = useState<JournalEntry[]>([
    {
      text: "",
      emotions: undefined,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    },
  ]);
  const [currentJournalIndex, setCurrentJournalIndex] = useState(0);

  const [journalText, setJournalText] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [isAnalyzingMood, setIsAnalyzingMood] = useState(false);
  const [emotions, setEmotions] = useState<EmotionResult[] | null>(null);
  const [mood, setMood] = useState<number>(50);
  const [error, setError] = useState<string | null>(null);

  const lastAnalyzedText = useRef<string>("");
  const lastAnalyzedMoodText = useRef<string>("");
  const debounceTimer = useRef<NodeJS.Timeout | null>(null);
  const moodDebounceTimer = useRef<NodeJS.Timeout | null>(null);
  useEffect(() => {
    const currentJournal = journals[currentJournalIndex];
    if (currentJournal) {
      setJournalText(currentJournal.text);
      setEmotions(currentJournal.emotions || null);
      lastAnalyzedText.current = currentJournal.text;
    }
  }, [currentJournalIndex, journals]);

  const getJournalTextFromDataBase = async () => {
    const journals = await getSessionWithJournals(sessionId);
    setJournals(journals);
  };
  useEffect(() => {
    getJournalTextFromDataBase();
  }, []);
  // Save current journal to state
  const saveCurrentJournal = useCallback(() => {
    setJournals((prev) => {
      const updated = [...prev];
      updated[currentJournalIndex] = {
        ...updated[currentJournalIndex],
        text: journalText,
        emotions: emotions || undefined,
        updatedAt: Date.now(),
      };
      return updated;
    });
  }, [currentJournalIndex, journalText, emotions]);

  // Auto-save when switching journals
  const handleTabClick = async (index: number) => {
    if (index === currentJournalIndex) return;

    // Save current journal before switching
    saveCurrentJournal();

    // Save to database
    if (journalText.trim()) {
      await storeJournal(
        sessionId,
        currentJournalIndex,
        journalText,
        emotions || undefined,
      );
    }

    setCurrentJournalIndex(index);
  };

  // Create new journal
  const handleNewJournal = () => {
    // Save current journal first
    saveCurrentJournal();

    const newJournal: JournalEntry = {
      text: "",
      emotions: undefined,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    };

    setJournals((prev) => [...prev, newJournal]);
    setCurrentJournalIndex(journals.length);
    setJournalText("");
    setEmotions(null);
    setError(null);
    lastAnalyzedText.current = "";
  };

  const analyzeText = useCallback(
    async (text: string) => {
      if (!text.trim() || text.length < MIN_CHARS_FOR_ANALYSIS) return;

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
          await storeJournal(
            sessionId,
            currentJournalIndex,
            text,
            data.emotions,
          );
        } else {
          setError(data.error || "Analysis failed");
        }
      } catch (err) {
        setError("Failed to analyze. Please try again.");
      } finally {
        setIsAnalyzing(false);
      }
    },
    [sessionId, currentJournalIndex],
  );

  const analyzeMood = useCallback(async (text: string) => {
    if (!text.trim() || text.length < MIN_CHARS_FOR_ANALYSIS) return;

    if (text === lastAnalyzedMoodText.current) return;

    setIsAnalyzingMood(true);

    try {
      const response = await fetch("/api/sentiment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text }),
      });

      const data = await response.json();

      if (data.success) {
        setMood(data.emotions);
        lastAnalyzedMoodText.current = text;
      } else {
        console.error("Mood analysis failed:", data.error);
      }
    } catch (err) {
      console.error("Failed to analyze mood:", err);
    } finally {
      setIsAnalyzingMood(false);
    }
  }, []);

  // Debounced emotion analysis
  useEffect(() => {
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current);
    }
    if (journalText.length >= MIN_CHARS_FOR_ANALYSIS) {
      debounceTimer.current = setTimeout(() => {
        analyzeText(journalText);
      }, DEBOUNCE_DELAY);
    }

    return () => {
      if (debounceTimer.current) {
        clearTimeout(debounceTimer.current);
      }
    };
  }, [journalText, analyzeText]);

  // Debounced mood analysis (independent from emotion analysis)
  useEffect(() => {
    if (moodDebounceTimer.current) {
      clearTimeout(moodDebounceTimer.current);
    }
    if (journalText.length >= MIN_CHARS_FOR_ANALYSIS) {
      moodDebounceTimer.current = setTimeout(() => {
        analyzeMood(journalText);
      }, DEBOUNCE_DELAY);
    }

    return () => {
      if (moodDebounceTimer.current) {
        clearTimeout(moodDebounceTimer.current);
      }
    };
  }, [journalText, analyzeMood]);

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
        await storeJournal(
          sessionId,
          currentJournalIndex,
          journalText,
          data.emotions,
        );
      } else {
        setError(data.error || "Analysis failed");
      }
    } catch (err) {
      setError("Failed to analyze. Please try again.");
    } finally {
      setIsAnalyzing(false);
    }
  };

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

      <div className="absolute top-20 left-10 w-64 h-64 blob-purple opacity-20 float"></div>

      <div className="absolute top-90 left-20 opacity-100 float">
        <div className="relative">
          {isAnalyzingMood ? (
            <span className="text-xs">Analyzing mood...</span>
          ) : (
            <>
            <MoodFace value={mood} />
            <p className="text-xl font-semibold whitespace-nowrap"
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--secondary-yellow)",
              }}>
              Mood Score : {mood}
            </p>
            </>
          )}
          <div className="absolute -bottom-8 -right-3 flex items-center gap-2">
            <p
              className="text-3xl font-semibold whitespace-nowrap"
              style={{
                fontFamily: "var(--font-script)",
                color: "var(--primary-purple)",
              }}
            >
              Your current mood
            </p>
          </div>
        </div>
      </div>

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

        {/* Journal Tabs */}
        <JournalTabs
          journals={journals}
          currentIndex={currentJournalIndex}
          onTabClick={handleTabClick}
          onNewJournal={handleNewJournal}
        />

        {/* Emotion Analytics Report */}
        <EmotionReport journals={journals} />

        <div className="flex gap-8 items-start">
          <JournalInput
            journalText={journalText}
            setJournalText={setJournalText}
            isAnalyzing={isAnalyzing}
            analyzeEmotions={analyzeEmotions}
            formattedDate={formattedDate}
          />

          <AnalysisSidebar
            isAnalyzing={isAnalyzing}
            emotions={emotions}
            error={error}
            analyzeEmotions={analyzeEmotions}
          />
        </div>

        {emotions && <MobileEmotionResults emotions={emotions} />}
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
