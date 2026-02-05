import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);
const emotionClassifier = async (text: string) => {
  const output = await client.textClassification({
    model: "j-hartmann/emotion-english-distilroberta-base",
    inputs: text,
    provider: "hf-inference",
  });
  return output;
};
export default emotionClassifier;
