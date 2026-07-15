import { generateAIReport } from "./ai/gemini.service.js";

const run = async () => {

    const report = await generateAIReport({

        title: "Google",

        score: {
            overallScore: 92,
        },

        javascriptErrors: [],

        networkErrors: [],

        accessibility: {
            imagesWithoutAlt: 1,
            emptyLinks: 0,
            missingFormLabels: 0,
        },

    });

    console.log(report);

};

run();
