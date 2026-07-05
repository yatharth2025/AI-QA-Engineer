import type { Request, Response } from "express";
import { scanWebsiteService } from "../services/scan.service.js";

export const scanWebsite = async(
  req: Request,
  res: Response
) => {
  const url = req.body.url;

  const result =  await scanWebsiteService(url);

  res.json(result);
};