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

  // Buttons
  const buttons = await page.locator("button").count();

  const buttonTexts = await page.locator("button").evaluateAll((buttons) =>
    buttons.map((button) => button.textContent?.trim())
  );

  // Links
  const links = await page.locator("a").count();

  const linkDetails = await page.locator("a").evaluateAll((links) =>
    links.map((link) => ({
      text: link.textContent?.trim(),
      href: (link as HTMLAnchorElement).href,
    }))
  );

  // Inputs
  const inputs = await page.locator("input").count();

  const inputDetails = await page.locator("input").evaluateAll((inputs) =>
    inputs.map((input) => {
      const element = input as HTMLInputElement;

      return {
        type: element.type,
        name: element.name,
        placeholder: element.placeholder,
        required: element.required,
        disabled: element.disabled,
      };
    })
  );

  // Images
  const images = await page.locator("img").count();

  const imageDetails = await page.locator("img").evaluateAll((images) =>
    images.map((img) => {
      const image = img as HTMLImageElement;

      return {
        src: image.src,
        loaded: image.complete && image.naturalWidth > 0,
        alt: image.alt,
        missingAlt: image.alt.trim() === "",
      };
    })
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