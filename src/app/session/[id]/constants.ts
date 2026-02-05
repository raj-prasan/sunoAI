// Emotion colors and emojis for GoEmotions (28 classes)
export const emotionConfig: Record<
  string,
  { color: string; bg: string; emoji: string }
> = {
  admiration: { color: "#F59E0B", bg: "#FEF3C7", emoji: "🤩" },
  amusement: { color: "#F97316", bg: "#FFEDD5", emoji: "😂" },
  anger: { color: "#EF4444", bg: "#FEE2E2", emoji: "😠" },
  annoyance: { color: "#F87171", bg: "#FEF2F2", emoji: "🙄" },
  approval: { color: "#10B981", bg: "#D1FAE5", emoji: "👍" },
  caring: { color: "#EC4899", bg: "#FCE7F3", emoji: "🤗" },
  confusion: { color: "#8B5CF6", bg: "#EDE9FE", emoji: "🤔" },
  curiosity: { color: "#06B6D4", bg: "#CFFAFE", emoji: "🧐" },
  desire: { color: "#BE123C", bg: "#FFE4E6", emoji: "😍" },
  disappointment: { color: "#6B7280", bg: "#F3F4F6", emoji: "😞" },
  disapproval: { color: "#B91C1C", bg: "#FEE2E2", emoji: "👎" },
  disgust: { color: "#059669", bg: "#D1FAE5", emoji: "🤢" },
  embarrassment: { color: "#F472B6", bg: "#FCE7F3", emoji: "😳" },
  excitement: { color: "#EAB308", bg: "#FEF9C3", emoji: "🎉" },
  fear: { color: "#7C3AED", bg: "#EDE9FE", emoji: "😨" },
  gratitude: { color: "#FBBF24", bg: "#FFFBEB", emoji: "🙏" },
  grief: { color: "#1F2937", bg: "#E5E7EB", emoji: "🖤" },
  joy: { color: "#F59E0B", bg: "#FEF3C7", emoji: "😊" },
  love: { color: "#EC4899", bg: "#FCE7F3", emoji: "❤️" },
  nervousness: { color: "#6366F1", bg: "#E0E7FF", emoji: "😬" },
  optimism: { color: "#10B981", bg: "#D1FAE5", emoji: "🌟" },
  pride: { color: "#9333EA", bg: "#F3E8FF", emoji: "🦁" },
  realization: { color: "#FBBF24", bg: "#FFFBEB", emoji: "💡" },
  relief: { color: "#3B82F6", bg: "#DBEAFE", emoji: "😌" },
  remorse: { color: "#4B5563", bg: "#F3F4F6", emoji: "😔" },
  sadness: { color: "#3B82F6", bg: "#DBEAFE", emoji: "😢" },
  surprise: { color: "#F97316", bg: "#FFEDD5", emoji: "😮" },
  neutral: { color: "#9CA3AF", bg: "#F3F4F6", emoji: "😐" },
};

// Minimum characters before auto-analysis triggers
export const MIN_CHARS_FOR_ANALYSIS = 15;

// Debounce delay in milliseconds
export const DEBOUNCE_DELAY = 1500;
