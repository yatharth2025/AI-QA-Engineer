import type { Page } from "playwright";

export const getJavaScriptErrors = async (page: Page) => {

    const javascriptErrors: {
        message: string;
    }[] = [];

    page.on("pageerror", (error) => {

        javascriptErrors.push({

            message: error.message,

        });

    });

    return {

        javascriptErrors,

    };

};