import type { Page, Request } from "playwright";

export const getNetworkFailures = async (page: Page) => {

    const failedRequests: {
        url: string;
        method: string;
        failure: string;
    }[] = [];

    page.on("requestfailed", (request: Request) => {

        failedRequests.push({

            url: request.url(),

            method: request.method(),

            failure: request.failure()?.errorText || "Unknown Error",

        });

    });

    return {
        failedRequests,
    };

};