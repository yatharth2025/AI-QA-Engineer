import type { Request, Response } from "express";

export const scanWebsite = (
  req: Request,
  res: Response
) => {
  res.json({
    message: "Scan API Working"
  });
};