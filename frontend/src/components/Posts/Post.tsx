import { FaThumbsUp, FaRegCommentAlt } from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

export interface Post {
  username: string;
  date: string;
  description: string;
  postImageURL: string;
  noOfLikes: number;
  noOfComments: number;
}

interface Props {
  post: Post;
}

const Post = ({ post }: Props) => {
  const profileImage =
    "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0=";

  return (
    <div className="mx-32 my-4 bg-white rounded-3xl border border-gray-300 shadow-lg hover:shadow-xl transition duration-300 overflow-hidden">
      <div className="p-7">
        <div className="flex items-center space-x-3 overflow-hidden rounded-full">
          <img
            className="w-10 h-10 rounded-full"
            src={profileImage}
            alt="Profile"
          />
          <div>
            <p className="text-sm font-medium text-gray-800">{post.username}</p>
            <p className="text-xs text-gray-500">{post.date}</p>
          </div>
        </div>

        <p className="mt-3 text-gray-800">{post.description}</p>

        <img
          className="mt-3 w-full rounded-lg"
          src={post.postImageURL}
          alt="Post"
        />

        <div className="flex justify-between items-center mt-3 text-gray-500">
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <FaThumbsUp />
            <span>{post.noOfLikes}</span>
          </button>
          <button className="flex items-center space-x-1 hover:text-blue-600">
            <FaRegCommentAlt />
            <span>{post.noOfComments}</span>
          </button>
        </div>

        <div className="mt-3 flex items-center">
          <div className="flex-grow flex items-center bg-gray-100 rounded-full px-4 py-2 border border-gray-300">
            <input
              className="bg-transparent flex-grow text-sm outline-none"
              type="text"
              placeholder="Write a comment..."
            />
            <IoMdSend className="text-gray-500 text-2xl ml-2 hover:text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
