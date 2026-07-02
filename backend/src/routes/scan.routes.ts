import { Router } from "express";
import { scanWebsite } from "../controllers/scan.controller.js";

const router = Router();

router.get("/", scanWebsite);

export default router;