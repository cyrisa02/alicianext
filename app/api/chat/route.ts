import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextRequest, NextResponse } from "next/server";

const API_KEY = process.env.GEMINI_API_KEY; // pas de préfixe NEXT_PUBLIC_ = reste secret

const SYSTEM_INSTRUCTION =
  "You are AlicIA, a friendly and professional AI assistant for AlicIA-GPT, an AI consulting agency based in Soissons, France. Your goal is to answer user questions about the agency's services, process, and expertise. Be helpful, concise, and encourage users to fill out the contact form for a personalized quote. The services include: Audit & Conseil, Formations, and solutions for various sectors like HR, Admin, Marketing, Sales, Legal, and for specific clients like startups, students, and seniors. The agency also builds websites and does local SEO.";

export async function POST(req: NextRequest) {
  if (!API_KEY) {
    return NextResponse.json({
      text: "Bonjour ! L'assistant IA est actuellement en mode démonstration car la clé API n'est pas configurée.",
    });
  }

  try {
    const { history, message } = await req.json();

    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
      systemInstruction: SYSTEM_INSTRUCTION,
    });

    const chat = model.startChat({ history: history || [] });
    const result = await chat.sendMessage(message);

    return NextResponse.json({ text: result.response.text() });
  } catch (error) {
    console.error("Error in /api/chat:", error);
    return NextResponse.json(
      {
        text: "Je suis désolé, une erreur technique m'empêche de répondre pour le moment.",
      },
      { status: 500 }
    );
  }
}
