"use server";

import { api } from "../../convex/_generated/api";
import { fetchMutation } from "convex/nextjs";
import { Id } from "../../convex/_generated/dataModel";

interface EmotionResult {
  label: string;
  score: number;
}

const storeJournal = async (
  sessionId: Id<"sessions">,
  journalIndex: number,
  journalText: string,
  emotions?: EmotionResult[],
) => {
  await fetchMutation(api.sessions.storeJournal, {
    sessionId,
    journalIndex,
    journalText,
    emotions,
  });
};

export default storeJournal;
