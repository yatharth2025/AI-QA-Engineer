import { Router } from "express";
import { scanWebsite } from "../controllers/scan.controller.js";

const router = Router();

router.post("/", scanWebsite);

export default router;