interface CommentProps {
  username: string;
  comment: string;
  date: string;
}

const Comment = ({ username, comment, date }: CommentProps) => {
  return (
    <div className="border-t border-gray-300 mt-2 pt-2">
      <p className="text-sm font-semibold">{username}</p>
      <p className="text-sm">{comment}</p>
      <p className="text-xs text-gray-500">{date}</p>
    </div>
  );
};

export default Comment;
