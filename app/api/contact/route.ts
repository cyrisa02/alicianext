import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const {
      name,
      email,
      company,
      phone,
      projectType,
      companySize,
      message,
      rgpd,
    } = await request.json();

    const { data, error } = await resend.emails.send({
      from: "AlicIA-GPT Contact <contact@alicia-gpt.com>", // ✅ Changé
      to: ["contact@alicia-gpt.com"],
      subject: `Nouveau message de ${name} - ${company}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom :</strong> ${name}</p>
        <p><strong>Email :</strong> ${email}</p>
        <p><strong>Entreprise :</strong> ${company}</p>
        <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
        <p><strong>Type de projet :</strong> ${projectType}</p>
        <p><strong>Taille entreprise :</strong> ${companySize}</p>
        <p><strong>Message :</strong></p>
        <p style="white-space: pre-wrap;">${message}</p>
      `,
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erreur serveur:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
