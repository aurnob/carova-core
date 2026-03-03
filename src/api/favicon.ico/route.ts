// src/api/favicon.ico/route.ts
import { readFileSync } from "fs";
import path from "path";
import { MedusaResponse } from "@medusajs/framework/http";

export const GET = async (_req: any, res: MedusaResponse) => {
  const filePath = path.join(process.cwd(), "public", "favicon.ico");
  const ico = readFileSync(filePath);
  res.setHeader("Content-Type", "image/x-icon");
  res.send(ico);
};
