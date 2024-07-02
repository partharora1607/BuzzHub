import React from "react";
import FeedIcon from "@mui/icons-material/Feed";
import ChatIcon from "@mui/icons-material/Chat";
import VideoLibraryIcon from "@mui/icons-material/VideoLibrary";
import GroupIcon from "@mui/icons-material/Group";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import HelpIcon from "@mui/icons-material/Help";
import WorkIcon from "@mui/icons-material/Work";
import EventIcon from "@mui/icons-material/Event";
import SchoolIcon from "@mui/icons-material/School";
import { Button } from "@mui/material";

const Sidebar = () => {
  return (
    <div className="fixed top-20 left-5 w-1/5 h-full p-4 bg-white shadow-lg rounded-lg overflow-y-auto">
      <ul className="space-y-4 text-pink-500">
        <li className="flex items-center space-x-2 ">
          <FeedIcon />
          <span>Feed</span>
        </li>
        <li className="flex items-center space-x-2">
          <ChatIcon />
          <span>Chats</span>
        </li>
        <li className="flex items-center space-x-2">
          <VideoLibraryIcon />
          <span>Videos</span>
        </li>
        <li className="flex items-center space-x-2">
          <GroupIcon />
          <span>Groups</span>
        </li>
        <li className="flex items-center space-x-2">
          <BookmarkIcon />
          <span>Bookmarks</span>
        </li>
        <li className="flex items-center space-x-2">
          <HelpIcon />
          <span>Questions</span>
        </li>
        <li className="flex items-center space-x-2">
          <WorkIcon />
          <span>Jobs</span>
        </li>
        <li className="flex items-center space-x-2">
          <EventIcon />
          <span>Events</span>
        </li>
        <li className="flex items-center space-x-2">
          <SchoolIcon />
          <span>Courses</span>
        </li>
      </ul>
      <div className="mt-4">
        <Button variant="contained" color="primary" className="w-40">
          Show More
        </Button>
      </div>
      <hr className="mt-8"></hr>
      <div className="my-4">
        <div className="flex items-center text-md font-semibold">
          <ul>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
            <li className="flex items-center my-4">
              <img
                src="https://lh3.googleusercontent.com/ogw/AF2bZyglZTxod6hmmu5fGUZB-R8mdJqxXioERaBHZxbApLwBbV8=s64-c-mo"
                className="w-10 h-10 rounded-full bg-cover"
                alt="Logo"
              />
              <span className="mx-2">Parth Arora</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
