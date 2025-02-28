import Post from "./Post";
import Share from "./Share";
import { Posts } from "../Data";
const Feed = () => {
  return (
    <div className="flex-[5.5] ">
      <div className="p-5 ">
        <Share />
        {Posts.map((p) => (
          <Post key={p.id} post={p} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
