import { chromium } from "playwright";

export const scanWebsiteService = async (url: string) => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.title();

  const buttons = await page.locator("button").count();
  const buttonTexts = await page.locator("button").allTextContents();

  const links = await page.locator("a").count();

  const inputs = await page.locator("input").count();

  const images = await page.locator("img").count();

  const imageSources = await page.locator("img").evaluateAll((imgs) =>
    imgs.map((img) => (img as HTMLImageElement).src)
  );

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
    buttonTexts,
    links,
    inputs,
    images,
    imageSources,
    screenshot: "screenshot.png",
  };
};