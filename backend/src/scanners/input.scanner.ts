import type { Page } from "playwright";

export const getInputDetails = async (page: Page) => {

    const inputs = await page.locator("input").count();

    const inputDetails = await page.locator("input").evaluateAll((elements) =>
        elements.map((input) => {

            const el = input as HTMLInputElement;

            return {
                type: el.type,
                placeholder: el.placeholder,
                name: el.name,
                id: el.id,
                required: el.required,
                disabled: el.disabled,
            };

        })
    );

    return {
        inputs,
        inputDetails,
    };

};