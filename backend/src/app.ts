import express from "express";
import scanRoutes from "./routes/scan.routes.js";

const app = express();

app.use(express.json());

app.use("/api", scanRoutes);

export default app;