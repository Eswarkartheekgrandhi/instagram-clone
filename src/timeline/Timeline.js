import React, { useState } from "react";
import "./Timeline.css";
import Suggestions from "./Suggestions";
import Post from "./Posts/Post";

function Timeline() {
  const [posts, setPosts] = useState([
    {
      user: "kartheek_",
      postImage:
        "https://previews.123rf.com/images/leungchopan/leungchopan1603/leungchopan160300586/53180534-back-view-of-little-boy-running-at-park.jpg",
      likes: 40,
      timestamp: "2d",
    },
    {
      user: "anandh_",
      postImage:
        "https://images.unsplash.com/photo-1496302662116-35cc4f36df92?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fHBlcnNvbnxlbnwwfHwwfHw%3D&w=1000&q=80",
      likes: 50,
      timestamp: "4d",
    },
    {
      user: "hari_",
      postImage:
        "https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8&w=1000&q=80",
      likes: 60,
      timestamp: "6d",
    },
    {
      user: "max_",
      postImage:
        "https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg",
      likes: 70,
      timestamp: "8d",
    },
  ]);
  return (
    <div className="timeline">
      <div className="timeline__left">
        <div className="timeline__posts">
          {posts.map((post) => (
            <Post
              user={post.user}
              postImage={post.postImage}
              likes={post.likes}
              timestamp={post.timestamp}
            />
          ))}
        </div>
      </div>
      <div className="timeline__right">
        <Suggestions />
      </div>
    </div>
  );
}

export default Timeline;
