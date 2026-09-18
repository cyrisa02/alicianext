export interface ChatMessage {
  role: "user" | "model";
  text: string;
}

export async function sendMessageToChat(
  history: ChatMessage[],
  message: string
): Promise<string> {
  try {
    const res = await fetch("/api/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        history: history.map((m) => ({
          role: m.role,
          parts: [{ text: m.text }],
        })),
        message,
      }),
    });
    const data = await res.json();
    return (
      data.text ?? "Je n'ai pas pu générer de réponse. Veuillez réessayer."
    );
  } catch (error) {
    console.error("Error calling /api/chat:", error);
    return "Je suis désolé, une erreur technique m'empêche de répondre pour le moment.";
  }
}
