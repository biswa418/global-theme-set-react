import { useState } from "react";

const Post = (props) => {
  //Task-2: Toggle "liked-btn" and "like-btn" class when user clicks the like button.
  const [like, toggleLike] = useState(false);
  const liked = like ? "liked-btn" : "like-btn";

  return (
    <div className="post">
      <hr />
      <h2>{props.title}</h2>
      <div>
        <i>
          <span>{props.date}</span>
          <br />
          <span>{props.length} min read</span>
        </i>
      </div>
      <p>{props.content}</p>
      <button className={`${liked}`} onClick={() => toggleLike(!like)}>
        {like ? "Liked" : "Like"}
      </button>
    </div>
  );
};

export default Post;
