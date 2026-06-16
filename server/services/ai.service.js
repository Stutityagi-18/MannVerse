const axios = require("axios");

const generateReflection = async (journalText) => {
 const prompt = `
Analyze these journal entries.

Return ONLY valid JSON:

{
  "summary": "",
  "reflection": "",
  "suggestion": "",
  "dominantEmotion": "",
  "tags": ["", "", ""]
}

Generate exactly 3 emotional tags.

Example:
{
  "summary": "....",
  "reflection": "....",
  "suggestion": "....",
  "dominantEmotion": "Sadness",
  "tags": ["Reflective", "Low Mood", "Self Aware"]
}

Journal:
${journalText}
`;

  try {
    const response = await axios.post(
      "https://router.huggingface.co/v1/chat/completions",
      {
        model: "Qwen/Qwen2.5-7B-Instruct",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 300,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.HF_TOKEN}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("HF RESPONSE:");
    console.log(response.data);
    console.log("HF RAW:");
console.log(
  response.data.choices[0].message.content
);

    return JSON.parse(
      response.data.choices[0].message.content
    );
  } catch (err) {
    console.log("HF ERROR:");
    console.log(err.response?.data);

    throw err;
  }
};

module.exports = { generateReflection };