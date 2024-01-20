import { useEffect, useState } from "react";
import Modal from "../Model";
import CreatePost from "./CreatePost";
import SinglePost, { Post } from "./SinglePost";
import apiClient from "../../services/api/apiClient";
import { getToken } from "../../services/token/token";

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
    <div className={`${className}`}>
      <CreatePost
        onPostSubmit={function (): void {
          throw new Error("Function not implemented.");
        }}
      />
      <div
        className={`flex flex-col  justify-between items-center ${className}`}
      >
        {posts.map((post) => (
          <div key={post.id} onClick={() => handlePostClick(post)}>
            <SinglePost post={post} />
          </div>
        ))}
      </div>

      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <div className="mx-auto max-w-4xl max-h-[90vh] overflow-y-auto bg-white p-4 rounded-lg shadow-lg">
          {selectedPost && <SinglePost post={selectedPost} inModal={true} />}
        </div>
      </Modal>
    </div>
  );
};

export default Posts;
