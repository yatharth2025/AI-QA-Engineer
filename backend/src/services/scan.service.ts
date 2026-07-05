import { chromium } from "playwright";

export const scanWebsiteService = async (url: string) => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(url);

  await browser.close();

  return {
    success: true,
    message: "Website scanned successfully",
    url,
  };
};