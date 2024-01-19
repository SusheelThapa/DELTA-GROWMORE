import { useState } from "react";
interface Props {
  onPostSubmit: () => void;
}
const CreatePost = ({ onPostSubmit }:Props) => {
  const [postContent, setPostContent] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (postContent.trim()) {
      onPostSubmit(postContent);
      setPostContent("");
    }
  };

  return (
    <div className="max-w-2xl mx-auto bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
      <form onSubmit={handleSubmit}>
        <textarea
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          rows={4}
          placeholder="What's on your mind?"
          value={postContent}
          onChange={(e) => setPostContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
