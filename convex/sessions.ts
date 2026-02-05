import { mutation, query } from "./_generated/server";
import { ConvexError, v } from "convex/values";

export const createSession = mutation({
  args: { Id: v.string() },
  handler: async (ctx, args) => {
    const sessionId = await ctx.db.insert("sessions", {
      isActive: true,
      messages: [],
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
  args: { sessionId: v.id("sessions"), journalText: v.string() },
  handler: async (ctx, args) => {
    const session = await ctx.db.get(args.sessionId);
    if (!session) {
      throw new ConvexError("Session not found");
    }
    await ctx.db.patch(args.sessionId, {
      messages: [...(session.messages ?? []), args.journalText],
    });
  },
});
