import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

export const generateAIReport = async (scanData: any) => {

    const prompt = `
You are an expert QA Engineer.

Analyze the following website scan report.

Return a professional report.

Website Scan Report:

${JSON.stringify(scanData, null, 2)}

Respond in this format only:

Summary:
...

Major Issues:
...

Recommendations:
...
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

    return response.text;
};