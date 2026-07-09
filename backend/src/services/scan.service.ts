import { chromium } from "playwright";

export const scanWebsiteService = async (url: string) => {
  const browser = await chromium.launch({
    headless: false,
  });

  const page = await browser.newPage();

  await page.goto(url);

  const title = await page.title();

  const buttons = await page.locator("button").count();

  const buttonTexts = await page.locator("button").evaluateAll((buttons) =>
    buttons.map((button) => button.textContent?.trim() || "")
  );

  const links = await page.locator("a").count();

  const linkDetails = await page.locator("a").evaluateAll((links) =>
    links.map((link) => {
      const anchor = link as HTMLAnchorElement;

      return {
        text: anchor.innerText.trim(),
        href: anchor.href,
      };
    })
  );

  const inputs = await page.locator("input").count();

  const images = await page.locator("img").count();

  const imageDetails = await page.locator("img").evaluateAll((images) =>
    images.map((image) => {
      const img = image as HTMLImageElement;

      return {
        src: img.src,
        loaded: img.complete,
      };
    })
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
    linkDetails,
    inputs,
    images,
    imageDetails,
    screenshot: "screenshot.png",
  };
};