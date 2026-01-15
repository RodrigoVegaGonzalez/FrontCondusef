import { NextResponse } from "next/server";
import "server-only"
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const  token =  cookieStore.get("token")?.value ?? null;

  return NextResponse.json({ token });
}
