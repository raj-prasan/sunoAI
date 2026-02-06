import { InferenceClient } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text || typeof text !== "string") {
      return NextResponse.json(
        { error: "Invalid input: text is required" },
        { status: 400 },
      );
    }

    const output = await client.textClassification({
      model: "cardiffnlp/twitter-roberta-base-sentiment",
      inputs: text,
    });

    return sentimentToMood(output);
  } catch (error) {
    console.error("Sentiment analysis error:", error);
    return NextResponse.json(
      { error: "Failed to analyze sentiment" },
      { status: 500 },
    );
  }
}
type Emotion = { label: string; score: number };

export function sentimentToMood(emotions: Emotion[]): NextResponse {
  let negative = 0, neutral = 0, positive = 0;

  emotions.forEach(e => {
    if (e.label === "LABEL_0") negative = e.score;
    if (e.label === "LABEL_1") neutral = e.score;
    if (e.label === "LABEL_2") positive = e.score;
  });

  return NextResponse.json({
    success: true,
    emotions: Math.round(
    positive * 100 +
    neutral * 50 +
    negative * 0)
  }) 
}