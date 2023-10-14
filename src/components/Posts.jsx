import { Link } from "react-router-dom";

import { posts } from "../data";

const Posts = () => {
  return (
    <div className="posts-container">
      {posts.map((post) => (
        <ul className="post-item" key={post.id}>
          <li className="post-item">
            <Link key={post.id} to={`/posts/${post.id}`}>
              {post.name}
            </Link>
          </li>
        </ul>
      ))}
    </div>
  );
};

export default Posts;
