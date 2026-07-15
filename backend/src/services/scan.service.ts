import { chromium } from "playwright";

import { getButtonDetails } from "../scanners/button.scanner.js";
import { getLinkDetails } from "../scanners/link.scanner.js";
import { getImageDetails } from "../scanners/image.scanner.js";
import { getInputDetails } from "../scanners/input.scanner.js";
import { getJavaScriptErrors } from "../scanners/javascript.scanner.js";
import { getConsoleErrors } from "../scanners/console.scanner.js";
import { getNetworkErrors } from "../scanners/network.scanner.js";
import { getPerformanceMetrics } from "../scanners/performance.scanner.js";
import { getAccessibilityDetails } from "../scanners/accessibility.scanner.js";
import { getSeoDetails } from "../scanners/seo.scanner.js";
import { calculateWebsiteScore } from "../scanners/score.scanner.js";
import { getIssueSeverity } from "../scanners/severity.scanner.js";
import { generateAIReport } from "../ai/gemini.service.js";

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

    const buttonData = await getButtonDetails(page);

    const linkData = await getLinkDetails(page);

    const imageData = await getImageDetails(page);

    const inputData = await getInputDetails(page);

    const javascriptErrors = await getJavaScriptErrors(page);

    const consoleErrors = await getConsoleErrors(page);

    const networkErrors = await getNetworkErrors(page);

    const performance = await getPerformanceMetrics(page);

    const accessibility = await getAccessibilityDetails(page);

    const seo = await getSeoDetails(page);

    const score = calculateWebsiteScore({
        consoleErrors,
        networkErrors,
        javascriptErrors,
        accessibility,
    });

    const issues = getIssueSeverity({
        consoleErrors,
        networkErrors,
        javascriptErrors,
        accessibility,
    });

    const aiReport = await generateAIReport({

        title,

        url,

        score,

        issues,

        performance,

        accessibility,

        seo,

        javascriptErrors,

        consoleErrors,

        networkErrors,

    });

    await browser.close();

    return {

        success: true,

        message: "Website scanned successfully",

        url,

        title,

        ...buttonData,

        ...linkData,

        ...imageData,

        ...inputData,

        javascriptErrors,

        consoleErrors,

        networkErrors,

        performance,

        accessibility,

        ...seo,

        score,

        issues,

        aiReport,

        screenshot: "screenshot.png",

    };

};