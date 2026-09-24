// app/actions/comments.ts
"use server";

import { supabase } from "@/lib/supabaseClient";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import { sendCommentNotification } from "@/lib/sendEmail";
import { getArticleBySlug } from "@/lib/blog";
import { revalidatePath } from "next/cache";
import xss from "xss";

export async function submitComment(formData: FormData) {
  const name = formData.get("name") as string;
  const content = formData.get("content") as string;
  const postId = formData.get("postId") as string;
  const honeypot = formData.get("website") as string;

  // Rejet silencieux si honeypot rempli (bot détecté)
  if (honeypot) {
    return {
      success: true,
      message: "Merci ! Ton commentaire est en attente de modération.",
    };
  }

  if (!name || !content || !postId) {
    return { success: false, message: "Champs manquants" };
  }

  // Validation basique
  if (name.length > 50 || content.length > 1000) {
    return { success: false, message: "Contenu trop long" };
  }

  const { error } = await supabase.from("comments").insert([
    {
      post_id: postId,
      author_name: xss(name.trim()), // ✅ Sanitization avant sauvegarde
      content: xss(content.trim()), // ✅ Sanitization avant sauvegarde
      is_approved: false,
    },
  ]);

  if (error) {
    console.error("Erreur Supabase :", error);
    return { success: false, message: "Erreur lors de l'envoi" };
  }

  const article = getArticleBySlug(postId);
  const postTitle = article?.frontmatter?.title || postId;

  await sendCommentNotification({
    authorName: name,
    content,
    postTitle,
    postSlug: postId,
  });

  revalidatePath(`/blog/${postId}`);

  return {
    success: true,
    message: "Merci ! Ton commentaire est en attente de modération.",
  };
}

export async function approveComment(id: string, isApproved: boolean) {
  const { error } = await supabaseAdmin
    .from("comments")
    .update({ is_approved: isApproved })
    .eq("id", id);

  if (error) return { success: false, error: error.message };

  revalidatePath("/admin/comments");
  revalidatePath("/blog");
  return { success: true };
}

export async function deleteComment(id: string) {
  // 1. Récupérer le commentaire pour connaître son post_id
  const { data: comment, error: fetchError } = await supabaseAdmin
    .from("comments")
    .select("post_id")
    .eq("id", id)
    .single();

  if (fetchError) {
    return { success: false, error: fetchError.message };
  }

  // 2. Supprimer le commentaire
  const { error } = await supabaseAdmin.from("comments").delete().eq("id", id);

  if (error) return { success: false, error: error.message };

  // 3. Revalider TOUTES les pages concernées
  revalidatePath("/admin/comments");
  revalidatePath(`/blog/${comment.post_id}`);
  revalidatePath("/blog");

  return { success: true };
}
