import { chromium } from "playwright";

import { getButtonDetails } from "../scanners/button.scanner.js";
import { getInputDetails } from "../scanners/input.scanner.js";

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

    // Link Scanner (abhi service me hi hai)
    const links = await page.locator("a").count();

    const linkDetails = await page.locator("a").evaluateAll((elements) =>
        elements.map((link) => ({
            text: link.textContent?.trim() || "",
            href: (link as HTMLAnchorElement).href,
        }))
    );

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
};git add .