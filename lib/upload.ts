// lib/upload.ts
import { writeFile } from "fs/promises";
import { NextRequest } from "next/server";
import { join } from "path";

export async function handleUpload(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) throw new Error("No file uploaded");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}-${file.name}`;
  const path = join(process.cwd(), "public", "uploads", filename);
  await writeFile(path, buffer);

  return `/uploads/${filename}`;
}
