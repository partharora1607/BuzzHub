import PostCard from "./PostCard";
import { MYPOST } from "../dummy_data/my_post";

const Post = () => {
  return (
    <div>
      {MYPOST.map((p) => (
        <PostCard key={p.id} post={p} />
      ))}
    </div>
  );
};

export default Post;
