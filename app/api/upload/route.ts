// app/api/upload/route.ts
import { NextResponse, NextRequest } from "next/server";
import { handleUpload } from "@/lib/upload";

export async function POST(request: NextRequest) {
  try {
    const url = await handleUpload(request);
    return NextResponse.json({ url });
  } catch (error) {
    return NextResponse.json({ error: "Upload failed" }, { status: 500 });
  }
}
