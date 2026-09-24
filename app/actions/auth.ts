// app/actions/auth.ts
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { signToken } from "@/lib/auth";

export async function login(formData: FormData) {
  const password = formData.get("password") as string;

  if (password === process.env.ADMIN_PASSWORD) {
    const token = await signToken();
    cookies().set("admin_auth", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 8, // 8 heures
    });
    redirect("/admin/comments");
  }

  redirect("/admin/comments?error=invalid");
}

export async function logout() {
  cookies().delete("admin_auth");
  redirect("/admin/comments");
}
