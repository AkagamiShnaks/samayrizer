'use server';

import { fetchAndExtractPdfText } from "@/lib/langchain";
import { generateSummaryFromOpenAi } from "@/lib/openai";

export async function generatePDfSummary(uploadResponse: {
  serverData?: {
    userId: string;
    file: { url: string; name: string };
  };
}) {
  if (!uploadResponse?.serverData) {
    return { success: false, message: "Missing server data", data: null };
  }
  const { serverData: { file: { url: pdfUrl } } } = uploadResponse;
  if (!pdfUrl) {
    return { success: false, message: "Missing PDF URL", data: null };
  }

  try {
    // Extract text via WebPDFLoader
    const pdfText = await fetchAndExtractPdfText(pdfUrl);

    // Generate summary with OpenAI
    let summary: string;
    try {
      summary = await generateSummaryFromOpenAi(pdfText);
    } catch (err) {
      console.error("OpenAI summary error:", err);
      return { success: false, message: "Summary generation failed", data: null };
    }
    if (!summary) {
      return { success: false, message: "Empty summary", data: null };
    }

    // Return the AI summary (and optionally the full text for debugging)
    return {
      success: true,
      message: "PDF processed successfully",
      data: {
        summary,
        // pdfText, // include if you need the raw text in dev
      },
    };
  } catch (err) {
    console.error("PDF processing error:", err);
    return { success: false, message: "PDF processing error", data: null };
  }
}
