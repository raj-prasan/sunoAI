import { Id } from "../../../../convex/_generated/dataModel";

export interface EmotionResult {
  label: string;
  score: number;
}

export interface JournalEntry {
  text: string;
  emotions?: EmotionResult[];
  createdAt: number;
  updatedAt: number;
}

export interface JournalEditorProps {
  sessionId: Id<"sessions">;
}
