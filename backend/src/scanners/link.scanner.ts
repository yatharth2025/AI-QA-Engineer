import type { Page } from "playwright";

export const getLinkDetails = async (page: Page) => {

    const links = await page.locator("a").count();

    const linkDetails = await page.locator("a").evaluateAll((elements) =>
        elements.map((link) => ({
            text: link.textContent?.trim() || "",
            href: (link as HTMLAnchorElement).href,
        }))
    );

    return {
        links,
        linkDetails,
    };

};