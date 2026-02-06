"use server";

import { api } from "../../convex/_generated/api";
import { fetchQuery } from "convex/nextjs";
import { Id } from "../../convex/_generated/dataModel";

export async function getSessionWithJournals(sessionId: string) {
    const session = await fetchQuery(api.sessions.getSessionWithJournals, {
        sessionId: sessionId as Id<"sessions">,
    });
    const journals = []
    for(let journal of session?.journals??[]){
      journals.push({
        text: journal.text,
        emotions: journal.emotions,
        createdAt: journal.createdAt,
        updatedAt: journal.updatedAt,
      })
    }
    return journals;
}
export default getSessionWithJournals