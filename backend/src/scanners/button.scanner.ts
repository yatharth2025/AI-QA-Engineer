import type { Page } from "playwright";

export const getButtonDetails = async (page: Page) => {
    const buttons = await page.locator("button").count();

    const buttonTexts = await page.locator("button").evaluateAll((elements) =>
        elements.map((button) => button.textContent?.trim() || "")
    );

    return {
        buttons,
        buttonTexts,
    };
};