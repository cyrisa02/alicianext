// components/CommentForm.tsx
"use client";

import { useState, useTransition } from "react";
import { submitComment } from "@/app/actions/comments";

export default function CommentForm({ postId }: { postId: string }) {
  const [isPending, startTransition] = useTransition();
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessage("");

    const formData = new FormData(e.currentTarget);

    // Vérification honeypot côté client (double sécurité)
    const honeypot = formData.get("website") as string;
    if (honeypot) {
      // Silencieux : on ne dit rien au bot
      (e.target as HTMLFormElement).reset();
      return;
    }

    startTransition(async () => {
      const result = await submitComment(formData);
      setMessage(result.message || "");

      if (result.success) {
        (e.target as HTMLFormElement).reset();
      }
    });
  };

  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <h3 className="text-xl font-bold text-white mb-4">
        Laisser un commentaire
      </h3>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* HONEYPOT : invisible pour les humains, visible pour les bots */}
        <input
          type="text"
          name="website"
          tabIndex={-1}
          autoComplete="off"
          className="hidden"
          aria-hidden="true"
        />

        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Nom
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            maxLength={50}
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Ton nom"
          />
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-400 mb-1"
          >
            Commentaire
          </label>
          <textarea
            id="content"
            name="content"
            required
            rows={4}
            maxLength={1000}
            className="w-full p-3 bg-gray-900 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
            placeholder="Ton avis sur l'article..."
          />
        </div>

        <input type="hidden" name="postId" value={postId} />

        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50"
        >
          {isPending ? "Envoi..." : "Envoyer"}
        </button>

        {message && (
          <p
            className={`mt-4 text-sm ${
              message.includes("Merci") ? "text-green-400" : "text-red-400"
            }`}
          >
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
