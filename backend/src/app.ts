import express from "express";
import scanRoutes from "./routes/scan.routes.js";

const app = express();

app.use("/scan", scanRoutes);

export default app;