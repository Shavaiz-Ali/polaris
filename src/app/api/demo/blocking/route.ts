// post request
import { generateText } from "ai"
import { createGoogleGenerativeAI } from "@ai-sdk/google"
import { NextResponse } from "next/server";


console.log(process.env.GOOGLE_GENERATIVE_AI_API_KEY)

const google = createGoogleGenerativeAI({
    apiKey: process.env.GOOGLE_GENERATIVE_AI_API_KEY!,
})
export async function POST(request: Request) {
    const response = await generateText({
        model: google('gemini-2.5-flash'),
        prompt: 'Write a vegetarian lasagna recipe for 4 people.',

    });
    console.log(response)
    return NextResponse.json({ response });
}
