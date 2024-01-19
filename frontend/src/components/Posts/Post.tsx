import { FaThumbsUp, FaRegCommentAlt } from "react-icons/fa";

const Post = () => {
  return (
    <div className="mx-32 bg-gray-50 rounded-lg border border-gray-200 shadow-md ">
      <div className="flex items-center space-x-3 p-3">
        <img
          className="w-10 h-10 rounded-full"
          src={
            "https://media.istockphoto.com/id/1495088043/vector/user-profile-icon-avatar-or-person-icon-profile-picture-portrait-symbol-default-portrait.jpg?s=612x612&w=0&k=20&c=dhV2p1JwmloBTOaGAtaA3AW1KSnjsdMt7-U_3EZElZ0="
          }
          alt="Profile"
        />
        <div>
          <p className="text-sm font-bold text-gray-900">Susheel Thapa</p>
          <p className="text-sm text-gray-600">2023-01-21</p>
        </div>
      </div>
      <p className="text-gray-700 px-4 py-2">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam nostrum
        officia ipsum enim est perspiciatis beatae eos cupiditate nemo aliquam,
        porro delectus veritatis commodi unde doloribus consectetur voluptates
        qui numquam saepe obcaecati corporis similique dolores omnis? Quia rerum
        magni molestiae aspernatur, ut dignissimos corporis, nihil itaque
        expedita beatae fuga tempora inventore modi quibusdam reiciendis?
        Voluptatum suscipit fugiat excepturi alias cumque. Aspernatur quas qui
        eos laboriosam at. Molestiae eius fuga architecto, doloribus doloremque
        nostrum aperiam repudiandae eaque id sapiente accusamus deserunt
        suscipit, tempore ea consequatur sit numquam! Dolorum hic exercitationem
        unde repellendus corrupti placeat ea. Corrupti accusamus corporis atque
        consequuntur quod?
      </p>
      {true && <img className="w-full" src={"#"} alt="Post" />}
      <div className="flex justify-between items-center p-3 border-t">
        <button className="flex items-center text-blue-500">
          <FaThumbsUp />
          <span className="ml-1">{3} Likes</span>
        </button>
        <button className="flex items-center text-blue-500">
          <FaRegCommentAlt />
          <span className="ml-1">Comment</span>
        </button>
      </div>
    </div>
  );
};

export default Post;
