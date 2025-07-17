import { NextResponse } from "next/server";

export async function POST(req) {
  const body = await req.json(); // Parsear el JSON
  const token = body.token;

  const response = NextResponse.json({ success: true });

  // Guardar la cookie HTTP-only
  response.cookies.set("token", token, {
    httpOnly: true, // No accesible desde JS
    secure: true, // Solo funciona en HTTPS
    sameSite: "strict",
    path: "/",
    maxAge: 60 * 30, // 1 semana
  });

  return response;
}

