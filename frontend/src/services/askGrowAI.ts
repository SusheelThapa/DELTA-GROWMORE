import OpenAI from "openai";
const openai = new OpenAI({
  apiKey: "your-api-key",
  dangerouslyAllowBrowser: true,
});

export const askGrowAI = async (userMessage: string) => {
  const guidedMessage =
    "Can you provide insights, advice, or information about business strategies, startups, entrepreneurship, or innovative ideas for the following question and if question does not match reply saying to ask only business related questions.";

  const prompt = `${guidedMessage}\n ${userMessage}`;

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
