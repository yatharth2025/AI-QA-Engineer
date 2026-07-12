import type { Page } from "playwright";

export const getAccessibilityDetails = async (page: Page) => {
  const imagesWithoutAlt = await page.locator("img:not([alt])").count();

  const emptyLinks = await page.locator("a").evaluateAll((links) =>
    links.filter(
      (link) =>
        !(link as HTMLAnchorElement).textContent?.trim() &&
        !(link as HTMLAnchorElement).getAttribute("aria-label")
    ).length
  );

  const missingFormLabels = await page.locator("input").evaluateAll((inputs) =>
    inputs.filter((input) => {
      const element = input as HTMLInputElement;

      return (
        !element.labels?.length &&
        !element.getAttribute("aria-label") &&
        !element.getAttribute("placeholder")
      );
    }).length
  );

  return {
    imagesWithoutAlt,
    emptyLinks,
    missingFormLabels,
  };
};