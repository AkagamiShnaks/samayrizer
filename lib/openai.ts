import { OpenAI } from "openai";
import { SUMMARY_SYSTEM_PROMPT } from "@/utils/prompts";

// Initialize OpenAI client with your API key
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this environment variable is set
});

export async function generateSummaryFromOpenAi(text: string): Promise<string> {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo", // You can use 'gpt-4' or 'gpt-3.5-turbo' based on your access
      messages: [
        {
          role: "system",
        content: SUMMARY_SYSTEM_PROMPT
        },
        {
          role: "user",
          content: `Transform this document into an engaging easy to read summary with relevant emojis. The summary should be formatted in markdown with proper line breaks. Here is the document: \n\n${text}`,
        },
      ],
      temperature: 0.5,
      max_tokens: 1500, // Adjust based on desired summary length
    });

    // Extract and return the summary from the response
    return response.choices[0]?.message?.content?.trim() || "";
  } catch (error) {
    console.error("Error generating summary:", error);
    throw error;
  }
}
