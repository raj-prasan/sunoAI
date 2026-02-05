import { Id } from "../../../../convex/_generated/dataModel";

export interface EmotionResult {
  label: string;
  score: number;
}

export interface JournalEditorProps {
  sessionId: Id<"sessions">;
}
