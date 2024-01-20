import { useState } from "react";
import Chat from "../../components/Chat";
import SendMessage from "../../components/SendMessage";
import { askGrowAI } from "../../services/askGrowAI";

export interface Message {
  username: string;
  message: string;
  isLoading?: boolean;
}

const GrowAI = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

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
