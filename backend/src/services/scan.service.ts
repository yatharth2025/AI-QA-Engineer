import { chromium } from "playwright";

import { getButtonDetails } from "../scanners/button.scanner.js";
import { getInputDetails } from "../scanners/input.scanner.js";
import { getLinkDetails } from "../scanners/link.scanner.js";
import { getImageDetails } from "../scanners/image.scanner.js";
import { getConsoleMessages } from "../scanners/console.scanner.js";
import { getNetworkFailures } from "../scanners/network.scanner.js";

export const scanWebsiteService = async (url: string) => {

    const browser = await chromium.launch({
        headless: false,
    });

    const page = await browser.newPage();

    // Console Scanner
    const { consoleMessages } = await getConsoleMessages(page);

    // Network Scanner
    const { failedRequests } = await getNetworkFailures(page);

    await page.goto(url);

    const title = await page.title();

    await page.screenshot({
        path: "screenshot.png",
        fullPage: true,
    });

    const { buttons, buttonTexts } = await getButtonDetails(page);

    const { links, linkDetails } = await getLinkDetails(page);

    const { inputs, inputDetails } = await getInputDetails(page);

    const { images, imageDetails } = await getImageDetails(page);

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

        consoleMessages,

        failedRequests,

        screenshot: "screenshot.png",

    };

};