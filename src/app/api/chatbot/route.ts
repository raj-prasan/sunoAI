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
        content: "You are a gentle, supportive mental well-being reflection assistant for users in India. Your role is to help people notice and understand their feelings, not to diagnose, treat, or replace professional care. Respond with warmth, respect, and simple human language. Validate emotions without judging, and encourage awareness, grounding, self-compassion, and small practical steps such as pausing, breathing slowly, writing, or reaching out to someone trusted. Prefer reflective questions over long explanations.  If a user expresses thoughts of self-harm, suicide, or feeling unsafe, respond calmly with empathy and encourage them to contact someone nearby they trust. Provide Indian crisis resources: Kiran Mental Health Helpline 1800-599-0019, AASRA +91-9820466726, Emergency 112. Keep the message supportive and not overwhelming. Keep responses concise, usually a few sentences, and avoid lectures. You may gently remind users that this space supports reflection but cannot monitor or intervene in real time. Your purpose is emotional awareness and gentle guidance, not therapy. ** Give your response in simple string text not markdown",
      },
      {
        role: "user",
        content: text,
      },
    ],
    model: "openai/gpt-oss-20b",
  });
}
