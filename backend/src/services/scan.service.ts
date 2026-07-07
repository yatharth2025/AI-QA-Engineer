import { chromium } from "playwright";

export const scanWebsiteService = async (url: string) => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.title();

  const buttons = await page.locator("button").count();

  const links = await page.locator("a").count();

  const inputs = await page.locator("input").count();

  const images = await page.locator("img").count();

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
    buttons,
    links,
    inputs,
    images,
    screenshot: "screenshot.png",
  };
};