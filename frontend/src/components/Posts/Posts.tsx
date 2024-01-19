import { useState } from "react";
import Modal from "../Model";
import CreatePost from "./CreatePost";
import SinglePost, { Post } from "./SinglePost";

interface Props {
  className: string;
}

const Posts = ({ className }: Props) => {
  const posts = [
    {
      id: 1,
      username: "Alice",
      date: "2024-01-15",
      description:
        "Had a great day at the beach! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrumofficia ipsum enim est perspiciatis beatae eos cupiditate nemo aliquam,porro delectus veritatis commodi unde doloribus consectetur voluptatesqui numquam",
      postImageURL:
        "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFncmljdWx0dXJlfGVufDB8fDB8fHww",
      noOfLikes: 120,
      noOfComments: 30,
      comments: [
        {
          id: 1,
          username: "Bob",
          comment: "Looks amazing, Alice! 😍",
          date: "2024-01-18",
        },
        {
          id: 2,
          username: "Charlie",
          comment: "Wish I was there! Have fun! 🌴",
          date: "2024-01-18",
        },
      ],
    },
    {
      id: 2,
      username: "Bob",
      date: "2024-01-14",
      description:
        "Exploring the mountains! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrumofficia ipsum enim est perspiciatis beatae eos cupiditate nemo aliquam,porro delectus veritatis commodi unde doloribus consectetur voluptatesqui numquam",
      postImageURL:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu5e6kdTBgDuJiyExPrIFsygH5lgULOWLE7yZl7EMsEA&s",
      noOfLikes: 95,
      noOfComments: 42,
      comments: [
        {
          id: 1,
          username: "Alice",
          comment: "That's incredible, Bob! Congrats! 🏃‍♂️",
          date: "2024-01-17",
        },
      ],
    },
    {
      id: 3,
      username: "Charlie",
      date: "2024-01-13",
      description:
        "Delicious homemade pizza. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum officia ipsum enim est perspiciatis beatae eos cupiditate nemo aliquam, porro delectus veritatis commodi unde doloribus consectetur voluptates qui numquam",
      postImageURL:
        "https://t3.ftcdn.net/jpg/02/86/02/22/360_F_286022279_zTU2R0YbUwWRS9esGbtB2dUuEnWaZ3pO.jpg",
      noOfLikes: 150,
      noOfComments: 20,
      comments: [
        {
          id: 1,
          username: "Alice",
          comment: "Stunning view, Charlie!",
          date: "2024-01-15",
        },
        {
          id: 2,
          username: "Bob",
          comment: "Looks like an amazing adventure!",
          date: "2024-01-15",
        },
      ],
    },
  ];

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
