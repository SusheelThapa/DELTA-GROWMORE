/**
 * @file GrowAI.tsx
 * @description Component for integrating and displaying messages with the GrowAI chatbot.
 */

import { useState } from "react";
import Chat from "../../components/Chat";
import SendMessage from "../../components/SendMessage";
import { askGrowAI } from "../../services/askGrowAI";

/**
 * @interface Message
 * @description Represents a chat message with a username and content.
 */

export interface Message {
  username: string;
  message: string;
  isLoading?: boolean;
}
/**
 * @function GrowAI
 * @description Component for the GrowAI page, handling user messages and responses from the chatbot.
 *
 * @returns {TSX.Element} - The GrowAI component.
 */
const GrowAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");
  /**
   * @function handleSendMessage
   * @description Handles sending a user message to the chatbot and updating the chat accordingly.
   */
  const handleSendMessage = async () => {
    const userMessage = {
      username: "User",
      message: message,
    };

    const loadingMessage = {
      username: "GrowAI",
      message: "",
      isLoading: true,
    };

    setMessages((currentMessages) => [
      ...currentMessages,
      userMessage,
      loadingMessage,
    ]);

    const aiMessage = await askGrowAI(message);
    const growAIMessage = { username: "GrowAI", message: aiMessage };

    setMessages((currentMessages) => {
      return currentMessages.map((m, index) =>
        index === currentMessages.length - 1 ? growAIMessage : m
      );
    });
    setMessage("");
  };

  return (
    <div className="flex flex-col justify-end w-full bg-gray-200 shadow-md">
      <Chat messages={messages} />
      <SendMessage
        handleSendMessage={handleSendMessage}
        message={message}
        setMessage={setMessage}
      />
    </div>
  );
};

export default GrowAI;
