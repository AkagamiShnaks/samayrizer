import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";

export async function fetchAndExtractPdfText(fileUrl: string): Promise<string> {
  try {
    // Fetch the PDF file from the provided URL
    const response = await fetch(fileUrl);
    if (!response.ok) {
      throw new Error(`Failed to fetch PDF: ${response.status} ${response.statusText}`);
    }

    // Convert the response into a Blob
    const blob = await response.blob();

    // Initialize the WebPDFLoader with the Blob
    const loader = new WebPDFLoader(blob);

    // Load the documents (each representing a page)
    const docs = await loader.load();

    // Check if any documents were loaded
    if (!docs.length) {
      throw new Error("No pages were extracted from the PDF.");
    }

    // Concatenate the text content from all pages
    const fullText = docs.map((doc) => doc.pageContent).join("\n");

    return fullText;
  } catch (error) {
    console.error("Error during PDF text extraction:", error);
    throw error;
  }
}
