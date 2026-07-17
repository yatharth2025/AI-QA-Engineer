import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY!,
});

export const generateAIReport = async (scanData: any) => {

    const prompt = `
You are a Senior QA Automation Engineer.

Analyze the following website scan.

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
  "testCases":[],
  "playwrightScript":"",
  "bugReport":{
    "title":"",
    "severity":"",
    "priority":"",
    "stepsToReproduce":[],
    "expectedResult":"",
    "actualResult":"",
    "rootCause":"",
    "suggestedFix":""
  }
}

Only return JSON.
No markdown.
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

            bugReport: null,

        };

    }

};