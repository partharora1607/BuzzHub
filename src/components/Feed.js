import CollectionsIcon from "@mui/icons-material/Collections";
import LabelIcon from "@mui/icons-material/Label";
import PlaceIcon from "@mui/icons-material/Place";
import MoodIcon from "@mui/icons-material/Mood";
import { Button } from "@mui/material";
import Post from "./Post";

const Feed = () => {
  return (
    <div className="mt-16">
      <div className="p-4 bg-white rounded-lg shadow-md">
        <div className="flex space-x-4 mb-4">
          <img
            src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
            className="w-12 h-12 rounded-full bg-cover hover:ring-4"
            alt="Profile"
          />
          <input
            type="text"
            placeholder="What's on your mind, Parth?"
            className="flex-1 px-4 py-2 bg-gray-100 rounded-full outline-none"
          />
        </div>
        <hr className="my-4" />
        <div className="flex justify-between items-center">
          <ul className="flex space-x-6">
            <li className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-orange-500">
              <CollectionsIcon />
              <span>Photo or Video</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-blue-500">
              <LabelIcon />
              <span>Tag</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-green-500">
              <PlaceIcon />
              <span>Location</span>
            </li>
            <li className="flex items-center space-x-2 text-gray-600 cursor-pointer hover:text-yellow-500">
              <MoodIcon />
              <span>Feeling</span>
            </li>
          </ul>
          <Button variant="contained" color="primary" className="ml-4">
            Share
          </Button>
        </div>
      </div>
      <div className="p-4 bg-white rounded-lg shadow-md my-4">
        <Post/>
      </div>
    </div>
  );
};

export default Feed;
