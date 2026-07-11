import { chromium } from "playwright";

import { getButtonDetails } from "../scanners/button.scanner.js";
import { getInputDetails } from "../scanners/input.scanner.js";
import { getLinkDetails } from "../scanners/link.scanner.js";

export const scanWebsiteService = async (url: string) => {

    const browser = await chromium.launch({
        headless: false,
    });

    const page = await browser.newPage();

    await page.goto(url);

    const title = await page.title();

    await page.screenshot({
        path: "screenshot.png",
        fullPage: true,
    });

    // Button Scanner
    const { buttons, buttonTexts } = await getButtonDetails(page);

    // Link Scanner
    const { links, linkDetails } = await getLinkDetails(page);

    // Input Scanner
    const { inputs, inputDetails } = await getInputDetails(page);

    // Image Scanner (abhi service me hi hai)
    const images = await page.locator("img").count();

    const imageDetails = await page.locator("img").evaluateAll((elements) =>
        elements.map((img) => ({
            src: (img as HTMLImageElement).src,
            loaded: (img as HTMLImageElement).complete,
        }))
    );

    await browser.close();

    return {
        success: true,
        message: "Website scanned successfully",

        url,
        title,

        buttons,
        buttonTexts,

        links,
        linkDetails,

        inputs,
        inputDetails,

        images,
        imageDetails,

        screenshot: "screenshot.png",
    };
};