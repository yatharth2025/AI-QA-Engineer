import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

export const generateAIReport = async (scanData: any) => {

    const prompt = `
You are a Senior QA Engineer.

Analyze the following website scan report.

Website Scan Report:

${JSON.stringify(scanData, null, 2)}

Return ONLY valid JSON.

Format:

{
  "summary": "",
  "majorIssues": [],
  "recommendations": []
}

Do not write markdown.
Do not write explanation.
Only JSON.
`;

    const response = await ai.models.generateContent({
        model: "gemini-2.5-flash",
        contents: prompt,
    });

   const text = response.text ?? "";

    try {

        return JSON.parse(text);

    } catch {

        return {
            summary: text,
            majorIssues: [],
            recommendations: [],
        };

    }

};