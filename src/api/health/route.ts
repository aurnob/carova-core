import { MedusaResponse } from "@medusajs/framework/http";

export const GET = async (_req: any, res: MedusaResponse) => {
  res.status(200).json({ status: "ok" });
};
