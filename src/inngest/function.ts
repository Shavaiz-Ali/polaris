import { generateText } from "ai";
import { inngest } from "./client";
import { createGoogleGenerativeAI } from "@ai-sdk/google";


const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
})

export const demoGenerate = inngest.createFunction(
    { id: "demoGenerate" },
    { event: "demo/generate" },
    async ({ event, step }) => {
        const data = await step.run("generate-text", async () => {
            const res = await generateText({
                model: google('gemini-2.5-flash'),
                prompt: "Write a code in js to create a button with hover effect"
            })
            return res
        })
        return { ...data };
    },
);