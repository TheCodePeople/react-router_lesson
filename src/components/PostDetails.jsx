import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import data from "../data";

const PostDetails = () => {
  const { id } = useParams();
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    if (id) {
      const post = data.find((post) => post.id === parseInt(id));
      setPostData(post);
    }
  }, [id]);

  if (!postData) {
    return;
  }

  return (
    <div>
      <h3>{postData.name}</h3>
      <p>{postData.content}</p>
    </div>
  );
};

export default PostDetails;
