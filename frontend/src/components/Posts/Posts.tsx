import Post from "./Post";

interface Props {
  className: string;
}

const Posts = ({ className }: Props) => {
  return (
    <div
      className={`flex flex-col space-y-10 justify-between items-center ${className}`}
    >
      <Post />
      <Post />
      <Post />
    </div>
  );
};

export default Posts;
