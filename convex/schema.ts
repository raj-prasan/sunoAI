import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sessions: defineTable({
    isActive: v.boolean(),
    journals: v.optional(
      v.array(
        v.object({
          text: v.string(),
          emotions: v.optional(
            v.array(
              v.object({
                label: v.string(),
                score: v.float64(),
              }),
            ),
          ),
          createdAt: v.float64(),
          updatedAt: v.float64(),
        }),
      ),
    ),
    createdBy: v.string(),
    expiresAt: v.number(),
  }),
});
