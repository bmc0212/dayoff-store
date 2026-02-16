import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(req: Request) {
  const { email } = await req.json();

  if (!email) {
    return NextResponse.json({ error: "Email required" }, { status: 400 });
  }

  const filePath = path.join(process.cwd(), "emails.txt");

  fs.appendFileSync(filePath, email + "\n");

  return NextResponse.json({ success: true });
}