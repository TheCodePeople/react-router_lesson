import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { posts } from "../data";

const PostDetails = () => {
  const { id } = useParams();
  const [postInfo, setPostInfo] = useState(null);

  useEffect(() => {
    const result = posts.find((post) => post.id === parseInt(id));

    setPostInfo(result);
  }, [id]);

  if (!postInfo) {
    return;
  }

  return (
    <div>
      <h3>{postInfo.name}</h3>
      <p>{postInfo.content}</p>
    </div>
  );
};

export default PostDetails;
