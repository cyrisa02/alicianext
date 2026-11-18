// services/groqService.ts
import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
  baseURL: "https://api.groq.com/openai/v1", // Endpoint de l'API Groq
  dangerouslyAllowBrowser: true, // Obligatoire pour un appel direct depuis le navigateur
});

export async function sendMessageToChat(
  history: { role: "user" | "model"; text: string }[],
  currentMessage: string
) {
  // Conversion de l'historique au format attendu par l'API OpenAI/Groq
  const messages = [
    ...history.map((msg) => ({
      role: msg.role === "model" ? "assistant" : "user",
      content: msg.text,
    })),
    { role: "user", content: currentMessage },
  ];

  const completion = await client.chat.completions.create({
    model: "openai/gpt-oss-20b", // Le modèle que tu as spécifié
    messages: messages as any,
    temperature: 0.7,
  });

  return completion.choices[0].message?.content || "Désolé, aucune réponse générée.";
}