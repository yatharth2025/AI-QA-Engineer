import { generateAIReport } from "../ai/gemini.service.js";

export const generateReport = async (scanData: any) => {

    const aiResponse = await generateAIReport(scanData);

    return {

        summary: aiResponse.summary ?? "",

        issues: aiResponse.issues ?? [],

        recommendations: aiResponse.recommendations ?? [],

        testCases: aiResponse.testCases ?? [],

        playwrightScript: aiResponse.playwrightScript ?? "",

        bugReport: aiResponse.bugReport ?? null,

    };

};                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              