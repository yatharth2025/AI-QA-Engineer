import type { Request, Response } from "express";

import { scanWebsiteService } from "../services/scan.service.js";

export const scanWebsite = async (

    req: Request,

    res: Response

) => {

    try {

        const { url } = req.body;

        if (!url) {

            return res.status(400).json({

                success: false,

                message: "URL is required",

            });

        }

        const result = await scanWebsiteService(url);

        return res.status(200).json(result);

    }

    catch (error) {

        console.error(error);

        return res.status(500).json({

            success: false,

            message: "Internal Server Error",

        });

    }

};