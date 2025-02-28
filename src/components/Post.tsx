import { BsThreeDotsVertical } from "react-icons/bs";
import { Users } from "../Data";
import { useState } from "react";

const Post = ({ post }) => {
  const [like, setLike] = useState(post.like);
  const [isLike, setisLike] = useState(false);

  function likeHandle() {
    setLike(isLike ? like - 1 : like + 1);
    setisLike(!isLike)
  }
  return (
    <div className="w-full rounded-lg shadow-[5px_6px_14px_-6px_rgba(255,255,255,1)] mt-[30px] mb-[30px]">
      <div className="p-2">
        <div className="flex items-center justify-between postTop">
          <div className="flex items-center post-topLeft">
            <img
              src={Users.find((i) => i.id === post.userId)?.profilePicture}
              className="w-[32px] h-[32px] rounded-full object-cover"
              alt=""
            />
            <span className="text-[15px] mr-[10px] ml-[10px]">
              {Users.filter((u) => u.id === post.userId)[0].username}
            </span>
            <span className="text-sm ">{post.date}</span>
          </div>
          <div className="post-topRight">
            <BsThreeDotsVertical />
          </div>
        </div>
        <div className="postCenter mt-[20px] mb-[20px]">
          <span className="">{post?.desc}</span>
          <img
            src={post.photo}
            alt=""
            className="mt-[20px] w-full max-h-[500px] object-cover"
          />
        </div>
        <div className="flex items-center justify-between postBottom ">
          <div className="flex items-center left">
            <img
              className="likeIcons"
              src="../../pubic/assets/heart.png"
              onClick={likeHandle}
              alt=""
            />
            <img
              className="likeIcons"
              onClick={likeHandle}
              src="../../pubic/assets/like.png"
              alt=""
            />
            <span className="inline-block post-likeCounter text-[15px]">
              {like}K People Liked It
            </span>
          </div>
          <div className="right">
            <span className="border cursor-pointer post-CommentsCounter text-[15px]">
              {" "}
              {post.comment}K Comments
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
