import { X, Plus } from "lucide-react";

interface JournalTabsProps {
  journals: Array<{ text: string; createdAt: number; updatedAt: number }>;
  currentIndex: number;
  onTabClick: (index: number) => void;
  onNewJournal: () => void;
  onCloseTab?: (index: number) => void;
}

export function JournalTabs({
  journals,
  currentIndex,
  onTabClick,
  onNewJournal,
  onCloseTab,
}: JournalTabsProps) {
  const formatTime = (timestamp: number) => {
    const date = new Date(timestamp);
    const now = new Date();
    const isToday = date.toDateString() === now.toDateString();

    if (isToday) {
      return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
      });
    }
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    });
  };

  const getPreview = (text: string) => {
    if (!text.trim()) return "Untitled";
    return text.length > 20 ? text.substring(0, 20) + "..." : text;
  };

  return (
    <div className="flex items-center gap-2 mb-6 overflow-x-auto pb-2">
      {/* Journal Tabs */}
      {journals.map((journal, index) => (
        <button
          key={index}
          onClick={() => onTabClick(index)}
          className={`group relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-200 shrink-0 ${
            currentIndex === index
              ? "bg-white shadow-lg"
              : "bg-white/50 hover:bg-white/80"
          }`}
          style={{
            borderLeft:
              currentIndex === index
                ? "3px solid var(--primary-purple)"
                : "3px solid transparent",
          }}
        >
          <div className="flex flex-col items-start min-w-0">
            <span
              className={`text-sm font-semibold truncate max-w-[150px] ${
                currentIndex === index ? "text-purple-900" : "text-gray-700"
              }`}
            >
              {getPreview(journal.text)}
            </span>
            <span className="text-xs text-gray-500">
              {formatTime(journal.updatedAt)}
            </span>
          </div>

          {/* Close button - only show if there's more than one journal */}
          {journals.length > 1 && onCloseTab && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onCloseTab(index);
              }}
              className="opacity-0 group-hover:opacity-100 transition-opacity p-1 hover:bg-red-100 rounded-full"
            >
              <X className="w-3 h-3 text-red-500" />
            </button>
          )}
        </button>
      ))}

      {/* New Journal Button */}
      <button
        onClick={onNewJournal}
        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500 to-purple-600 text-white hover:from-purple-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl shrink-0"
      >
        <Plus className="w-4 h-4" />
        <span className="text-sm font-semibold">New Journal</span>
      </button>
    </div>
  );
}
