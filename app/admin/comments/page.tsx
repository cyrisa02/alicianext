// app/admin/comments/page.tsx
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { supabaseAdmin } from "@/lib/supabaseAdmin";
import CommentManager from "@/components/CommentManager";
import { login } from "@/app/actions/auth";
import { verifyToken } from "@/lib/auth";

export default async function AdminCommentsPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  const cookieStore = cookies();
  const isAdmin = await verifyToken();

  // Si pas connecté, afficher le formulaire de login
  if (!isAdmin) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center p-4">
        <div className="w-full max-w-md p-8 bg-gray-900 border border-gray-800 rounded-xl">
          <h1 className="text-2xl font-bold text-white mb-6 text-center">
            Administration
          </h1>
          {searchParams.error && (
            <p className="text-red-400 text-sm mb-4 text-center">
              Mot de passe incorrect
            </p>
          )}
          <form action={login} className="space-y-4">
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-400 mb-1"
              >
                Mot de passe
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full p-3 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Se connecter
            </button>
          </form>
        </div>
      </div>
    );
  }

  // Si connecté, récupérer tous les commentaires
  const { data: comments } = await supabaseAdmin
    .from("comments")
    .select("*")
    .order("created_at", { ascending: false });

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-gray-300 p-8 max-w-4xl mx-auto">
      <CommentManager comments={comments || []} />
    </div>
  );
}
