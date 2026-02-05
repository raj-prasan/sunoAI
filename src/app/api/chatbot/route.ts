import Groq from "groq-sdk";

type AnalysisResponse = {
  risk_level: "low" | "moderate" | "elevated" | "high";
  confidence: number;
  signals: string[];
  suggestion: string;
};


const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

export async function POST(req: Request) {
  try {
    const { text } = await req.json();

    if (!text) {
      return Response.json({ error: "Text is required" }, { status: 400 });
    }

    const chatCompletion = await getGroqChatCompletion(text);
    const content = chatCompletion.choices[0]?.message?.content || "";

    // Print logic for debugging
    console.log("Analysis result:", content);

    return Response.json({
      success: true,
      analysis: content,
    });
  } catch (error) {
    console.error("Error analyzing text:", error);
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}

export async function getGroqChatCompletion(text: string) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: "You are a mental health assistant.",
      },
      {
        role: "user",
        content: text,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
}
