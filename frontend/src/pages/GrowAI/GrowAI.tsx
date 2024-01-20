import { useState } from "react";
import Chat from "../../components/Chat";
import SendMessage from "../../components/SendMessage";

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

    // Simulate an API call
    setTimeout(() => {
      const growAIMessage = {
        username: "GrowAI",
        message: "This is a response from GrowAI",
      };

      setMessages((currentMessages) => {
        return currentMessages.map((m, index) =>
          index === currentMessages.length - 1 ? growAIMessage : m
        );
      });
    }, 2000);

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
