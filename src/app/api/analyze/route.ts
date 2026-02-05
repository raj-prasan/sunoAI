type AnalysisResponse = {
  risk_level: "low" | "moderate" | "elevated" | "high";
  confidence: number;
  signals: string[];
  suggestion: string;
};

export async function POST(req: Request) {
    const { text } = await req.json();
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
        body: JSON.stringify({
            model: "gpt-4",
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
        }),
    });
    const data = await response.json();
    return Response.json(data);
}