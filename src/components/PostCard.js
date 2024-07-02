import MoreVertIcon from "@mui/icons-material/MoreVert";
import ThumbUpSharpIcon from "@mui/icons-material/ThumbUpSharp";
import FavoriteSharpIcon from "@mui/icons-material/FavoriteSharp";
import { useState } from "react";

const PostCard = (props) => {
  const [reaction, setReactions] = useState(0);
  const [liked, setLiked] = useState(false);
  const [heart, setHeart] = useState(false);

  const handleReaction = (msg) => {
    if (msg === "liked") {
      if (liked) {
        setReactions(reaction - 1);
      } else {
        setReactions(reaction + 1);
      }
      setLiked(!liked);
    } else {
      if (heart) {
        setReactions(reaction - 1);
      } else {
        setReactions(reaction + 1);
      }
      setHeart(!heart);
    }
  };

  const post = props.post;
  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
            className="w-10 h-10 rounded-full bg-cover"
            alt="Profile"
          />
          <div className="ml-4">
            <h1 className="text-gray-800 font-serif text-lg">Parth Arora</h1>
            <h1 className="text-[12px]"> 5 mins ago</h1>
          </div>
        </div>
        <MoreVertIcon className="text-gray-600 cursor-pointer" />
      </div>
      <div className="mt-4">
        <h1 className="text-gray-700 mb-2">{post.title}</h1>
        <img src={post.src} alt="Post" className="w-full rounded-lg" />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex mt-4 space-x-3">
          <div
            onClick={() => {
              handleReaction("liked");
            }}
          >
            <ThumbUpSharpIcon className="text-blue-600 cursor-pointer" />
          </div>
          <div
            onClick={() => {
              handleReaction("heart");
            }}
          >
            <FavoriteSharpIcon className="text-red-600 cursor-pointer" />
          </div>
          <h1 className="cursor-pointer hover:underline">
            {reaction} Reactions
          </h1>
        </div>
        <p className="mt-4 hover:underline cursor-pointer">9 comments</p>
      </div>
    </div>
  );
};

export default PostCard;
