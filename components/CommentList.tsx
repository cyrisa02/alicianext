// components/CommentList.tsx
import { supabase } from "@/lib/supabaseClient";
import xss from "xss";
import { revalidatePath } from "next/cache";

export default async function CommentList({ postId }: { postId: string }) {
  revalidatePath(`/blog/${postId}`);
  const { data: comments, error } = await supabase
    .from("comments")
    .select("*", { count: "exact" })
    .eq("post_id", postId)
    .eq("is_approved", true)
    .order("created_at", { ascending: true });

  if (error) {
    return (
      <p className="text-red-400">
        Erreur lors du chargement des commentaires.
      </p>
    );
  }

  if (!comments || comments.length === 0) {
    return (
      <p className="text-gray-400">
        Aucun commentaire pour le moment. Sois le premier !
      </p>
    );
  }

  return (
    <div className="mt-8 space-y-6">
      <h3 className="text-xl font-bold text-white">
        {comments.length} commentaire{comments.length > 1 ? "s" : ""}
      </h3>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="p-4 bg-gray-900/50 border border-gray-800 rounded-lg"
        >
          <div className="flex justify-between items-center mb-2">
            <span className="font-semibold text-white">
              {xss(comment.author_name)}
            </span>
            <span className="text-sm text-gray-400">
              {new Date(comment.created_at).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="text-gray-300 whitespace-pre-wrap">
            {xss(comment.content)}
          </p>
        </div>
      ))}
    </div>
  );
}
