import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = cookies();
  const  token =  cookieStore.get("token")?.value || null;

  return NextResponse.json({ token });
}
