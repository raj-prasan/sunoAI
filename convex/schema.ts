import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  sessions: defineTable({
    isActive: v.boolean(),
    messages: v.optional(v.array(v.string())),
    createdBy: v.string(),
  }),
});
