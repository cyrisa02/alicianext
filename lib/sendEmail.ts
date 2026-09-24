// lib/sendEmail.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendCommentNotification({
  authorName,
  content,
  postTitle,
  postSlug,
}: {
  authorName: string;
  content: string;
  postTitle: string;
  postSlug: string;
}) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
  const articleUrl = `${siteUrl}/blog/${postSlug}`;

  try {
    const { data, error } = await resend.emails.send({
      from: 'AlicIA-GPT Blog <onboarding@resend.dev>', // À remplacer par ton domaine vérifié plus tard
      to: ['alicia.gpt.02@gmail.com'], // Ton email de réception
      subject: `Nouveau commentaire sur : ${postTitle}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0A0A0A;">Nouveau commentaire en attente de modération</h2>
          <p><strong>Auteur :</strong> ${authorName}</p>
          <p><strong>Article :</strong> <a href="${articleUrl}">${postTitle}</a></p>
          <div style="background: #f3f4f6; padding: 16px; border-radius: 8px; margin: 16px 0;">
            <p style="margin: 0;">${content}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            Connecte-toi à <a href="${siteUrl}/admin/comments">l'interface de modération</a> pour valider ou supprimer ce commentaire.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error('Erreur Resend :', error);
      return { success: false, error };
    }

    return { success: true, data };
  } catch (error) {
    console.error('Erreur envoi email :', error);
    return { success: false, error };
  }
}