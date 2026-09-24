// components/CommentManager.tsx
"use client";

import { useTransition } from "react";
import { approveComment, deleteComment } from "@/app/actions/comments";
import { logout } from "@/app/actions/auth";
import xss from "xss";

interface Comment {
  id: string;
  post_id: string;
  author_name: string;
  content: string;
  is_approved: boolean;
  created_at: string;
}

export default function CommentManager({ comments }: { comments: Comment[] }) {
  const [isPending, startTransition] = useTransition();

  const handleAction = (
    action: (id: string, val?: any) => Promise<any>,
    id: string,
    val?: any
  ) => {
    startTransition(async () => {
      await action(id, val);
    });
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold text-white">
          Modération des commentaires
        </h1>
        <button
          onClick={async () => {
            await logout();
            window.location.href = "/admin/comments";
          }}
          className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg text-sm"
        >
          Déconnexion
        </button>
      </div>

      {comments.length === 0 ? (
        <p className="text-gray-400">Aucun commentaire à modérer.</p>
      ) : (
        <div className="space-y-4">
          {comments.map((comment) => (
            <div
              key={comment.id}
              className={`p-4 rounded-lg border ${
                comment.is_approved
                  ? "bg-green-900/10 border-green-800"
                  : "bg-yellow-900/10 border-yellow-800"
              }`}
            >
              <div className="flex justify-between items-start mb-2">
                <div>
                  <span className="font-bold text-white">
                    {xss(comment.author_name)}
                  </span>
                  <span className="text-xs text-gray-400 ml-2">
                    sur {xss(comment.post_id)}
                  </span>
                </div>
                <span
                  className={`text-xs px-2 py-1 rounded ${
                    comment.is_approved
                      ? "bg-green-800 text-green-200"
                      : "bg-yellow-800 text-yellow-200"
                  }`}
                >
                  {comment.is_approved ? "Validé" : "En attente"}
                </span>
              </div>
              <p className="text-gray-300 mb-4 text-sm whitespace-pre-wrap">
                {xss(comment.content)}
              </p>

              <div className="flex gap-2">
                {!comment.is_approved && (
                  <button
                    onClick={() =>
                      handleAction(approveComment, comment.id, true)
                    }
                    disabled={isPending}
                    className="px-3 py-1 bg-green-600 hover:bg-green-700 text-white text-sm rounded disabled:opacity-50"
                  >
                    Valider
                  </button>
                )}
                {comment.is_approved && (
                  <button
                    onClick={() =>
                      handleAction(approveComment, comment.id, false)
                    }
                    disabled={isPending}
                    className="px-3 py-1 bg-gray-600 hover:bg-gray-700 text-white text-sm rounded disabled:opacity-50"
                  >
                    Masquer
                  </button>
                )}
                <button
                  onClick={() => {
                    if (confirm("Supprimer définitivement ?")) {
                      handleAction(deleteComment, comment.id);
                    }
                  }}
                  disabled={isPending}
                  className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-sm rounded disabled:opacity-50"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
