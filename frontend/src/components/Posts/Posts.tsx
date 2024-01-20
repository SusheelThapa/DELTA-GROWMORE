import { useEffect, useState } from "react";
import Modal from "../Model";
import CreatePost from "./CreatePost";
import SinglePost, { Post } from "./SinglePost";
import apiClient from "../../services/apiClient";
import { getToken } from "../../services/token";
import { FaSeedling } from "react-icons/fa";

interface Props {
  className: string;
}

const Posts = ({ className }: Props) => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    console.log(`Bearer ${getToken()}`);
    apiClient
      .get("/api/post", {
        headers: { Authorization: `Bearer ${getToken()}` },
      })
      .then(({ data }) => {
        setPosts(data);
      });
  }, []);

  const [selectedPost, setSelectedPost] = useState<Post | null>(null);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const handlePostClick = (post: Post) => {
    setSelectedPost(post);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPost(null);
  };

  return (
    <div className={`${className} bg-green-50`}>
      {" "}
      <CreatePost
        onPostSubmit={function (): void {
          // Function logic
        }}
      />
      <div
        className={`flex flex-col justify-between items-center ${className}`}
      >
        {posts.map((post) => (
          <div
            key={post.id}
            onClick={() => handlePostClick(post)}
            className="m-4 p-4  rounded-xl "
          >
            <SinglePost post={post} />
          </div>
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mx-auto max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-4 rounded-lg shadow-lg">
          {selectedPost && <SinglePost post={selectedPost} inModal={true} />}
        </div>
      </Modal>
      <div className="fixed bottom-10 right-10 bg-green-600 p-4 rounded-full shadow-md hover:bg-green-700 transition-colors">
        <FaSeedling className="text-white text-2xl" />{" "}
        {/* Example icon for a new post or similar action */}
      </div>
    </div>
  );
};

export default Posts;
