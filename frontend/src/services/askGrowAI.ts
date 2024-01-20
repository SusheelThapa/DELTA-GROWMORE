import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "your-api-key",
  dangerouslyAllowBrowser: true,
});

export const askGrowAI = async (userMessage: string) => {
  const growAIPrompts = `
  - Ask GrowAI for the latest agricultural practices and educational resources.
  - Inquire about sustainable farming techniques and resources with GrowAI.
  - Seek advice from GrowAI on which crops are suitable for planting in the current season.
  - Ask GrowAI for recommendations on seasonal crop choices based on my location.
  - Consult GrowAI for guidance on selecting the right seeds for my farm.
  - Request seed recommendations from GrowAI considering my soil type and climate.
  - Describe plant symptoms, and let GrowAI diagnose potential diseases and suggest remedies.
  - Get advice from GrowAI on treating and preventing specific diseases affecting my crops.
  - Inquire about organic pest control methods from GrowAI.
  - Ask GrowAI for recommendations on dealing with specific pests affecting my crops.
  - Get insights from GrowAI on how current weather conditions might affect my crops.
  - Ask GrowAI for weather-related tips and precautions for my farming practices.
  - Seek guidance from GrowAI on effective crop rotation strategies for sustainable farming.
  - Ask GrowAI for advice on planning my crop rotation to improve soil health.
  - Consult GrowAI for personalized recommendations on fertilization practices.
  - Ask GrowAI for guidance on optimizing fertilizer usage for my specific crops.
  - Inquire about the optimal time and techniques for harvesting specific crops with GrowAI.
  - Get advice from GrowAI on post-harvest practices to maximize crop quality.
  - Ask GrowAI for interesting agricultural facts and insights.
  - Seek general agricultural knowledge and trivia from GrowAI for continuous learning.
  `;

  const prompt = `${growAIPrompts}\n ${userMessage}`;

  const response = await openai.chat.completions.create({
    model: "gpt-3.5-turbo",
    messages: [
      {
        role: "assistant",
        content: prompt,
      },
    ],
  });

  const message = response.choices[0];

  return message.message.content;
};
