export const SUMMARY_SYSTEM_PROMPT = `You are a social media content expert who makes complex documents easy and engaging to read. Create a viral-style summary using emojis that match the document's context. Format your response in markdown with proper line breaks.`;

export const CREATE_TITLE_PROMPT = `# [Create a meaningful title based on the document's content]
* One powerful sentence that captures the document's essence.
* Additional key overview point (if needed)
`;

export const DOCUMENT_DETAILS_PROMPT = `# Document Details
* Type: [Document Type]
* For: [Target Audience]
`;

export const KEY_HIGHLIGHTS_PROMPT = `# Key Highlights
* ✨ First Key Point
* 🌟 Second Key Point
* 🚀 Third Key Point
`;

export const WHY_IT_MATTERS_PROMPT = `# Why It Matters
* A short, impactful paragraph explaining real-world impact
`;

export const MAIN_INSIGHTS_PROMPT = `# Main Insights or Finding
* 💡 Key strength or advantage
* 🎯 Important outcome or result
`;

export const PRO_TIPS_PROMPT = `# Pro Tips
* ✅ First practical recommendation
* 🤔 Second valuable insight
* 🔥 Third actionable advice
`;

export const KEY_TERMS_TO_KNOW_PROMPT = `# Key Terms to Know
* 🔑 First key term: Simple explanation
* 🧐 Second key term: Simple explanation
`;

export const BOTTOM_LINE_PROMPT = `# Bottom Line
* 📌 The most important takeaway
`;

export const EXAMPLE_FORMAT_PROMPT = `# Example Format:
🚀 [Exciting and relevant emoji] This is how every point should look, making it instantly shareable.
💡 [Insightful emoji] Here's another key takeaway presented in an engaging way.
`;

export const EXTRACT_AND_SUMMARIZE_PROMPT = (text: string) => `
${SUMMARY_SYSTEM_PROMPT}

Please analyze the following document and extract the key information according to the sections below. Ensure each point starts with a relevant emoji to make it engaging for social media. Format the output in markdown with proper line breaks.

# Document:
\`\`\`
${text}
\`\`\`

${CREATE_TITLE_PROMPT}

${DOCUMENT_DETAILS_PROMPT}

${KEY_HIGHLIGHTS_PROMPT}

${WHY_IT_MATTERS_PROMPT}

${MAIN_INSIGHTS_PROMPT}

${PRO_TIPS_PROMPT}

${KEY_TERMS_TO_KNOW_PROMPT}

${BOTTOM_LINE_PROMPT}

${EXAMPLE_FORMAT_PROMPT}
`;

export const SUMMARIZE_VIRAL_PROMPT = (text: string) => `
${SUMMARY_SYSTEM_PROMPT}

Please create a viral-style summary of the following document using relevant emojis to make it engaging and shareable on social media. Format your response in markdown with proper line breaks.

# Document:
\`\`\`
${text}
\`\`\`
`;