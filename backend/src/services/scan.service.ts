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

  // Buttons
  const buttonData = await getButtonDetails(page);

  // Links
  const linkData = await getLinkDetails(page);

  // Images
  const imageData = await getImageDetails(page);

  // Inputs
  const inputData = await getInputDetails(page);

  // JavaScript Errors
  const javascriptErrors = await getJavaScriptErrors(page);

  // Console Errors
  const consoleErrors = await getConsoleErrors(page);

  // Network Errors
  const networkErrors = await getNetworkErrors(page);

  // Performance
  const performance = await getPerformanceMetrics(page);

  // Accessibility
  const accessibility = await getAccessibilityDetails(page);

  // SEO
  const seo = await getSeoDetails(page);

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

    screenshot: "screenshot.png",
  };
};