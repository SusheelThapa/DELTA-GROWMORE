import { useState } from "react";
import { IoSend } from "react-icons/io5";
import { FiMic, FiImage, FiFile } from "react-icons/fi";

/**
 * Props for the SendMessage component.
 *
 * @typedef {Object} Props
 * @property {(message: string, messageType: string) => void} handleSendMessage - Function to handle the sending of messages.
 * @property {string} message - The current message input value.
 * @property {(message: string) => void} setMessage - Function to set the current message.
 */
interface Props {
  handleSendMessage: (message: string, messageType: string) => void;
  message: string;
  setMessage: (message: string) => void;
}

/**
 * Component for sending messages.
 * It allows sending of text messages and uploading files like images, audio, and other files.
 *
 * @param {Props} props - The props for the SendMessage component.
 * @returns {TSX.Element} The SendMessage component.
 */
const SendMessage = ({ handleSendMessage, message, setMessage }: Props) => {
  const [file, setFile] = useState(null);

  /**
   * Handles the change event for file input.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event from the file input.
   */
  const onFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const onSend = (e) => {
    e.preventDefault();
    if (file) {
      handleSendMessage(file, "file");
      setFile(null);
    } else {
      handleSendMessage(message, "text");
    }
    setMessage("");
  };

  return (
    <div className="flex justify-between items-center px-4 py-3 bg-gray-100 border-t border-gray-300">
      <div className="flex space-x-2">
        <label htmlFor="file-upload" className="cursor-pointer">
          <FiImage className="text-2xl text-blue-600 hover:text-blue-800 transition-colors" />
        </label>
        <input
          id="file-upload"
          type="file"
          onChange={onFileChange}
          className="hidden"
        />

        <label htmlFor="audio-upload" className="cursor-pointer">
          <FiMic className="text-2xl text-green-600 hover:text-green-800 transition-colors" />
        </label>
        <input
          id="audio-upload"
          type="file"
          accept="audio/*"
          onChange={onFileChange}
          className="hidden"
        />

        <label htmlFor="file-upload-generic" className="cursor-pointer">
          <FiFile className="text-2xl text-purple-600 hover:text-purple-800 transition-colors" />
        </label>
        <input
          id="file-upload-generic"
          type="file"
          onChange={onFileChange}
          className="hidden"
        />
      </div>

      <form className="flex-grow mx-4" onSubmit={onSend}>
        <input
          className="w-full p-3 text-sm text-gray-700 placeholder-gray-500 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
          placeholder="Type your message here..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>

      <button
        onClick={onSend}
        className="p-3 bg-indigo-500 rounded-full text-white hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition duration-150 ease-in-out"
      >
        <IoSend className="w-6 h-6" />
      </button>
    </div>
  );
};

export default SendMessage;
