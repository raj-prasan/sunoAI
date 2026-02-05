import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createSession = mutation({
  args: { Id: v.string() },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("sessions", {
      isActive: true,
      journals: [],
      createdBy: args.Id,
      expiresAt: Date.now() + 60 * 30 * 1000,
    });
    return sessionId;
  },
});

export const getSession = query({
  args: { Id: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db
      .query("sessions")
      .filter((q) => q.eq(q.field("createdBy"), args.Id))
      .first();

    if (!session) {
      return null;
    }
    return session;
  },
});
export const storeJournal = mutation({
  args: {
    sessionId: v.id("sessions"),
    journalIndex: v.number(),
    journalText: v.string(),
    emotions: v.optional(
      v.array(
        v.object({
          label: v.string(),
          score: v.float64(),
        }),
      ),
    ),
  },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      throw new ConvexError("Session not found");
    }

    const journals = session.journals ?? [];
    const now = Date.now();

    // Update existing journal or create new one
    if (args.journalIndex < journals.length) {
      // Update existing journal
      journals[args.journalIndex] = {
        text: args.journalText,
        emotions: args.emotions,
        createdAt: journals[args.journalIndex].createdAt,
        updatedAt: now,
      };
    } else {
      // Create new journal
      journals.push({
        text: args.journalText,
        emotions: args.emotions,
        createdAt: now,
        updatedAt: now,
      });
    }

    await ctx.db.patch(args.sessionId, {
      journals,
    });

    return journals;
  },
});

export const getSessionWithJournals = query({
  args: { sessionId: v.id("sessions") },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      return null;
    }
    return session;
  },
});
