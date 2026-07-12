import type { Page } from "playwright";

export const getSeoDetails = async (page: Page) => {
  const title = await page.title();

  const metaDescription = await page
    .locator('meta[name="description"]')
    .getAttribute("content");

  const h1Count = await page.locator("h1").count();

  const canonical = await page
    .locator('link[rel="canonical"]')
    .getAttribute("href");

  return {
    seo: {
      title,
      metaDescription: metaDescription ?? "Not Found",
      h1Count,
      canonical: canonical ?? "Not Found",
    },
  };
};