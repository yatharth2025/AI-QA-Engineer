import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

export const generateAIReport = async (scanData: any) => {

    const prompt = `
You are a Senior QA Automation Engineer.

Analyze this website scan.

${JSON.stringify(scanData, null, 2)}

Return ONLY valid JSON.

Format:

{
  "summary":"",
  "issues":[
    {
      "issue":"",
      "rootCause":"",
      "priority":"",
      "fix":""
    }
  ],
  "recommendations":[],
  "testCases":[
    {
      "title":"",
      "steps":[],
      "expectedResult":""
    }
  ],
  "playwrightScript":""
}

Generate a Playwright automation script in JavaScript.

Only return JSON.
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

            issues: [],

            recommendations: [],

            testCases: [],

            playwrightScript: "",

        };

    }

};