import { Dispatch, SetStateAction } from "react";

interface JournalInputProps {
  journalText: string;
  setJournalText: Dispatch<SetStateAction<string>>;
  isAnalyzing: boolean;
  analyzeEmotions: () => void;
  formattedDate: string;
}

export function JournalInput({
  journalText,
  setJournalText,
  isAnalyzing,
  analyzeEmotions,
  formattedDate,
}: JournalInputProps) {
  return (
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
  );
}
