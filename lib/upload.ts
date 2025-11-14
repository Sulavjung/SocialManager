// lib/upload.ts
import { writeFile, mkdir } from "fs/promises";
import { NextRequest } from "next/server";
import { join } from "path";

export async function handleUpload(request: NextRequest) {
  const formData = await request.formData();
  const file = formData.get("file") as File | null;

  if (!file) throw new Error("No file uploaded");

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const filename = `${Date.now()}-${file.name}`;

  // Allow overriding upload dir via env var (useful in production)
  const uploadsDir =
    process.env.UPLOAD_DIR || join(process.cwd(), "public", "uploads");

  // Ensure uploads directory exists
  try {
    await mkdir(uploadsDir, { recursive: true });
  } catch (err) {
    console.error("Failed to create uploads directory:", err);
    throw new Error("Unable to prepare uploads directory");
  }

  const filePath = join(uploadsDir, filename);

  try {
    await writeFile(filePath, buffer);
  } catch (err: any) {
    console.error("Failed to write uploaded file:", err);
    // Re-throw with limited info for the API response
    throw new Error("Unable to save uploaded file");
  }

  // Log file details for debugging in production (pm2 logs)
  try {
    const { stat } = await import("fs/promises");
    const s = await stat(filePath);
    console.log(`Uploaded file saved: ${filePath} (${s.size} bytes)`);
  } catch (err) {
    console.warn("Uploaded file saved but failed to stat file:", err);
  }

  // Return the public URL path (assumes uploads are served from /uploads)
  return `/uploads/${filename}`;
}
