import express from "express";
import cors from "cors";

import scanRoutes from "./routes/scan.routes.js";

const app = express();

app.use(cors());

app.use(express.json());

app.get("/api/health", (req, res) => {

    res.status(200).json({

        success: true,

        message: "Backend is running 🚀",

    });

});

app.use("/api", scanRoutes);

app.use((req, res) => {

    res.status(404).json({

        success: false,

        message: "Route not found",

    });

});

export default app;