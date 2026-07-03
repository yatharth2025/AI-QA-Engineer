import type { Request, Response } from "express";
import  { scanWebsiteService } from "../services/scan.service.js";

export const scanWebsite = (
  req: Request,
  res: Response
) => {

  const result = scanWebsiteService();

  res.json(result);

};