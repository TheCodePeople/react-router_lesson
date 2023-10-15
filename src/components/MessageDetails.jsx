import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { messages } from "../data";

const MessageDetails = () => {
  const [messageDetails, setMessageDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const currentMessage = messages.find(
      (message) => message.id === parseInt(id)
    );

    setMessageDetails(currentMessage);
  }, [id]);

  if (!messageDetails) return null;

  return (
    <div>
      <h4>{messageDetails.user}</h4>
      <p>{messageDetails.text}</p>
    </div>
  );
};

export default MessageDetails;
