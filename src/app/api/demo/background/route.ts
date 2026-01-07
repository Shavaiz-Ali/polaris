
// post request
import { generateText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { NextResponse } from "next/server";
import { inngest } from "@/inngest/client";


console.log(process.env.GOOGLE_GENERATIVE_AI_API_KEY)

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
})
export async function POST(request: Request) {
    await inngest.send({
        name: "demo/generate",
        data: {}
    });
    return NextResponse.json({ started: "started" });
}
