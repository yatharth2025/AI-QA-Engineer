import type { Page } from "playwright";

export const getImageDetails = async (page: Page) => {

    const images = await page.locator("img").count();

    const imageDetails = await page.locator("img").evaluateAll((elements) =>
        elements.map((img) => {

            const image = img as HTMLImageElement;

            return {
                src: image.src,
                loaded: image.complete,
                alt: image.alt,
            };

        })
    );

    return {
        images,
        imageDetails,
    };

};