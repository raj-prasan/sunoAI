import { InferenceClient } from "@huggingface/inference";

const client = new InferenceClient(process.env.HF_TOKEN);
const emotionClassifier = async (text: string) => {
  const output = await client.textClassification({
    model: "SamLowe/roberta-base-go_emotions",
    inputs: text,
    provider: "hf-inference",
  });
  return output;
};
export default emotionClassifier;
