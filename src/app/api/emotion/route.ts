import { InferenceClient } from "@huggingface/inference";
import { NextRequest, NextResponse } from "next/server";

const client = new InferenceClient(process.env.HF_TOKEN);

export async function POST(req: NextRequest) {
  try {
    const { text } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    const output = await client.textClassification({
      model: "j-hartmann/emotion-english-distilroberta-base",
      inputs: text,
      provider: "hf-inference",
    });

    return NextResponse.json({ success: true, emotions: output });
  } catch (error) {
    console.error("Emotion classification error:", error);
    return NextResponse.json(
      { error: "Failed to classify emotions" },
      { status: 500 },
    );
  }
}
