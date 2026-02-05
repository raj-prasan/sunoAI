"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { api } from "../../convex/_generated/api";
import { fetchMutation, fetchQuery } from "convex/nextjs";
import { Id } from "../../convex/_generated/dataModel";

const createSession = async () => {
  const cookieStore = await cookies();
  let userId = cookieStore.get("userId")?.value;

  if (!userId) {
    userId = crypto.randomUUID();
    cookieStore.set("userId", userId);
  }

  // Check if session exists for this user
  const existingSession = await fetchQuery(api.sessions.getSession, {
    Id: userId,
  });

  let sessionId;
  if (existingSession) {
    sessionId = existingSession._id;
  } else {
    // Create new session if none exists
    sessionId = await fetchMutation(api.sessions.createSession, { Id: userId });
  }

  redirect(`/session/${sessionId}`);
};

export default createSession;
