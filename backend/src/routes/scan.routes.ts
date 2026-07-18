import express from "express";

import { scanWebsite } from "../controllers/scan.controller.js";

const router = express.Router();

router.post("/scan", scanWebsite);

export default router;