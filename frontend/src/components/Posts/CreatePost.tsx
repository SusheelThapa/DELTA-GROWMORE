import { useState } from "react";
import { FaImage } from "react-icons/fa";

interface Props {
  onPostSubmit: () => void;
}

const CreatePost = ({ onPostSubmit }: Props) => {
  const [postContent, setPostContent] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = () => {
    // API Call
    console.log(postContent);
    onPostSubmit();
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  return (
    <div className="mx-32 my-6 bg-white rounded-3xl shadow-md border border-gray-300 p-4">
      <h2 className="text-lg font-semibold mb-2 text-gray-700">Create Post</h2>
      <textarea
        className="w-full h-28 border border-gray-300 rounded-md p-3 resize-none focus:outline-none focus:ring-2 focus:ring-blue-200"
        placeholder="What's on your mind?"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      ></textarea>
      <div className="flex justify-between items-center mt-3">
        <div className="flex items-center space-x-3">
          <label
            htmlFor="image-upload"
            className="cursor-pointer flex items-center"
          >
            <FaImage className="text-lg text-blue-600" />
            <span className="ml-1 text-sm text-gray-700">Photo/Video</span>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
          {image && (
            <div className="flex items-center text-sm text-gray-500">
              <span className="truncate max-w-xs">{image.name}</span>
              <button
                className="ml-2 text-gray-500 hover:text-red-600"
                onClick={() => setImage(null)}
              >
                ×
              </button>
            </div>
          )}
        </div>
        <button
          className={`bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition duration-300 ${
            !postContent ? "opacity-50 cursor-not-allowed" : ""
          }`}
          onClick={handleSubmit}
          disabled={!postContent}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default CreatePost;
