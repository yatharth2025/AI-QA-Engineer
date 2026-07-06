import { chromium } from "playwright";

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

  await browser.close();

  return {
    success: true,
    message: "Website scanned successfully",
    url,
    title,
    screenshot: "screenshot.png",
  };
};