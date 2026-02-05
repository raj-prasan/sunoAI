"use server";

import { api } from "../../convex/_generated/api";
import { fetchMutation } from "convex/nextjs";
import { Id } from "../../convex/_generated/dataModel";

const storeJournal = async (sessionId: Id<"sessions">, journalText: string) => {
  await fetchMutation(api.sessions.storeJournal, {
    sessionId,
    journalText,
  });
};

export default storeJournal;
